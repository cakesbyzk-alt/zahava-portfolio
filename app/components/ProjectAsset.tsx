import { Asset, Info } from "@/projectsData";
import Image from "next/image";
import InfoVisual from "./InfoVisual";
import Carousel from "./Carousel";

export default function ProjectAsset({
  asset,
  info,
  index,
  altText,
}: {
  asset: Asset;
  info: Info | undefined;
  index: number;
  altText: string;
}) {
  return (
    <div>
      {Array.isArray(asset.src) ? (
        <Carousel images={asset.src} alt={altText} />
      ) : asset.type === "video" ? (
        <video
          className="w-full"
          src={asset.src}
          loop
          muted
          autoPlay
          aria-label={altText}
          playsInline>
          Your browser does not support the video tag.
        </video>
      ) : Boolean(asset.info && info) ? (
        <InfoVisual altText={altText} asset={asset} info={info!} />
      ) : (
        <Image
          alt={altText}
          className="h-auto w-full"
          src={asset.src}
          width={asset.crisp ? 3000 : 1920}
          height={asset.crisp ? 1679 : 1080}
          quality={100}
          sizes="100vw"
          unoptimized={asset.crisp}
          style={
            asset.crisp
              ? {
                  imageRendering: "-webkit-optimize-contrast",
                  width: "100%",
                  height: "auto",
                }
              : undefined
          }
        />
      )}
      {asset.description && (
        <div
          className={`mt-5 mb-20 flex flex-col gap-3 text-base leading-tight tracking-tight md:mt-15 md:mb-[160px] md:flex-row md:justify-between md:text-[27px] xl:text-4xl`}>
          {index === 0 ? (
            <h1 className="font-bold md:max-w-[13ch]">
              {asset.description?.title}
            </h1>
          ) : (
            <h2 className="font-bold md:max-w-[13ch]">
              <span className="overflow-clip">
                {asset.description?.title}
              </span>
            </h2>
          )}
          <p
            className={`${index !== 0 ? "text-sm md:text-lg lg:text-xl xl:text-2xl" : ""} md:w-[60%] lg:w-[62.5%]`}>
            {asset.description?.paragraph}
          </p>
        </div>
      )}
    </div>
  );
}
