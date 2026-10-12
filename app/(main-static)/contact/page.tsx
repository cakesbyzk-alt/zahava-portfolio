import Image from "next/image";
import phone from "../../assets/contact.webp";

export default function page() {
  return (
    <main className="flex flex-1 items-center justify-center px-11 py-8 text-lg font-medium md:text-2xl lg:text-[26px] xl:px-20">
      <div className="flex w-full flex-col items-center gap-8 md:flex-row md:gap-12 lg:gap-18">
        <div className="flex w-full justify-center md:w-1/2">
          <Image
            width={400}
            className="h-auto w-full max-w-[400px] object-contain md:max-h-[calc(100dvh-12rem)]"
            src={phone}
            alt="an illustration of a phone booth"
            priority
          />
        </div>
        <div className="w-full md:w-1/2">
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
        </div>
      </div>
    </main>
  );
}
