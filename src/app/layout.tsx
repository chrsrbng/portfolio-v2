import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../shared/utils/styles/globals.css";
import "../shared/utils/styles/particles.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chris Portfolio",
  description: "Created by Chris Rabang",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
