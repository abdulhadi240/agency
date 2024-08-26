import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Example} from "../components/Navbar";
import { ViewTransitions } from 'next-view-transitions'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
 
export const experimental_ppr = true

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
    <html lang="en">
      <Example/>
      <body className={inter.className}>
        {children}</body>
    </html>
    </ViewTransitions>
  );
}
