import { Sider } from "@/components/shared/auth";
import GoogleAuthProvider from "@/provider/GoogleAuthProvider";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <GoogleAuthProvider>
      <div className="flex min-h-screen max-w-[1300px] mx-auto">
        <Sider />
        <div className="flex-1">{children}</div>
      </div>
    </GoogleAuthProvider>
  );
}
