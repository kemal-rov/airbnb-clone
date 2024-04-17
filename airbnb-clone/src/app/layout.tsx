import { Nunito } from 'next/font/google';
import ToasterProvider from '@/providers/ToasterProvider';
import Navbar from './components/navbar/Navbar';
import RegisterModal from './components/modals/RegisterModal';
import LoginModal from './components/modals/LoginModal';

import ClientOnly from './components/ClientOnly';
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Airbnb Clone",
  description: "Airbnb clone by Kemal R",
};

const font = Nunito({
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <LoginModal />
          <Navbar />
        </ClientOnly>
        {children}</body>
    </html>
  );
}
