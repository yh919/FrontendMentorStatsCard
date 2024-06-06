import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <div className="flex flex-col sm:flex-row gap-3 items-center sm:items-start  justify-center bg-[#1b1938] rounded-lg h-full sm:h-[380px] w-full sm:w-[950px] ">
        <div className="relative">
          <Image
            src="/images/image-header-mobile.jpg"
            width={654}
            height={480}
            alt="Image"
            className="rounded-t-lg  block sm:hidden "
          />
          <div className="absolute inset-0 bg-[#aa5cdb] bg-opacity-50"></div>
        </div>
        <div className="flex flex-col gap-8 items-center sm:items-start justify-center p-12">
          <h1 className="font-inter font-bold text-center sm:text-start text-3xl text-white">
            Get <span className="text-[#aa5cdb]">insights</span> that help your
            business grow.
          </h1>
          <p className="text-gray-400 text-lg text-center sm:text-start">
            Discover the benefits of data analytics and make better decisions
            regarding revenue , customer experience, and overall efficiency.
          </p>
          <div className=" flex flex-col sm:flex-row text-center sm:text-start  text-white gap-12">
            <div className="flex flex-col">
              <h1 className="font-bold text-2xl">10k+</h1>
              <p className="uppercase font-lexend text-xs text-gray-400">
                Companies
              </p>
            </div>
            <div className="flex flex-col">
              <h1 className="font-bold text-2xl">314</h1>
              <p className="uppercase font-lexend text-xs text-gray-400">
                Templates
              </p>
            </div>
            <div className="flex flex-col">
              <h1 className="font-bold text-2xl">12M+</h1>
              <p className="uppercase font-lexend text-xs  text-gray-400">
                Companies
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/images/image-header-desktop.jpg"
            width={540 * 2.5}
            height={446}
            alt="Image"
            className="rounded-r-lg  hidden sm:block"
          />
          <div className="absolute inset-0 bg-[#aa5cdb] bg-opacity-50"></div>
        </div>
      </div>
      <footer className="mt-6 text-white">
        <div className="attribution">
          Challenge by
          <span className="mx-1">
            <a
              href="https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62"
              target="_blank"
            >
              Frontend Mentor
            </a>
          </span>
          . Coded by{" "}
          <a href="https://www.frontendmentor.io/profile/yh919">
            Youssef Hussein
          </a>
          .
        </div>
      </footer>
    </main>
  );
}
