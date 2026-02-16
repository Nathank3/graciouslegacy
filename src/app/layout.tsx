import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter, Playfair_Display } from "next/font/google"; // Using standard google fonts import

import "./globals.css";

// Mobile optimization
export const viewport: Viewport = {
  themeColor: "#FDFBF7",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1, // Prevent auto-zoom on inputs if needed, though usually distinct 
};

// Configure fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

// Robust Metadata Configuration
// Robust Metadata Configuration
export const metadata: Metadata = {
  metadataBase: new URL("https://graciouslegacy.vercel.app"),
  title: {
    default: "Grace Mithamo | PR Specialist & Executive Support",
    template: "%s | Grace Mithamo",
  },
  description: "Senior PR Specialist and Executive Assistant in Nairobi. Professional corporate writing, virtual assistance, brand management, web design, and CV revamp services to elevate your business operations.",
  keywords: [
    "Public Relations Specialist Kenya",
    "Executive Virtual Assistant Nairobi",
    "Corporate Writing Services",
    "Professional CV Revamp Kenya",
    "Brand Management Consultant",
    "Website Design and Development",
    "Graphic Design Services",
    "Customer Success Outsourcing",
    "Press Release Writing",
    "Administrative Support Services",
    "Grace Mithamo",
    "Gracious Legacy",
    "Digital Marketing Kenya",
    "Content Strategy Specialist",
    "Freelance PR Nairobi",
    "Executive Personal Assistant",
    "HR Documentation Services",
    "Newsletter Management",
    "Social Media Branding",
    "Business Process Optimization"
  ],
  authors: [{ name: "Grace Mithamo", url: "https://graciouslegacy.vercel.app" }],
  creator: "Grace Mithamo",
  publisher: "Grace Mithamo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://graciouslegacy.vercel.app",
    title: "Grace Mithamo | PR Specialist & Executive Support",
    description: "Expert PR, corporate writing, and virtual assistance services in Nairobi. Elevate your brand with polished communications and administrative excellence.",
    siteName: "Grace Mithamo Portfolio",
    images: [
      {
        url: "/assets/headshot.png",
        width: 1200,
        height: 630,
        alt: "Grace Mithamo - PR & Admin Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grace Mithamo | PR Specialist & Executive Support",
    description: "Expert PR, corporate writing, and virtual assistance services in Nairobi. Professional support for streamlined business operations.",
    images: ["/assets/headshot.png"],
    creator: "@gracemithamo",
  },
  verification: {
    google: "3Lyl4l6cgWdQGaevOv4q1MOfA61MPMC29xS-n2f00MA",
    // yandex: "yandex-verification=...",
    // bing: "bing-verification=...", 
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://graciouslegacy.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased font-sans text-gray-900`}
        suppressHydrationWarning={true}
      >

        {children}
        <Script id="smartsupp-chat" strategy="afterInteractive">
          {`
            var _smartsupp = _smartsupp || {};
            _smartsupp.key = '4856c74b8f35db06f8a464c2f3ba373156354449';
            window.smartsupp||(function(d) {
              var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
              s=d.getElementsByTagName('script')[0];c=d.createElement('script');
              c.type='text/javascript';c.charset='utf-8';c.async=true;
              c.src='https://www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);
            })(document);
          `}
        </Script>
        <noscript>Powered by <a href="https://www.smartsupp.com" target="_blank" rel="noopener noreferrer">Smartsupp</a></noscript>
      </body>
    </html>
  );
}
