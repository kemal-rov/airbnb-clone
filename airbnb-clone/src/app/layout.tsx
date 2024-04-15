import { Nunito } from 'next/font/google';
import Navbar from './components/navbar/Navbar';
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
        <Navbar></Navbar>
        {children}</body>
    </html>
  );
}
