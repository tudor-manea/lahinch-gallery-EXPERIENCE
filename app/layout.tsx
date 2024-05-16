import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Hydrate from "./components/Hydrate";
import {getServerSession} from "next-auth/next"
import { authOptions } from "@/pages/api/auth/[...nextauth]";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lahinch Gallery Experience",
  description: "Art Gallery",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={inter.className}>
        <Hydrate>
          <Navbar user={session?.user}/>
          {children}
        </Hydrate>
        </body>
    </html>
  );
}
