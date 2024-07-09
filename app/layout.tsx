import type {Metadata} from "next";
import {Poppins} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const poppins = Poppins({
  weight: ["400", "600", "700", "800"],
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
      <link rel='shortcut icon' href='/images/pcc.png' type='image/x-icon' />
      <body className={poppins.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
