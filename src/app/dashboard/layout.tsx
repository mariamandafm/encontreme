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
      <div className="flex rounded-t-3xl mt-16 bg-primary">
        <Sidebar />
        <div className="ml-64 flex-1 h-screen">
          {children}
        </div>
      </div>
    </div>
  );
}