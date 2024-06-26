import Image from "next/image";
import artistsImage from "@/public/artists.jpg";
import ArtistCard from "../components/ArtistCard"; // Adjust the import path as necessary
import { artists } from "../data/artistsData";

const Artists = () => {
  return (
    <div>
      <div className="relative z-[-10rem]">
        <div className="bg-black/30 absolute top-0 w-full h-80"></div>
        <Image
          src={artistsImage}
          width={0}
          height={0}
          alt="our artists"
          className="w-full h-80 object-cover"
        />
        <h1
          className="text-5xl w-full text-center text-white 
          font-bold p-2 absolute top-1/2 left-1/2 translate-x-[-50%] 
          translate-y-[-50%] font-sans"
        >
          Our Artists
        </h1>
        <h2 className="text-sm w-full text-center text-white font-semibold p-2 absolute top-[65%] left-1/2 translate-x-[-50%] translate-y-[-50%] font-sans">
          Discover more about our artists
        </h2>
      </div>
      
      <div>
        <h3 className="text-xl w-full text-center text-black font-sans font-semibold mt-5 mb-4">
          Artists
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4 mb-8">
        {artists.map((artist) => (
          <ArtistCard
            key={artist.name}
            imageSrc={artist.imageSrc}
            name={artist.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Artists;