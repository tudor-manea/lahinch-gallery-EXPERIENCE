import UploadForm from "../components/UploadForm";
import ArtGallery from "../components/ArtGallery";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

const page = async () => {
  const session = await getServerSession(authOptions)
  return (
    <div className="w-full">
      <div className="md:flex-row flex-col flex w-[89%] m-auto 
      justify-between py-5 gap-5 lg:max-w-[1500px]">
        <UploadForm user={session?.user} expires=
        {session?.expires as string} />
        <ArtGallery />
      </div>
    </div>
  )
};

export default page;

