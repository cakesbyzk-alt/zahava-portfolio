import projectsData from "@/projectsData";
import HomeGreeting from "../components/HomeGreeting";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const projectLinks = projectsData.map(project => {
    const caption = project.menu?.caption ?? project.title;
    const thumb = project.menu?.thumb;

    return (
      <li
        key={project.name}
        className="w-[min(100%,220px)] md:w-[calc(50%-1.25rem)] md:max-w-[264px] lg:w-[var(--menu-tile)] lg:max-w-none">
        <Link
          href={project.name}
          className="group flex flex-col items-center gap-2 md:gap-2.5">
          {thumb ? (
            <div className="relative aspect-square w-full">
              {/* Photo inset so the jagged frame sits outside it */}
              <div className="absolute inset-[4.5%] overflow-hidden">
                <Image
                  src={thumb}
                  alt={caption}
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover transition-opacity group-hover:opacity-90"
                  sizes="(max-width: 799px) 220px, (max-width: 1279px) 264px, 28vw"
                  quality={95}
                />
              </div>
              <Image
                src="/menu/frame.webp"
                alt=""
                width={1024}
                height={1024}
                className="pointer-events-none absolute inset-0 z-10 h-full w-full select-none"
                sizes="230px"
                unoptimized
                aria-hidden
              />
            </div>
          ) : null}
          <span className="whitespace-nowrap text-center text-[8pt] leading-[125%] font-normal tracking-normal text-purple-dark md:text-base md:leading-[120%] md:tracking-[-0.045em]">
            {caption}
          </span>
        </Link>
      </li>
    );
  });

  return (
    <div className="overflow-x-hidden font-medium">
      <header className="pt-2 md:pt-4">
        <div className="mt-[50px] flex w-full flex-col items-center px-4 md:px-15 lg:px-10">
          <div className="hidden w-full justify-center lg:flex">
            <HomeHeroVideo
              src="/home-desktop.mp4"
              width={1920}
              height={1080}
              cropTop={0.14}
              cropBottom={0.145}
            />
          </div>
          <div className="hidden w-full justify-center md:flex lg:hidden">
            <HomeHeroVideo
              src="/home-tablet.mp4"
              width={800}
              height={916}
              cropTop={0.07}
              cropBottom={0.06}
            />
          </div>
          <div className="flex w-full justify-center md:hidden">
            <HomeHeroVideo
              src="/home-phone.mp4"
              width={1080}
              height={1920}
              cropTop={0.14}
              cropBottom={0.1}
            />
          </div>
          <HomeGreeting />
        </div>
      </header>
      <main
        id="work"
        className="lg:flex lg:min-h-svh lg:items-center lg:justify-center lg:px-[clamp(2.5rem,5vw,6rem)] lg:py-8"
        style={{
          ["--menu-tile" as string]:
            "min(calc((100vw - 2 * clamp(2.5rem, 5vw, 6rem) - 3 * clamp(2rem, 3.5vw, 4.5rem)) / 4), calc((100svh - 12rem) / 2))",
        }}>
        <ul className="mx-auto flex w-full max-w-[242px] flex-wrap justify-center gap-x-8 gap-y-8 px-4 pt-16 pb-8 md:max-w-[616px] md:gap-x-10 md:gap-y-10 md:px-6 md:pt-20 md:pb-10 lg:mx-0 lg:grid lg:w-auto lg:max-w-none lg:translate-y-[62px] lg:scale-90 lg:grid-cols-4 lg:gap-x-[clamp(2rem,3.5vw,4.5rem)] lg:gap-y-[clamp(1.75rem,3vh,3.5rem)] lg:px-0 lg:py-0">
          {projectLinks}
        </ul>
      </main>
    </div>
  );
}

function HomeHeroVideo({
  src,
  width,
  height,
  cropTop,
  cropBottom,
}: {
  src: string;
  width: number;
  height: number;
  cropTop: number;
  cropBottom: number;
}) {
  const visible = 1 - cropTop - cropBottom;
  const ratio = width / (height * visible);

  return (
    <div
      className="relative overflow-hidden"
      style={{
        aspectRatio: `${width} / ${height * visible}`,
        width: `min(100%, 1400px, calc((100svh - 11rem) * ${ratio}))`,
      }}>
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        className="absolute left-0 w-full max-w-none"
        style={{ top: `${-((cropTop / visible) * 100).toFixed(3)}%` }}
      />
    </div>
  );
}
