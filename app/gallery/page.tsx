import UploadForm from "../components/UploadForm";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

const page = async () => {
  const session = await getServerSession(authOptions)
  return (
    <div>
      <UploadForm user={session?.user} 
      expires={session?.expires as string}/>
    </div>
  )
};

export default page;

