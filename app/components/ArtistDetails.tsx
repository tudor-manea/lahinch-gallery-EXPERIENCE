import Image from "next/image";
import { useState } from "react";

interface ArtistDetailsProps {
  artist: {
    name: string;
    nationality: string;
    birthYear: number;
    bio: string;
  };
}

const ArtistDetails = ({ artist }: ArtistDetailsProps) => {
  const [isBioOpen, setIsBioOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row p-4">
      <div className="flex-shrink-0 relative w-full h-80 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] md:mr-8">
        <div className="bg-black/30 absolute top-0 w-full h-full"></div>
        <Image
          src={`/${artist.name}/hero.jpg`}
          layout="fill"
          objectFit="cover"
          alt={`${artist.name} hero image`}
          className="object-cover"
        />
        <div className="hidden md:block absolute bottom-0 left-0 bg-black/50 text-white p-2 md:right-0 md:left-auto">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            {artist.name}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl">
            {artist.nationality}, b. {artist.birthYear}
          </p>
        </div>
      </div>
      <div className="flex flex-col flex-grow justify-start">
        <div className="mt-4 md:mt-0 md:ml-8 lg:ml-12">
          <div className="block md:hidden">
            <h1 className="text-2xl font-bold">{artist.name}</h1>
            <p className="text-lg">
              {artist.nationality}, b. {artist.birthYear}
            </p>
            <button
              onClick={() => setIsBioOpen(!isBioOpen)}
              className="w-full bg-blue-400 text-white py-2 px-4 rounded mt-2"
            >
              {isBioOpen ? 'Hide Bio' : 'Show Bio'}
            </button>
            {isBioOpen && (
              <div className="bg-gray-100 p-4 mt-2 rounded">
                <h2 className="text-xl font-semibold text-center">Bio</h2>
                <p className="mt-2 text-gray-700 text-justify text-sm">{artist.bio}</p>
              </div>
            )}
          </div>
          <div className="hidden md:block mt-7">
            <h2 className="text-3xl font-bold mb-4 text-left">About</h2>
            <p className="text-gray-700 text-justify lg:text-2xl md:text-base mr-8">{artist.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistDetails;
