export default function page() {
  return (
    <main className="mt-10 flex flex-col items-center justify-center gap-13 px-11 text-sm font-medium md:mt-12 md:mb-12 md:gap-15 md:text-[20px] lg:mt-20 lg:mb-0 lg:ml-[130px] lg:flex-row lg:gap-18 lg:text-[23px]">
      <video
        className="h-auto w-full max-w-[300px] md:max-w-[400px]"
        src="/about.mp4"
        width={530}
        height={590}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-label="self-portrait of zahava, looking out of the window"
      />
      <div className="space-y-5 md:space-y-8">
        <h1 className="font-bold">About me</h1>
        <p className="max-w-[55ch]">
          I’m a fourth year visual communication student at Bezalel
          Academy of Art and Design. My work draws from history,
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
