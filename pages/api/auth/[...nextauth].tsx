import NextAuth, {NextAuthOptions} from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma";
 

export const authOptions: NextAuthOptions 
= {
  adapter: PrismaAdapter(prisma!),
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Enter Your Email" },
        password: { label: "Password", type: "password", placeholder: "Enter Your Password" },
      },
      authorize: async (credentials) => {
        const user = await prisma!.user.findFirst({
          where: {
            email: credentials?.email as string
          },
        });
        if (!user || user.password !== credentials?.password) {
          throw new Error("Wrong email or password");
        }
        return user;
      },
    }),
  ],
  callbacks: {
    async session({session, token, user}) {
      session.user = user;
      return session;
    }
  }
};

export default NextAuth(authOptions);