import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const ralewayFont = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
  variable: "--font-raleway",
  preload: true,
});

export const metadata: Metadata = {
  title: "Daily Reflection",
  description: "Mindfullness App developed by Ciaran McGovern",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ralewayFont.variable} antialiased w-screen h-screen bg-slate-100`}
      >
        {children}
      </body>
    </html>
  );
}
