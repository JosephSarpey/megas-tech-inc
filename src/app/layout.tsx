import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira-code",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://megastech.inc'),
  title: "MEGAS TECH INC | Innovative Technology Solutions",
  description: "Transforming ideas into digital reality with cutting-edge web development, UI/UX design, and tech consulting services.",
  keywords: ["web development", "UI/UX design", "tech consulting", "software development", "MEGAS TECH"],
  authors: [{ name: "MEGAS TECH INC" }],
  openGraph: {
    title: "MEGAS TECH INC | Innovative Technology Solutions",
    description: "Transforming ideas into digital reality with cutting-edge technology solutions.",
    url: "https://megastech.inc",
    siteName: "MEGAS TECH INC",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MEGAS TECH INC",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MEGAS TECH INC | Innovative Technology Solutions",
    description: "Transforming ideas into digital reality with cutting-edge technology solutions.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased">
        <Navbar />
        <main className="flex-1 pt-20">
          {children}
        </main>
        <Footer />
        <Toaster 
          position="bottom-right"
          toastOptions={{
            style: {
              background: 'hsl(var(--background))',
              color: 'hsl(var(--foreground))',
              border: '1px solid hsl(var(--accent))',
              borderRadius: '0.5rem',
              padding: '1rem',
            },
          }}
        />
        <Analytics/>
      </body>
    </html>
  );
}
