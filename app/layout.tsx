import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const font = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "MI Raudlatul Athfal",
  description:
    "IMPLEMENTASI DECISION SUPPORT SYSTEM PENENTUAN PENERIMAAN BANTUAN UNTUK ANAK YATIM PIATU MENGGUNAKAN METODE PROMETHEE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} h-screen overflow-hidden`}>
        <Toaster />
        <div className="h-screen w-screen">{children}</div>
      </body>
    </html>
  );
}
