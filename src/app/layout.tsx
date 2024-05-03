import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import cn from "./utils/cn";
//import Footer from "./Components/Footer";
//import cn from 'classnames';


const inter = Inter({ subsets: ["latin"], variable: "--font-sans", });

export const metadata: Metadata = {
  title: "Shalaka",
  description: "Main gitHub file",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>{children}</body>

        {/* <Footer /> */}
      </html>
    </>
  );
}
