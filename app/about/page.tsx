import Image from "next/image";
import aboutImage from "@/public/about.jpg";
import sigImage from "@/public/signature.png";

const page = () => {
  return (
    <div className="w-full">
      <div className="relative z-[-10rem]">
        <div
          className="bg-black/20 absolute top-0
        w-full h-80"
        ></div>
        <Image
          src={aboutImage}
          width={0}
          height={0}
          alt="about us"
          className="w-full h-80 object-cover"
        />
        <h1
          className="text-5xl w-full text-center text-white 
        font-bold p-2 absolute top-1/2 left-1/2 translate-x-[-50%] 
        translate-y-[-50%]"
        >
          About Us
        </h1>
      </div>

      <div
        className="w-[89%] m-auto my-10 flex flex-col 
      items-center"
      >
        <p className="text-xl leading-10">
          Welcome to our gallery! We are a family-owned and family-operated
          business dedicated to showcasing the beauty and creativity of art. Our
          passion for art has been passed down through generations, and we take
          pride in offering a unique and personal experience to all our
          visitors. From our family to yours, we invite you to explore and enjoy
          the diverse collection of artworks that we have lovingly curated.
        </p>
        <Image src={sigImage} alt="signature" width={400} height={400} />
      </div>
    </div>
  );
};

export default page;
