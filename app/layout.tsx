import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vivek Kumar | Full Stack Developer & AI Engineer",

  description:
    "Portfolio of Vivek Kumar — Full Stack Developer and AI Engineer building scalable web applications, AI-powered systems, and modern digital products.",

  keywords: [
    "Vivek Kumar",
    "Full Stack Developer",
    "AI Engineer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "Python Developer",
    "AI ML Developer",
    "Software Engineer",
    "Web Developer",
  ],

  authors: [
    {
      name: "Vivek Kumar",
    },
  ],

  creator: "Vivek Kumar",
  publisher: "Vivek Kumar",

  metadataBase: new URL("https://your-domain.com"),

  openGraph: {
    title: "Vivek Kumar | Full Stack Developer & AI Engineer",
    description:
      "Full Stack Developer and AI Engineer building scalable web applications and intelligent systems.",
    type: "website",
    locale: "en_IN",
    siteName: "Vivek Kumar Portfolio",
  },

  twitter: {
    card: "summary_large_image",
    title: "Vivek Kumar | Full Stack Developer & AI Engineer",
    description:
      "Full Stack Developer and AI Engineer building scalable web applications and intelligent systems.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}