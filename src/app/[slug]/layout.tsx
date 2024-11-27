"use client";
import "@/styles/globals.css";
import { SectionProvider } from "@/contexts/SectionContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <SectionProvider>
            {children}
      </SectionProvider>
  );
}