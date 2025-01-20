import type { Metadata } from "next";

import "@/styles/globals.css";
import { Syne } from "next/font/google";
import { AuthProvider } from "../contexts/AuthContext";

export const metadata: Metadata = {
  title: "EncontreMe",
  description: "",
};

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '800'],
  display: 'swap',
  variable: '--font-syne'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${syne.className} antialiased`}
      >
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
