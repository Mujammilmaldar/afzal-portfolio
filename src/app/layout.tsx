import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CallToAction from "@/components/CallToAction";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>
        <Navbar />
        {children}
        <CallToAction />
        </main>
      </body>
    </html>
  );
}
