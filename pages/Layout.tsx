import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import Navbar from '../app/components/Navbar';
import Hydrate from '../app/components/Hydrate';
import Footer from '../app/components/Footer';
import { getSession, useSession } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }: { children: ReactNode }) {
  const { data: session } = useSession();

  return (
    <div className={inter.className}>
      <Hydrate>
        <Navbar user={session?.user} expires={session?.expires as string} />
        {children}
        <Footer />
      </Hydrate>
    </div>
  );
}
