import type { Metadata } from "next";
import { Inter } from "next/font/google";

import NextTopLoader from "nextjs-toploader";

import "./globals.scss";
import "../../public/scss/main.scss";
import ReactQueryProvider from "@/provider/react-query-provider";
import { Toaster } from "@/components/ui/toaster";

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
      <ReactQueryProvider>
        <body className={inter.className}>
          <NextTopLoader color="#920AF2" />
          <Toaster />
          {children}
        </body>
      </ReactQueryProvider>
    </html>
  );
}
