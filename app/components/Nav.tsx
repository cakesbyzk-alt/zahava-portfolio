"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Nav() {
  const path = usePathname();
  return (
    <nav
      className="site-nav !bg-transparent bg-transparent px-10 py-8 pt-12 text-sm font-medium tracking-tighter sm:!bg-transparent sm:bg-transparent md:!bg-transparent md:bg-transparent md:pt-14 md:text-[18px] lg:!bg-transparent lg:bg-transparent lg:px-12 lg:py-8"
      style={{ backgroundColor: "transparent" }}>
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
