import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Juan Olloniego — Co-Founder & Head of Engineering @ Zapia AI",
  description:
    "Machine Learning Engineer building GenAI products at massive scale. Co-Founder & Head of Engineering at Zapia AI. MSc AI, University of Southampton.",
  openGraph: {
    title: "Juan Olloniego",
    description:
      "Co-Founder & Head of Engineering @ Zapia AI. Building GenAI products at massive scale for Latin America.",
    type: "website",
    url: "https://jolloniego.github.io",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`} suppressHydrationWarning>
      <body className="min-h-full antialiased">
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
