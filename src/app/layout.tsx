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

const siteName = "MEGAS TECH INC";
const siteDescription = "Transforming ideas into digital reality with cutting-edge web development, UI/UX design, and tech consulting services.";
const siteUrl = 'https://themegastechinc.com';
const siteImage = '/og-image.jpg';

// Structured data for better SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Corporation',
  name: siteName,
  description: siteDescription,
  url: siteUrl,
  logo: `${siteUrl}/megas_logo.png`,
  sameAs: [
    'https://twitter.com/megastechinc',
    'https://www.linkedin.com/company/megas-tech-inc',
    'https://github.com/megastechinc',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'contact@themegastechinc.com',
    url: siteUrl
  }
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Innovative Technology Solutions`,
    template: `%s | ${siteName}`
  },
  description: siteDescription,
  keywords: [
    "web development", "UI/UX design", "tech consulting", "software development", 
    "technology solutions", "digital transformation", "custom software", "responsive design",
    "e-commerce solutions", "cloud services", "IT consulting", "mobile app development"
  ],
  authors: [
    { 
      name: siteName,
      url: siteUrl 
    }
  ],
  creator: siteName,
  publisher: siteName,
  formatDetection: {
    email: true,
    address: false,
    telephone: true,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: `${siteName} | Innovative Technology Solutions`,
    description: siteDescription,
    url: siteUrl,
    siteName: siteName,
    images: [
      {
        url: siteImage,
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Innovative Technology Solutions`,
    description: siteDescription,
    images: [siteImage],
    creator: "@megastechinc",
    site: "@megastechinc",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification=JWcukNW1BJCuZG67Inhl-kOxDYZVCVwOims2xAwhyuM',
    yandex: '795bce3557782324',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content={siteName} />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/megastech_logo.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/megastech_logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/megastech_logo.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased">
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
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
