import routes from "@/lib/routes";
import { permanentRedirect } from "next/navigation";

export default function Home() {
  permanentRedirect(routes.dashboard.entry.path);
  return <main className=" min-h-screen flex flex-col">Hello World!</main>;
}
