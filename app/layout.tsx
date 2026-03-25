import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { CursorGrid } from "@/components/cursor-grid";
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
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`} suppressHydrationWarning>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-E44VMNR5S6"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-E44VMNR5S6');
          `}
        </Script>
      </head>
      <body className="min-h-full antialiased">
        <ThemeProvider>
          <CursorGrid />
          <Navbar />
          <div className="relative z-10">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
