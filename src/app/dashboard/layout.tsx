import type { Metadata } from "next";

import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";


export const metadata: Metadata = {
  title: "EncontreMe",
  description: "",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Topbar />
      <div className="fixed w-full h-5 z-0 bg-black" />
      <Sidebar />
      <div className="flex mt-16 bg-primary">
        <div className="md:ml-64 w-full h-full z-[1] rounded-t-2xl md:rounded-tr-2xl md:rounded-tl-none bg-primary">
          {children}
        </div>
      </div>
    </div>
  );
}