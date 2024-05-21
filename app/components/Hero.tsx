import heroImage from "@/public/hero.jpg";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full">
      <div
        className="w-[89%] m-auto grid lg:grid-cols-2 
      items-center py-10 lg:text-left text-center 
      justify-center lg:max-w-[1500px]"
      >
        <div className="lg:mb-0 mb-10">
          <h1 className="text-5xl lg:text-7xl font-bold uppercase mb-3">
            The <span className="text-blue-300">Gallery</span> Tour
          </h1>
          <div>
            <Link href="/artists">
              <button className="bg-blue-300 px-4 m-auto rounded-sm">
                Our Collection
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:pl-10 max-w-[900px]">
          <Image
            src={heroImage}
            width={900}
            height={900}
            alt="landscape artwork"
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
