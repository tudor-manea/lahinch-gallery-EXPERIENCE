import { useRouter } from 'next/router';

const ArtistPage = () => {
  const router = useRouter();
  const { name } = router.query;

  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-4xl font-bold">{name}</h1>
    </div>
  );
};

export default ArtistPage;