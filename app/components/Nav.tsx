"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Nav() {
  const path = usePathname();
  return (
    <nav className="sticky top-0 z-50 bg-purple-light px-10 py-8 text-sm font-medium tracking-tighter md:text-[18px] lg:px-12">
      <ul className="flex justify-between">
        <li className="italic">
          <Link href={"/"}>Zahava K.</Link>{" "}
        </li>
        <div className="flex gap-4 md:gap-5">
          <li>
            <Link href={path === "/" ? "#work" : "/#work"}>Work</Link>
          </li>

          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}
