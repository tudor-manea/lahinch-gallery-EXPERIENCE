import RootLayout from '../app/layout';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

const withLayout = (PageComponent: React.ComponentType) => {
  return async (props: any) => {
    const session = await getServerSession(authOptions);
    return (
      <RootLayout session={session}>
        <PageComponent {...props} />
      </RootLayout>
    );
  };
};

export default withLayout;