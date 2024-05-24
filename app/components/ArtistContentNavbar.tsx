import { useState } from "react";

const tabs = ["Artworks", "Videos", "Q&A", "Audio Snippets"];

const ArtistContentNavbar = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

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
        {activeTab === "Artworks" && <div>Artworks Content</div>}
        {activeTab === "Audio Snippets" && <div>Audio Snippets Content</div>}
      </div>
    </div>
  );
};

export default ArtistContentNavbar;

