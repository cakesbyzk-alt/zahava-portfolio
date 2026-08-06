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
  const infoBoxes = Object.keys(info).map(name => {
    return (
      <li
        key={name}
        className="max-w-[30ch] min-w-min md:w-[20ch] md:text-base lg:w-[28ch] lg:text-lg">
        {" "}
        <div className="font-bold">{name}:</div>
        <div>{info[name]}</div>
      </li>
    );
  });

  const responsive = asset.srcResponsive;

  return (
    <div>
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
            className="h-auto w-full"
            fetchPriority="high"
          />
        </picture>
      ) : (
        <Image
          alt={altText}
          src={asset.src as string}
          width={1920}
          height={1080}
          className="h-auto w-full"
          priority
        />
      )}
      <ul className="flex flex-col flex-wrap justify-between gap-4 py-5 pb-10 capitalize md:flex-row md:pb-22 lg:pb-26">
        {infoBoxes}
      </ul>
    </div>
  );
}
