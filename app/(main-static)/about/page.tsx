export default function page() {
  return (
    <main className="flex w-full flex-1 flex-col items-center justify-center gap-13 px-11 py-8 text-sm font-medium md:gap-15 md:text-[20px] lg:flex-row lg:gap-18 lg:text-[23px]">
      <div className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[min(36vw,560px)]">
        <video
          src="/about.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-label="self-portrait of zahava, looking out of the window"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </div>
      <div className="flex flex-col items-center space-y-5 text-center md:space-y-8 lg:items-start lg:text-left">
        <h1 className="font-bold">About Me</h1>
        <p className="max-w-[min(40ch,78vw)] md:max-w-[min(52ch,70vw)] lg:min-w-[473px] lg:max-w-[min(40ch,28vw)]">
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
    </main>
  );
}
