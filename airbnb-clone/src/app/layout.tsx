import { Nunito } from 'next/font/google';
import ToasterProvider from '@/providers/ToasterProvider';
import Navbar from './components/navbar/Navbar';
import RegisterModal from './components/modals/RegisterModal';
import LoginModal from './components/modals/LoginModal';
import RentModal from './components/modals/RentModal';

import ClientOnly from './components/ClientOnly';
import type { Metadata } from "next";
import "./globals.css";
import getCurrentUser from './actions/getCurrentUser';

export const metadata: Metadata = {
  title: "Airbnb Clone",
  description: "Airbnb clone by Kemal R",
};

const font = Nunito({
  subsets: ["latin"],
})

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <LoginModal />
          <RentModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        {children}</body>
    </html>
  );
}
