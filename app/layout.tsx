import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const ibmPlex = Poppins({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-poppins" });

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
      <body className={ibmPlex.className}>{children}</body>
    </html >
  );
}
