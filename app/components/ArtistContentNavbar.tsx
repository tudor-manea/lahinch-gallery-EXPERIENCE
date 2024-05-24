import { useState, useEffect } from "react";
import Image from "next/image";

const tabs = ["Videos", "Q&A", "Artworks", "Audio Snippets"];

interface ArtistContentNavbarProps {
  artistName: string;
}

const ArtistContentNavbar = ({ artistName }: ArtistContentNavbarProps) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [artworks, setArtworks] = useState<string[]>([]);

  useEffect(() => {
    if (activeTab === "Artworks") {
      fetchArtworks();
    }
  }, [activeTab]);

  const fetchArtworks = async () => {
    try {
      const response = await fetch(`/api/artworks?artist=${artistName}`);
      const data = await response.json();
      setArtworks(data);
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
      <div className="mt-4">
        {activeTab === "Videos" && <div>Videos Content</div>}
        {activeTab === "Q&A" && <div>Q&A Content</div>}
        {activeTab === "Artworks" && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {artworks.map((artwork, index) => (
              <div key={index} className="flex justify-center">
                <Image src={artwork} width={300} height={300} alt={`Artwork ${index + 1}`} className="object-cover" />
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
