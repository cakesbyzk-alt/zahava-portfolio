"use client";

import { useEffect, useRef } from "react";

const FPS = 24;
const LOOKAHEAD = 6;

function frameUrl(dir: string, index: number) {
  return `${dir}/${String(index).padStart(5, "0")}.png`;
}

export default function PngSequence({
  dir,
  count,
  width,
  height,
  cropTop = 0,
  cropBottom = 0,
  cropLeft = 0,
  cropRight = 0,
  className,
  label,
}: {
  dir: string;
  count: number;
  width: number;
  height: number;
  cropTop?: number;
  cropBottom?: number;
  cropLeft?: number;
  cropRight?: number;
  className?: string;
  label?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const visibleW = 1 - cropLeft - cropRight;
  const visibleH = 1 - cropTop - cropBottom;
  const canvasWidth = Math.round(width * visibleW);
  const canvasHeight = Math.round(height * visibleH);
  const sx = Math.round(width * cropLeft);
  const sy = Math.round(height * cropTop);
  const sw = canvasWidth;
  const sh = canvasHeight;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let cancelled = false;
    let raf = 0;
    const blobs: Array<Blob | null> = Array(count).fill(null);
    const bitmaps = new Map<number, ImageBitmap>();
    const inflight = new Set<number>();

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const draw = (bitmap: ImageBitmap) => {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.drawImage(bitmap, sx, sy, sw, sh, 0, 0, canvasWidth, canvasHeight);
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
        const dist = (index - current + count) % count;
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
        const index = Math.floor(((now - start) / 1000) * FPS) % count;
        const bitmap = bitmaps.get(index);
        if (bitmap) draw(bitmap);
        for (let ahead = 1; ahead <= LOOKAHEAD; ahead += 1) {
          void decode((index + ahead) % count);
        }
        evict(index);
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const load = async () => {
      const first = await fetch(frameUrl(dir, 0)).then(response =>
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
          while (next < count && !cancelled) {
            const index = next;
            next += 1;
            blobs[index] = await fetch(frameUrl(dir, index)).then(response =>
              response.blob(),
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
  }, [dir, count, canvasWidth, canvasHeight, sx, sy, sw, sh]);

  return (
    <canvas
      ref={canvasRef}
      aria-label={label}
      className={className}
      style={{ display: "block", width: "100%", height: "auto" }}
    />
  );
}
