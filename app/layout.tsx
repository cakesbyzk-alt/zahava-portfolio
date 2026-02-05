import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zahava kallus",
  icons: "/zahava.svg",
  description:
    "I’m Zahava, a fourth year visual communication student at Bezalel Academy of Art and Design. My work draws from history, nature, and architecture, and I enjoy building ideas through research, observation, and hands-on exploration. I discovered visual communication at seventeen in a high school graphic design course, and that early curiosity still shapes the kind of work I’m drawn to today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
