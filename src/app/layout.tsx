import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.scss";
import "../../public/scss/main.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Work Robin Provider",
  description: "Work Robin Provider",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
