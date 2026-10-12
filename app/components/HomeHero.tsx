"use client";

import { useEffect, useRef, useState } from "react";

const FPS = 24;
const FRAME_COUNT = 120;
const LOOKAHEAD = 6;

type Variant = "desktop" | "tablet" | "phone";

const VARIANTS: Record<
  Variant,
  {
    dir: string;
    width: number;
    height: number;
    cropTop: number;
    cropBottom: number;
    reserve: string;
    cache?: string;
  }
> = {
  desktop: {
    dir: "/home-hero/desktop",
    width: 1920,
    height: 1080,
    cropTop: 0.159,
    cropBottom: 0.171,
    reserve: "11rem",
  },
  tablet: {
    dir: "/home-hero/tablet",
    width: 1040,
    height: 1220,
    cropTop: 0.19,
    cropBottom: 0.189,
    reserve: "12rem",
    cache: "2",
  },
  phone: {
    dir: "/home-hero/phone",
    width: 1080,
    height: 1920,
    cropTop: 0.161,
    cropBottom: 0.124,
    reserve: "13rem",
  },
};

function detectVariant(): Variant {
  const width = window.innerWidth;
  const portrait = window.matchMedia("(orientation: portrait)").matches;
  if (width < 800) return "phone";
  if (width < 1280 && portrait) return "tablet";
  return "desktop";
}

function frameUrl(dir: string, index: number, cache?: string) {
  const url = `${dir}/${String(index).padStart(5, "0")}.png`;
  return cache ? `${url}?v=${cache}` : url;
}

export default function HomeHero() {
  const [variant, setVariant] = useState<Variant | null>(null);

  useEffect(() => {
    const apply = () => setVariant(detectVariant());
    apply();
    window.addEventListener("resize", apply);
    window.addEventListener("orientationchange", apply);
    return () => {
      window.removeEventListener("resize", apply);
      window.removeEventListener("orientationchange", apply);
    };
  }, []);

  return (
    <>
      <div className="hidden w-full justify-center md:landscape:flex lg:flex">
        <HeroFrame variant="desktop" active={variant === "desktop"} />
      </div>
      <div className="hidden w-full justify-center md:max-lg:portrait:flex">
        <HeroFrame variant="tablet" active={variant === "tablet"} />
      </div>
      <div className="flex w-full justify-center md:hidden">
        <HeroFrame variant="phone" active={variant === "phone"} />
      </div>
    </>
  );
}

function HeroFrame({ variant, active }: { variant: Variant; active: boolean }) {
  const { width, height, cropTop, cropBottom, reserve } = VARIANTS[variant];
  const visible = 1 - cropTop - cropBottom;

  return (
    <div
      className="flex w-full max-w-[1400px] items-center justify-center overflow-hidden"
      style={{ maxHeight: `calc(100svh - ${reserve})` }}>
      <div
        className="relative w-full shrink-0 overflow-hidden"
        style={{ aspectRatio: `${width} / ${height * visible}` }}>
        {active ? (
          <SequencePlayer
            variant={variant}
            cropTop={cropTop}
            visible={visible}
          />
        ) : null}
      </div>
    </div>
  );
}

function SequencePlayer({
  variant,
  cropTop,
  visible,
}: {
  variant: Variant;
  cropTop: number;
  visible: number;
}) {
  const { dir, width, height, cache } = VARIANTS[variant];
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mediaStyle = {
    top: `${-((cropTop / visible) * 100).toFixed(3)}%`,
    height: `${(100 / visible).toFixed(3)}%`,
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let cancelled = false;
    let raf = 0;
    const blobs: Array<Blob | null> = Array(FRAME_COUNT).fill(null);
    const bitmaps = new Map<number, ImageBitmap>();
    const inflight = new Set<number>();

    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const draw = (bitmap: ImageBitmap) => {
      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(bitmap, 0, 0);
    };

    const decode = async (index: number) => {
      if (cancelled || bitmaps.has(index) || inflight.has(index)) return;
      const blob = blobs[index];
      if (!blob) return;
      inflight.add(index);
      try {
        const bitmap = await createImageBitmap(blob);
        if (cancelled) {
          bitmap.close();
          return;
        }
        const prev = bitmaps.get(index);
        if (prev) prev.close();
        bitmaps.set(index, bitmap);
      } finally {
        inflight.delete(index);
      }
    };

    const evict = (current: number) => {
      for (const [index, bitmap] of bitmaps) {
        const dist = (index - current + FRAME_COUNT) % FRAME_COUNT;
        if (dist > LOOKAHEAD) {
          bitmap.close();
          bitmaps.delete(index);
        }
      }
    };

    const play = () => {
      const start = performance.now();
      const tick = (now: number) => {
        if (cancelled) return;
        const index =
          Math.floor(((now - start) / 1000) * FPS) % FRAME_COUNT;
        const bitmap = bitmaps.get(index);
        if (bitmap) draw(bitmap);
        for (let ahead = 1; ahead <= LOOKAHEAD; ahead += 1) {
          void decode((index + ahead) % FRAME_COUNT);
        }
        evict(index);
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const load = async () => {
      const first = await fetch(frameUrl(dir, 0, cache)).then(response =>
        response.blob(),
      );
      if (cancelled) return;
      blobs[0] = first;
      await decode(0);
      const firstBitmap = bitmaps.get(0);
      if (firstBitmap) draw(firstBitmap);
      if (prefersReduced) return;

      let next = 1;
      const workers = 8;
      await Promise.all(
        Array.from({ length: workers }, async () => {
          while (next < FRAME_COUNT && !cancelled) {
            const index = next;
            next += 1;
            blobs[index] = await fetch(frameUrl(dir, index, cache)).then(
              response => response.blob(),
            );
          }
        }),
      );
      if (cancelled) return;

      for (let ahead = 1; ahead <= LOOKAHEAD; ahead += 1) {
        await decode(ahead);
      }
      if (!cancelled) play();
    };

    void load();

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      for (const bitmap of bitmaps.values()) bitmap.close();
      bitmaps.clear();
    };
  }, [dir, width, height, cache]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute left-0 w-full max-w-none"
      style={mediaStyle}
    />
  );
}
