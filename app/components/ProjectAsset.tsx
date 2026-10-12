import { Asset, Info } from "@/projectsData";
import Image from "next/image";
import InfoVisual from "./InfoVisual";
import Carousel from "./Carousel";
import LogoLoop from "./LogoLoop";
import ProjectVideo from "./ProjectVideo";

const heroFrameClass =
  "relative w-full overflow-hidden aspect-square md:aspect-[1535/1023] lg:aspect-[2188/1023]";
const heroMediaClass =
  "absolute inset-0 h-full w-full object-cover object-center";
const sectionFrameClass =
  "relative w-full overflow-hidden aspect-[1175/657]";
const sectionMediaClass =
  "absolute inset-0 h-full w-full object-cover object-center";

function keepLastLineMinWords(text: string, minWords = 3) {
  const words = text.trim().split(/\s+/).filter(Boolean);
  if (words.length <= minWords) return words.join("\u00A0");
  return (
    words.slice(0, -minWords).join(" ") +
    " " +
    words.slice(-minWords).join("\u00A0")
  );
}

function formatSectionTitle(title: string, maxChars = 13) {
  if (title.includes("\n")) return title;
  const words = title.trim().split(/\s+/).filter(Boolean);
  if (words.length < 2) return title.trim();
  const joined = words.join(" ");
  if (joined.length <= maxChars) return joined;

  const mid = joined.length / 2;
  let splitAt = 1;
  let bestDist = Infinity;
  let acc = 0;
  for (let i = 0; i < words.length - 1; i++) {
    acc += words[i].length + (i === 0 ? 0 : 1);
    const dist = Math.abs(acc - mid);
    if (dist < bestDist) {
      bestDist = dist;
      splitAt = i + 1;
    }
  }
  return words.slice(0, splitAt).join(" ") + "\n" + words.slice(splitAt).join(" ");
}

export default function ProjectAsset({
  asset,
  info,
  index,
  altText,
  showDivider = false,
  isLast = false,
}: {
  asset: Asset;
  info: Info | undefined;
  index: number;
  altText: string;
  showDivider?: boolean;
  isLast?: boolean;
}) {
  return (
    <div
      className={
        isLast
          ? undefined
          : asset.hideDivider
            ? "mb-4 md:mb-6"
            : showDivider
              ? undefined
              : "mb-20 md:mb-40"
      }>
      {Array.isArray(asset.src) ? (
        asset.spread ? (
          <div className="grid grid-cols-6 gap-4 md:gap-6">
            {asset.src.map((src, i) => {
              const full = i === 0 || i === 3;
              const half = i === 1 || i === 2;
              return (
                <div
                  key={src}
                  className={
                    full ? "col-span-6" : half ? "col-span-3" : "col-span-2"
                  }>
                  <Image
                    alt={`${altText} - ${i + 1}`}
                    className="h-auto w-full"
                    src={src}
                    width={full ? 1177 : half ? 576 : 371}
                    height={full ? 658 : half ? 532 : 362}
                    quality={100}
                    sizes={full ? "100vw" : half ? "50vw" : "33vw"}
                    unoptimized={asset.crisp}
                  />
                </div>
              );
            })}
          </div>
        ) : asset.mosaic ? (
          <div className="grid grid-cols-3 gap-4 md:gap-6">
            {asset.src.slice(0, 2).map((src, i) => (
              <div key={src} className="col-span-3">
                <Image
                  alt={`${altText} - ${i + 1}`}
                  className="h-auto w-full"
                  src={src}
                  width={1920}
                  height={1080}
                  sizes="100vw"
                  quality={100}
                />
              </div>
            ))}
            {asset.src.slice(2, 5).map((src, i) => (
              <div
                key={src}
                className="relative aspect-square overflow-hidden">
                <Image
                  alt={`${altText} - ${i + 3}`}
                  className="object-cover"
                  src={src}
                  fill
                  sizes="33vw"
                  quality={100}
                />
              </div>
            ))}
          </div>
        ) : asset.tight && asset.grid === 4 ? (
          <div className="grid aspect-[16/9] w-full grid-cols-4 grid-rows-3 gap-px overflow-hidden">
            {(asset.src as string[]).map((src, i) => (
              <div key={src} className="relative min-h-0 overflow-hidden">
                <Image
                  alt={`${altText} - ${i + 1}`}
                  src={src}
                  fill
                  className="object-cover"
                  sizes="25vw"
                  quality={100}
                  unoptimized={asset.crisp}
                />
              </div>
            ))}
          </div>
        ) : asset.grid ? (
          <div
            className={`grid ${
              asset.tight
                ? "gap-px"
                : asset.wide
                  ? "grid-cols-6 gap-4 md:gap-6"
                  : asset.grid === 4
                    ? "grid-cols-4 gap-4 md:gap-6"
                    : asset.grid === 3
                      ? "grid-cols-3 gap-4 md:gap-6"
                      : "grid-cols-2 gap-4 md:gap-6"
            }`}>
            {asset.src.map((src, i) => {
              const wide = asset.wide?.includes(i);
              const cropped = asset.crop?.includes(i);
              return (
                <div
                  key={src}
                  className={
                    [
                      asset.wide
                        ? wide
                          ? "col-span-6"
                          : "col-span-3"
                        : undefined,
                      cropped
                        ? "relative overflow-hidden"
                        : undefined,
                    ]
                      .filter(Boolean)
                      .join(" ") || undefined
                  }
                  style={
                    cropped && asset.cropAspect
                      ? { aspectRatio: asset.cropAspect }
                      : undefined
                  }>
                  {cropped ? (
                    <Image
                      alt={`${altText} - ${i + 1}`}
                      className="object-cover object-center"
                      src={src}
                      fill
                      quality={100}
                      sizes={wide ? "100vw" : "50vw"}
                      unoptimized={asset.crisp}
                      style={
                        asset.crisp
                          ? { imageRendering: "-webkit-optimize-contrast" }
                          : undefined
                      }
                    />
                  ) : (
                    <Image
                      alt={`${altText} - ${i + 1}`}
                      className="h-auto w-full"
                      src={src}
                      width={
                        wide ? 2400 : asset.grid === 4 ? 800 : 1600
                      }
                      height={
                        wide ? 1350 : asset.grid === 4 ? 600 : 1847
                      }
                      quality={100}
                      sizes={
                        wide
                          ? "100vw"
                          : asset.grid === 4
                            ? "25vw"
                            : asset.grid === 3
                              ? "33vw"
                              : "50vw"
                      }
                      unoptimized={asset.crisp}
                    />
                  )}
                </div>
              );
            })}
          </div>
        ) : asset.stack ? (
          <div className="flex flex-col gap-4 md:gap-6">
            {asset.src.map((src, i) => (
              <div key={src} className={sectionFrameClass}>
                <Image
                  alt={`${altText} - ${i + 1}`}
                  className={sectionMediaClass}
                  src={src}
                  fill
                  quality={100}
                  sizes="100vw"
                  unoptimized={asset.crisp}
                />
              </div>
            ))}
          </div>
        ) : asset.overlay ? (
          <LogoLoop
            base={asset.src[0]}
            overlay={asset.src[1]}
            alt={altText}
            crisp={asset.crisp}
            hold={asset.interval}
          />
        ) : (
          <Carousel
            images={asset.src}
            alt={altText}
            interval={asset.interval}
            crisp={asset.crisp}
          />
        )
      ) : asset.src && asset.type === "video" ? (
        <div className="flex flex-col gap-4 md:gap-6">
          {asset.above ? (
            Array.isArray(asset.above) ? (
              <div
                className={
                  asset.wide
                    ? "grid grid-cols-6 gap-4 md:gap-6"
                    : "grid grid-cols-2 gap-4 md:gap-6"
                }>
                {asset.above.map((src, i) => {
                  const wide = asset.wide?.includes(i);
                  if (asset.wide) {
                    return (
                      <div
                        key={src}
                        className={wide ? "col-span-6" : "col-span-3"}>
                        <Image
                          alt={`${altText} still - ${i + 1}`}
                          className="h-auto w-full"
                          src={src}
                          width={wide ? 1920 : 2296}
                          height={wide ? 1080 : 1664}
                          quality={100}
                          sizes={wide ? "100vw" : "50vw"}
                          unoptimized={asset.crisp}
                        />
                      </div>
                    );
                  }

                  return (
                    <div
                      key={src}
                      className="relative aspect-[2296/1664] overflow-hidden">
                      <Image
                        alt={`${altText} still - ${i + 1}`}
                        className="object-cover"
                        src={src}
                        fill
                        quality={100}
                        sizes="50vw"
                        unoptimized={asset.crisp}
                      />
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className={sectionFrameClass}>
                <Image
                  alt={`${altText} mockup`}
                  className={sectionMediaClass}
                  src={asset.above}
                  fill
                  quality={100}
                  sizes="100vw"
                  unoptimized={asset.crisp}
                />
              </div>
            )
          ) : null}
          <ProjectVideo
            src={asset.src}
            altText={altText}
            clipSides={asset.clipSides}
            zoom={asset.zoom}
            zoomY={asset.zoomY}
            zoomTop={asset.zoomTop}
            zoomOutPx={asset.zoomOutPx}
            sound={asset.sound}
            audioSrc={asset.audioSrc}
            loop={asset.loop}
            hero={index === 0}
            sectionFrame={index !== 0}
          />
        </div>
      ) : Boolean(asset.info && info) ? (
        <InfoVisual altText={altText} asset={asset} info={info!} />
      ) : asset.src ? (
        index === 0 ? (
          <div className={heroFrameClass}>
            <Image
              alt={altText}
              src={asset.src}
              fill
              className={heroMediaClass}
              quality={100}
              sizes="100vw"
              priority
              unoptimized={asset.crisp}
            />
          </div>
        ) : (
          <div className={sectionFrameClass}>
            <Image
              alt={altText}
              src={asset.src}
              fill
              className={sectionMediaClass}
              quality={100}
              sizes="100vw"
              unoptimized={asset.crisp}
            />
          </div>
        )
      ) : null}
      {asset.meta && (
        <ul className="flex flex-col flex-wrap justify-between gap-4 py-5 pb-6 md:flex-row md:pb-8">
          {Object.entries(asset.meta).map(([name, value]) => (
            <li
              key={name}
              className="min-w-min max-w-[30ch] md:max-w-none md:shrink-0 md:text-base lg:text-lg">
              <div className="font-bold">{name}:</div>
              <div
                className={
                  String(value).includes("\n")
                    ? "whitespace-pre-line"
                    : "md:whitespace-nowrap"
                }>
                {value}
              </div>
            </li>
          ))}
        </ul>
      )}
      {asset.description && (
        <div
          className="mt-5 flex flex-col gap-3 text-base leading-tight tracking-tight md:mt-15 md:flex-row md:justify-between md:text-[27px] xl:text-4xl">
          {index === 0 ? (
            <h1 className="font-bold whitespace-pre-line md:max-w-[18ch]">
              {formatSectionTitle(asset.description?.title ?? "")}
            </h1>
          ) : (
            <h2 className="font-bold whitespace-pre-line md:max-w-[18ch]">
              <span className="overflow-clip">
                {formatSectionTitle(asset.description?.title ?? "")}
              </span>
            </h2>
          )}
          <p
            className={`${index !== 0 ? "text-sm md:text-lg lg:text-xl xl:text-2xl" : ""} md:w-[60%] lg:w-[62.5%]`}>
            {keepLastLineMinWords(asset.description.paragraph)}
          </p>
        </div>
      )}
      {showDivider && (
        <hr
          className={`relative left-1/2 w-[calc((100%+100vw)/2)] -translate-x-1/2 border-0 border-b border-black ${
            isLast
              ? "mt-20 mb-4 md:mt-28 md:mb-6 lg:mt-32"
              : "my-20 md:my-28 lg:my-32"
          }`}
        />
      )}
    </div>
  );
}
