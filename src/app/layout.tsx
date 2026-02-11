import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google"; // Using standard google fonts import
import SplashScreen from "@/components/SplashScreen";
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
  metadataBase: new URL("https://grace-mithamo-portfolio.vercel.app"), // Fallback/Placeholder URL. Ideally use process.env.NEXT_PUBLIC_BASE_URL
  title: {
    default: "Grace Mithamo | Public Relations & Administrative Specialist",
    template: "%s | Grace Mithamo",
  },
  description: "Senior PR Specialist and Executive Admin providing corporate writing, virtual assistance, branding, and project management services to elevate your business operations.",
  keywords: [
    "Public Relations", 
    "Virtual Assistant", 
    "Kenya", 
    "Nairobi", 
    "Corporate Writing", 
    "Executive Support", 
    "Grace Mithamo", 
    "Project Management",
    "Brand Management",
    "Digital Marketing",
    "Content Strategy",
    "Administrative Services",
    "Business Consultant",
    "Professional Writer",
    "Remote Assistant",
    "Social Media Management",
    "Email Marketing",
    "Customer Service",
    "Data Entry",
    "Research",
    "Scheduling",
    "Travel Planning",
    "Event Planning",
    "Office Management",
    "Transcription",
    "Proofreading",
    "Editing",
    "Copywriting",
    "Blog Writing",
    "Ghostwriting",
    "Press Releases",
    "Media Relations",
    "Crisis Management",
    "Reputation Management",
    "Influencer Marketing",
    "Community Management",
    "SEO",
    "SEM",
    "PPC",
    "Google Ads",
    "Facebook Ads",
    "Instagram Ads",
    "LinkedIn Ads",
    "Twitter Ads",
    "Pinterest Ads",
    "TikTok Ads",
    "YouTube Ads",
    "Email Automation",
    "CRM Management",
    "Lead Generation",
    "Sales Support",
    "Market Research",
    "Competitor Analysis",
    "SWOT Analysis",
    "Business Planning",
    "Financial Analysis",
    "Budgeting",
    "Forecasting",
    "Accounting",
    "Bookkeeping",
    "Invoicing",
    "Payroll",
    "Tax Preparation",
    "Legal Support",
    "Paralegal Services",
    "Human Resources",
    "Recruiting",
    "Onboarding",
    "Training",
    "Employee Relations",
    "Performance Management",
    "Benefits Administration",
    "Compliance",
    "Policy Development",
    "Procedure Documentation",
    "Workflow Optimization",
    "Process Improvement",
    "Change Management",
    "Organizational Development",
    "Strategic Planning",
    "Leadership Development",
    "Executive Coaching",
    "Team Building",
    "Conflict Resolution",
    "Mediation",
    "Negotiation",
    "Public Speaking",
    "Presentation Skills",
    "Communication Skills",
    "Interpersonal Skills",
    "Emotional Intelligence",
    "Time Management",
    "Productivity",
    "Stress Management",
    "Work-Life Balance",
    "Wellness",
    "Health",
    "Fitness",
    "Nutrition",
    "Lifestyle",
    "Fashion",
    "Beauty",
    "Travel",
    "Food",
    "Drink",
    "Home",
    "Garden",
    "Family",
    "Parenting",
    "Relationships",
    "Dating",
    "Marriage",
    "Divorce",
    "Mental Health",
    "Psychology",
    "Sociology",
    "Philosophy",
    "Religion",
    "Spirituality",
    "Astrology",
    "Numerology",
    "Tarot",
    "Psychic",
    "Medium",
    "Healer",
    "Coach",
    "Mentor",
    "Teacher",
    "Tutor",
    "Trainer",
    "Consultant",
    "Advisor",
    "Expert",
    "Specialist",
    "Professional",
    "Freelancer",
    "Contractor",
    "Entrepreneur",
    "Business Owner",
    "Founder",
    "CEO",
    "COO",
    "CFO",
    "CTO",
    "CMO",
    "CIO",
    "CRO",
    "CHRO",
    "CLO",
    "CPO",
    "CSO",
    "CDO",
    "CJO",
    "CKO",
    "CVO",
    "CWO",
    "CXO",
    "CYO",
    "CZO"
  ],
  authors: [{ name: "Grace Mithamo", url: "https://grace-mithamo-portfolio.vercel.app" }],
  creator: "Grace Mithamo",
  publisher: "Grace Mithamo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://grace-mithamo-portfolio.vercel.app",
    title: "Grace Mithamo | Polished PR & Executive Support",
    description: "From editorial writing to complex project management—I handle the details so you can focus on the big picture. Discover professional virtual assistance and PR services.",
    siteName: "Grace Mithamo Portfolio",
    images: [
      {
        url: "/assets/headshot.png", // Uses the uploaded headshot as the sharing image
        width: 1200,
        height: 630,
        alt: "Grace Mithamo - PR & Admin Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grace Mithamo | PR & Admin Specialist",
    description: "Professional support for streamlined business operations, corporate writing, and virtual assistance.",
    images: ["/assets/headshot.png"],
    creator: "@gracemithamo", // Ideally replace with actual handle if known
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
    canonical: "https://grace-mithamo-portfolio.vercel.app",
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
        <SplashScreen />
        {children}
      </body>
    </html>
  );
}
