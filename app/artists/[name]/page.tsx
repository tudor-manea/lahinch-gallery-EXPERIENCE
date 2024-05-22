"use client";

import ArtistDetails from "../../components/ArtistDetails";
import { artists } from "../../data/artistsData";

const ArtistPage = ({ params }: { params: { name: string } }) => {
  const artistName = decodeURIComponent(params.name);
  const artist = artists.find((artist) => artist.name === artistName);

  if (!artist) {
    return <div>Artist not found</div>;
  }

  return <ArtistDetails artist={artist} />;
};

export default ArtistPage;