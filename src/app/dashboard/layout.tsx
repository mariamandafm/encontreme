import type { Metadata } from "next";

import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

export const metadata: Metadata = {
  title: "EncontreMe",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Topbar />
      <div className="fixed w-full h-5 z-0 bg-black" />
      <div className="flex mt-16 bg-primary">
        <div className="ml-64 flex-1 h-full z-[1] rounded-tr-2xl bg-primary">
          <Sidebar />
          {children}
        </div>
      </div>
    </div>
  );
}