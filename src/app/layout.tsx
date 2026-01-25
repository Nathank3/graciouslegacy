import type { Metadata, Viewport } from "next";
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
export const metadata: Metadata = {
  metadataBase: new URL("https://grace-mithamo-portfolio.vercel.app"), // Fallback/Placeholder URL
  title: {
    default: "Grace Mithamo | Public Relations & Administrative Specialist",
    template: "%s | Grace Mithamo",
  },
  description: "Senior PR Specialist and Executive Admin providing corporate writing, virtual assistance, and project management services for modern businesses.",
  keywords: ["Public Relations", "Virtual Assistant", "Kenya", "Nairobi", "Corporate Writing", "Admin Support", "Grace Mithamo", "Project Management"],
  authors: [{ name: "Grace Mithamo" }],
  creator: "Grace Mithamo",
  publisher: "Grace Mithamo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://grace-mithamo-portfolio.vercel.app",
    title: "Grace Mithamo | Polished PR & Executive Support",
    description: "From editorial writing to complex project management—I handle the details so you can focus on the big picture.",
    siteName: "Grace Mithamo Portfolio",
    images: [
      {
        url: "/assets/headshot.png", // Uses the uploaded headshot as the sharing image
        width: 800,
        height: 600,
        alt: "Grace Mithamo - PR & Admin Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grace Mithamo | PR & Admin Specialist",
    description: "Professional support for streamlined business operations.",
    images: ["/assets/headshot.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
      </body>
    </html>
  );
}
