import Link from "next/link";

function NavArrow({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 28 10"
      className="relative top-[0.17em] h-[0.55em] w-[1.5em] shrink-0 fill-none stroke-current"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round">
      {direction === "left" ? (
        <path d="M27 5H1M6 1L1 5l5 4" />
      ) : (
        <path d="M1 5h26M22 1l5 4-5 4" />
      )}
    </svg>
  );
}

function projectHref(name: string) {
  return `/${encodeURIComponent(name)}`;
}

export default function ProjectNav({
  nextPage,
  previousPage,
}: {
  nextPage: string | undefined;
  previousPage: string | undefined;
}) {
  const disabledClasses =
    "pointer-events-none cursor-none text-gray-400";
  return (
    <nav className="sticky top-0 z-20 w-full border-b-1 border-black bg-neutral-100/75 px-2 backdrop-blur-sm md:border-b-1 md:px-4">
      <ul className="m-auto grid w-full max-w-[1100px] grid-cols-3 justify-items-center p-5 px-3 text-base leading-none md:px-5 md:text-lg lg:text-xl xl:max-w-[85%] xl:px-0">
        <li
          className={[
            "flex items-center justify-self-start text-left",
            !previousPage && disabledClasses,
          ]
            .filter(Boolean)
            .join(" ")}>
          <Link
            aria-label="previous page"
            aria-disabled={!previousPage ? true : undefined}
            href={previousPage ? projectHref(previousPage) : "#"}
            className="flex items-center gap-1.5 md:gap-2">
            <NavArrow direction="left" />
            <span>previous</span>
          </Link>
        </li>
        <li className="col-start-2 flex items-center font-medium italic">
          <Link href={"/"} className="leading-none">
            Main Page
          </Link>
        </li>

        <li
          className={[
            "flex items-center justify-self-end text-right",
            !nextPage && disabledClasses,
          ]
            .filter(Boolean)
            .join(" ")}>
          <Link
            aria-label="next page"
            aria-disabled={!nextPage ? true : undefined}
            href={nextPage ? projectHref(nextPage) : "#"}
            className="flex items-center gap-1.5 md:gap-2">
            <span>next</span>
            <NavArrow direction="right" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
