import Image from "next/image";

interface ArtistCardProps {
  imageSrc: string;
  name: string;
}

const ArtistCard = ({ imageSrc, name }: ArtistCardProps) => {
  return (
    <div className="flex flex-col bg-[#ecedef] shadow-card p-4 rounded-lg w-full max-w-[250px] mx-auto border hover:shadow-cardHover transition-shadow duration-300">
      <p className="text-center font-bold mb-3 text-2xl font-merriweather">{name}</p>
      <div className="flex justify-center h-[225px] w-full overflow-hidden">
        <Image src={imageSrc} width={250} height={300} alt={name} className="object-cover h-full w-full" />
      </div>
      <p className="text-center text-xs mt-4">Kenny's Lahinch</p>
    </div>
  );
};

export default ArtistCard;
