import Image from "next/image";

import logos from "@/lib/assets/logos";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen pt-14">
      <nav className="w-[90%] mx-auto">
        <Image
          className="w-[154px] h-[37px] mt-3 mb-6"
          alt="logo"
          src={logos.logo}
        />
      </nav>
      <div className="flex-1 mt-[38px]">{children}</div>
    </div>
  );
}
