"use client";

import { useLayoutEffect, type ReactNode } from "react";

export default function Template({
  children,
}: {
  children: ReactNode;
}) {
  useLayoutEffect(() => {
    history.scrollRestoration = "manual";
    const html = document.documentElement;
    const hadSmooth = html.classList.contains("scroll-smooth");
    html.classList.remove("scroll-smooth");
    const el = document.scrollingElement ?? html;
    el.scrollTop = 0;
    window.scrollTo(0, 0);
    if (hadSmooth) html.classList.add("scroll-smooth");
  }, []);

  return children;
}
