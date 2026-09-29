import type { Metadata } from "next";
import { Outfit, Fraunces, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { CustomCursor } from "@/components/CustomCursor";
import { PERSONAL_INFO } from "@/lib/data";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shahzaman-portfolio.vercel.app"),
  title: {
    default: "Muhammad Shahzaman | Web Developer & Full Stack Developer | WordPress & Shopify Specialist",
    template: "%s | Muhammad Shahzaman",
  },
  description:
    "Official portfolio of Muhammad Shahzaman. Web Developer, Full-Stack Engineer, and CMS Specialist with 18+ verified live production projects across WordPress, Shopify, and Next.js applications.",
  keywords: [
    "Muhammad Shahzaman",
    "Web Developer",
    "Full Stack Developer",
    "WordPress Developer",
    "Shopify Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "UI/UX Developer",
    "Technical SEO",
    "Prompt Engineering",
    "Dawley Institute of Technology",
    "International Web Developer",
  ],
  authors: [{ name: "Muhammad Shahzaman", url: "https://www.linkedin.com/in/muhammed-shahzaman-developer" }],
  creator: "Muhammad Shahzaman",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shahzaman-portfolio.vercel.app",
    title: "Muhammad Shahzaman | Web Developer & Full Stack Developer",
    description:
      "Explore 18+ verified live production projects, bespoke WordPress and Shopify storefronts, and full-stack web applications by Muhammad Shahzaman.",
    siteName: "Muhammad Shahzaman Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Shahzaman | Web Developer & Full Stack Developer",
    description:
      "Production-ready portfolio of Muhammad Shahzaman. Full-Stack Developer, WordPress & Shopify Specialist.",
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
  // Rich JSON-LD Structured Data Schema for Person and WebSite
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://shahzaman-portfolio.vercel.app/#person",
        name: PERSONAL_INFO.name,
        jobTitle: "Web Developer & Full Stack Developer",
        description: PERSONAL_INFO.heroSubheadline,
        email: `mailto:${PERSONAL_INFO.email}`,
        url: "https://shahzaman-portfolio.vercel.app",
        sameAs: [
          PERSONAL_INFO.linkedIn,
          PERSONAL_INFO.github,
        ],
        worksFor: {
          "@type": "Organization",
          name: "Dawley Institute of Technology",
        },
        knowsAbout: [
          "Web Development",
          "Full Stack Development",
          "WordPress Development",
          "Shopify Storefronts",
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "UI/UX Design",
          "Technical SEO",
          "AI Search Optimization",
          "Prompt Engineering"
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://shahzaman-portfolio.vercel.app/#website",
        url: "https://shahzaman-portfolio.vercel.app",
        name: "Muhammad Shahzaman Portfolio",
        author: {
          "@id": "https://shahzaman-portfolio.vercel.app/#person",
        },
        description: "Official software development and CMS engineering portfolio of Muhammad Shahzaman.",
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${outfit.variable} ${fraunces.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('ma_portfolio_theme');
                  var theme = saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                  document.documentElement.setAttribute('data-theme', theme);
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans relative selection:bg-[#E76F51] selection:text-white">
        <ThemeProvider>
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
