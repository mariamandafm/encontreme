import { SectionProvider } from "@/contexts/SectionContext";
import { PageProvider } from "@/contexts/PageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PageProvider>
        <SectionProvider>
            {children}
        </SectionProvider>
    </PageProvider>
  );
}

