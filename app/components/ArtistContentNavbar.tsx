import { useState, useEffect } from "react";
import Image from "next/image";

const tabs = ["Videos", "Q&A", "Artworks", "Audio Snippets"];

interface ArtistContentNavbarProps {
  artistName: string;
}

interface Artwork {
  filePath: string;
  title: string;
}

const ArtistContentNavbar = ({ artistName }: ArtistContentNavbarProps) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [artworks, setArtworks] = useState<Artwork[]>([]);

  useEffect(() => {
    if (activeTab === "Artworks") {
      fetchArtworks();
    }
  }, [activeTab]);

  const fetchArtworks = async () => {
    try {
      const response = await fetch(`/api/artworks?artist=${artistName}`);
      const data = await response.json();
      const artworksWithTitles = data.map((filePath: string) => {
        const fileName = filePath.split('/').pop();
        const title = fileName
          ? fileName.replace(/[-_]/g, ' ').replace(/\.\w+$/, '').replace(/\d+\./, '').replace(/300x300/g, '')
          : 'Untitled';
        return { filePath, title };
      });
      setArtworks(artworksWithTitles);
    } catch (error) {
      console.error("Failed to fetch artworks", error);
    }
  };

  return (
    <div className="mt-4 md:mt-8">
      <div className="flex justify-around md:justify-start md:gap-8 border-b">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`py-2 px-4 ${activeTab === tab ? "border-b-2 border-blue-500" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-8">
        {activeTab === "Videos" && <div>Videos Content</div>}
        {activeTab === "Q&A" && <div>Q&A Content</div>}
        {activeTab === "Artworks" && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {artworks.map((artwork, index) => (
              <div key={index} className="flex flex-col items-start">
                <Image src={artwork.filePath} width={300} height={300} alt={`Artwork ${index + 1}`} className="object-cover" />
                <p className="mt-2 text-left font-semibold">{artwork.title}</p>
              </div>
            ))}
          </div>
        )}
        {activeTab === "Audio Snippets" && <div>Audio Snippets Content</div>}
      </div>
    </div>
  );
};

export default ArtistContentNavbar;
