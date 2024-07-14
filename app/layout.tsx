import type {Metadata} from "next";
import {Poppins} from "next/font/google";

import "./globals.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/tailwind-light/theme.css";
import {ScrollTop} from "primereact/scrolltop";

import {HeaderComponents, FooterComponents, AOSWrapper} from "@/components";

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
        <AOSWrapper>{children}</AOSWrapper>
        <ScrollTop className='bg-secondary' />
        <FooterComponents />
      </body>
    </html>
  );
}
