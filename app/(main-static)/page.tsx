import projectsData from "@/projectsData";
import Link from "next/link";
export default function Home() {
  const projectLinks = projectsData.map(project => {
    return (
      <li key={project.name}>
        <Link href={project.name}>{`${project.title}`}</Link>
      </li>
    );
  });
  return (
    <div className="overflow-x-hidden font-medium">
      <header className="mb-8 lg:mb-12">
        <div className="hidden justify-center px-4 md:px-15 lg:flex lg:px-10">
          <video
            className="h-auto w-full max-w-[1400px]"
            style={{ clipPath: "inset(0 0 3px 0)" }}
            src="/home-desktop.mp4"
            width={1920}
            height={1080}
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
          />
        </div>
        <div className="hidden justify-center px-4 md:flex lg:hidden md:px-15">
          <video
            className="h-auto w-full max-w-[650px]"
            src="/home-tablet.mp4"
            width={800}
            height={916}
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
          />
        </div>
        <div className="flex justify-center px-4 md:hidden">
          <video
            className="h-auto w-full max-w-[450px]"
            src="/home-phone.mp4"
            width={1080}
            height={1920}
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
          />
        </div>
        <h1 className="z-10 text-center text-base leading-tight font-semibold md:text-[32px] lg:text-[37px]">
          <span className="block">Hi!</span>
          I’m Zahava Kallus, and this is my work
        </h1>
      </header>
      <main id="work" className="">
        <ul className="grid gap-8 px-8 py-9 text-2xl text-[18px] font-medium md:gap-9 md:px-10 md:text-2xl lg:gap-10 lg:px-16.25 lg:py-18.75 lg:text-[26px] xl:px-[100px]">
          {projectLinks}
        </ul>
      </main>
    </div>
  );
}
