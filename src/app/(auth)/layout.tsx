import { Sider } from "@/components/shared/auth";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen max-w-[1300px] mx-auto">
      <Sider />
      <div className="flex-1">{children}</div>
    </div>
  );
}
