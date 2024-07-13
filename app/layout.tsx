import type {Metadata} from "next";
import {Poppins} from "next/font/google";

import "./globals.css";

import {HeaderComponents, FooterComponents} from "@/components";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Polytechnic Computer Club",
  description:
    "UKM Polytechnic Computer Club yang disingkat UKM PCC merupakan salah satu Unit Kegiatan Mahasiswa di Politeknik Negeri Semarang",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='id'>
      <head>
        <link rel='shortcut icon' href='/images/pcc.png' type='image/x-icon' />
      </head>
      <body className={poppins.className}>
        <HeaderComponents />
        {children}
        <FooterComponents />
      </body>
    </html>
  );
}
