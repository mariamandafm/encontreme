import { SectionProvider } from "@/contexts/SectionContext";
import { PageProvider } from "@/contexts/PageContext";

export default function EditLayout({
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

