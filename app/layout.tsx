import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });
const ibmPlex = IBM_Plex_Serif({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-ibm-plex-serif" });

export const metadata: Metadata = {
  title: "Horizon",
  description: "A modern banking solution for everyone.",
  icons: {
    icon: "/icons/logo.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, ibmPlex.className)}>{children}</body>
    </html>
  );
}
