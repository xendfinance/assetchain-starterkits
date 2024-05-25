import "@rainbow-me/rainbowkit/styles.css";
import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";


export const metadata: Metadata = {
  title: "Asset Chain Starterkits",
  description: "Built with  Asset Chain 🔗",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers> {children}</Providers>
      </body>
    </html>
  );
}
