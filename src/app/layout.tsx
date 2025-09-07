import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const onest = Onest({ subsets: ["latin"], variable: "--font-onest" });

export const metadata: Metadata = {
  title: "Fastline - Professional Security & Safety Solutions",
  description:
    "Experts in security services, compliance audits and professional training, safeguarding assets and ensuring compliance across key sectors in Nigeria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(onest.className, "antialiased")}>{children}</body>
    </html>
  );
}
