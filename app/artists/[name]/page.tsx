import Image from "next/image";

const ArtistPage = ({ params }: { params: { name: string } }) => {
  const artistName = decodeURIComponent(params.name);
  return (
    <div className="flex flex-col md:flex-row md:items-end md:justify-start p-4">
      <div className="relative w-full h-80 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] md:mr-8">
        <div className="bg-black/30 absolute top-0 w-full h-full"></div>
        <Image
          src={`/${artistName}/hero.jpg`}
          layout="fill"
          objectFit="cover"
          alt={`${artistName} hero image`}
          className="object-cover"
        />
      </div>
      <div className="text-left mt-4 md:mt-0 md:flex md:flex-col md:justify-end md:pb-4">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black">
          {artistName}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-700">b. 1981</p>
      </div>
    </div>
  );
};

export default ArtistPage;
