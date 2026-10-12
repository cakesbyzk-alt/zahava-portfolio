import { Asset } from "@/projectsData";
import Image from "next/image";

export default function InfoVisual({
  asset,
  info,
  altText,
}: {
  altText: string;
  asset: Asset;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  info: any;
}) {
  const infoOrder = [
    "course",
    "instructor",
    "instructors",
    "partner",
    "skills",
    "role",
  ] as const;
  const infoBoxes = infoOrder
    .filter(name => info[name])
    .map(name => {
      const value = String(info[name] ?? "");
      return (
        <li
          key={name}
          className="min-w-min max-w-[30ch] md:max-w-none md:shrink-0 md:text-base lg:text-lg">
          <div className="font-bold">{name}:</div>
          <div
            className={
              value.includes("\n")
                ? "whitespace-pre-line"
                : "md:whitespace-nowrap"
            }>
            {value}
          </div>
        </li>
      );
    });

  const responsive = asset.srcResponsive;
  const frame =
    "relative w-full overflow-hidden aspect-square md:aspect-[1535/1023] lg:aspect-[2188/1023]";
  const fitClass = asset.heroFit === "contain" ? "object-contain" : "object-cover";
  const media = asset.heroPosition
    ? `absolute inset-0 h-full w-full ${fitClass}`
    : `absolute inset-0 h-full w-full ${fitClass} object-center`;
  const mediaStyle = {
    ...(asset.heroPosition ? { objectPosition: asset.heroPosition } : {}),
    ...(asset.heroZoom && asset.heroZoom !== 1
      ? { transform: `scale(${asset.heroZoom})` }
      : {}),
  };
  const frameStyle = asset.heroFill
    ? { backgroundColor: asset.heroFill }
    : undefined;

  return (
    <div>
      <div className={frame} style={frameStyle}>
        {responsive ? (
          <picture>
            <source
              media="(min-width: 1280px)"
              srcSet={responsive.desktop}
              width={2188}
              height={1023}
            />
            <source
              media="(min-width: 800px)"
              srcSet={responsive.tablet}
              width={1535}
              height={1023}
            />
            {/* Native img so <picture> art direction is not overridden by next/image */}
            <img
              alt={altText}
              src={responsive.phone}
              width={1023}
              height={1023}
              className={media}
              style={mediaStyle}
              fetchPriority="high"
            />
          </picture>
        ) : (
          <Image
            alt={altText}
            src={asset.src as string}
            fill
            className={media}
            style={mediaStyle}
            priority
            sizes="100vw"
            unoptimized={asset.crisp}
          />
        )}
      </div>
      <ul className="flex flex-col flex-wrap justify-between gap-4 py-5 pb-10 capitalize md:flex-row md:pb-22 lg:pb-26">
        {infoBoxes}
      </ul>
    </div>
  );
}
