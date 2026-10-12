import Image from "next/image";
import phone from "../../assets/contact.webp";

export default function page() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-13 px-11 py-8 text-lg font-medium md:gap-15 md:text-2xl md:max-lg:landscape:flex-row md:max-lg:landscape:gap-12 lg:flex-row lg:gap-18 lg:text-[26px] xl:px-20">
      <Image
        width={400}
        className="h-auto w-full max-w-[400px] object-contain md:max-lg:landscape:w-auto md:max-lg:landscape:max-h-[calc(100dvh-12rem)] md:max-lg:landscape:max-w-[min(280px,36vw)]"
        src={phone}
        alt="an illustration of a phone booth"
        priority
      />

      <div className="space-y-2 md:space-y-3">
        <h1 className="font-bold">Contact Me:</h1>
        <dl className="space-y-2 md:space-y-3">
          <div className="flex gap-2">
            <dt className="font-bold">Email:</dt>{" "}
            <dd>
              <a
                href="mailto:zahava2k3@gmail.com"
                className="underline decoration-1 underline-offset-[0.28em] focus:outline-2 focus:outline-offset-4">
                zahava2k3@gmail.com
              </a>
            </dd>
          </div>
          <div className="flex flex-wrap gap-2">
            <dt className="font-bold">Phone Number:</dt>{" "}
            <dd>
              <a
                href="tel:+972533231344"
                className="underline decoration-1 underline-offset-[0.28em] focus:outline-2 focus:outline-offset-4">
                +972-53-323-1344
              </a>
            </dd>
          </div>
          <div className="flex gap-2">
            <dt className="font-bold">Based In:</dt>
            <dd> Beit Shemesh, Israel</dd>
          </div>
        </dl>
      </div>
    </main>
  );
}
