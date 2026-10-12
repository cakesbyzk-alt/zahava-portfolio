"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const HOLD_MS = 1500;
const FADE_MS = 500;

export default function LogoLoop({
  base,
  overlay,
  alt,
  crisp = false,
  hold = HOLD_MS,
}: {
  base: string;
  overlay: string;
  alt: string;
  crisp?: boolean;
  hold?: number;
}) {
  const [showGrid, setShowGrid] = useState(false);

  useEffect(() => {
    let visible = false;
    let timer: ReturnType<typeof setTimeout>;

    const wait = (ms: number, fn: () => void) => {
      timer = setTimeout(fn, ms);
    };

    const cycle = () => {
      wait(hold, () => {
        visible = !visible;
        setShowGrid(visible);
        wait(FADE_MS, cycle);
      });
    };

    cycle();
    return () => clearTimeout(timer);
  }, [hold]);

  return (
    <div className="relative aspect-[1175/657] w-full overflow-hidden">
      <Image
        src={base}
        alt={alt}
        fill
        priority
        className="object-cover object-center"
        quality={100}
        sizes="100vw"
        unoptimized={crisp}
      />
      <div
        className="absolute inset-0"
        style={{
          opacity: showGrid ? 1 : 0,
          transition: `opacity ${FADE_MS}ms ease-in-out`,
        }}
        aria-hidden={!showGrid}>
        <Image
          src={overlay}
          alt=""
          fill
          className="object-cover object-center"
          quality={100}
          sizes="100vw"
          unoptimized={crisp}
        />
      </div>
    </div>
  );
}
