import { Nunito } from 'next/font/google'
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
      <body className={font.className}>{children}</body>
    </html>
  );
}
