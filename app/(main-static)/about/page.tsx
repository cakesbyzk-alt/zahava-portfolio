import PngSequence from "../../components/PngSequence";

export default function page() {
  return (
    <main className="flex w-full flex-1 items-center justify-center px-11 py-8 text-sm font-medium md:text-[20px] lg:text-[23px]">
      <div className="flex w-full flex-col items-center gap-8 md:flex-row md:gap-12 lg:gap-18">
        <div className="flex w-full justify-center md:w-1/2">
          <div className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[min(36vw,560px)]">
            <PngSequence
              dir="/home-hero/about"
              count={120}
              width={1080}
              height={1080}
              cropTop={0.223}
              cropBottom={0.159}
              cropLeft={0.216}
              cropRight={0.239}
              label="self-portrait of zahava, looking out of the window"
              className="h-auto w-full md:max-h-[calc(100dvh-12rem)]"
            />
          </div>
        </div>
        <div className="flex w-full flex-col items-center space-y-5 text-center md:w-1/2 md:items-start md:space-y-8 md:text-left">
          <h1 className="font-bold">About Me</h1>
          <p className="max-w-[min(40ch,78vw)] md:max-w-none lg:max-w-[min(40ch,28vw)]">
            I’m a fourth-year visual communication student at Bezalel
            Academy of Arts and Design. My work draws from history,
            nature, and architecture, and I enjoy building ideas through
            research, observation, and hands-on exploration. I
            discovered visual communication at seventeen in a high
            school graphic design course, and that early curiosity still
            shapes the kind of work I’m drawn to today.
          </p>
          <a href="/resume.pdf" target="_blank" className="underline">
            View Resume{" "}
          </a>
        </div>
      </div>
    </main>
  );
}
