import { Nunito } from 'next/font/google';
import Navbar from './components/navbar/Navbar';
import Modal from './components/modals/Modal'
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
          <Modal actionLabel="Submit" title="Hello! This is the title" isOpen />
          <Navbar />
        </ClientOnly>
        {children}</body>
    </html>
  );
}
