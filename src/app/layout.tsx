import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Toast from "@/components/Global/Toast";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Chandigarh Decor",
  description:
    "Ready to transform your space? Get in touch with our design experts for a personalized consultation.",
  keywords: [
    // keep your keyword list
    "Chandigarh Decor",
    "interior designers",
    "custom furniture design",
    "modular kitchen design",
    "luxury interior design",
    "turnkey interior solutions",
    "modern interior design",
    "minimalist home interiors",
    "contemporary furniture design",
    "Best interior designers in Chandigarh",
    "custom furniture in Chandigarh",
    "modular furniture in Punjab",
    "home interior design in Punjab",
    "furniture makers in Chandigarh",
    "custom wardrobes for bedrooms",
    "space-saving furniture solutions",
    "personalized living room interiors",
    "modular wardrobe design ideas",
    "custom TV unit design Chandigarh",
    "best interior design trends 2025",
    "how to choose custom furniture",
    "interior design with custom furniture",
    "furniture ideas for small apartments",
    "benefits of modular furniture",
    "book interior design consultation Chandigarh",
    "get quote for custom furniture in Punjab",
  ],
  metadataBase: new URL("https://chandigarhdecor.com"),
  alternates: {
    canonical: "https://chandigarhdecor.com",
  },
  icons: {
    icon: "/favicon.png", // Place favicon.png in public/
  },
  openGraph: {
    title: "Interior Design Company | Elegant Spaces by Chandigarh Decor",
    description:
      "Explore our portfolio of modern, elegant interiors for homes and offices.",
    url: "https://chandigarhdecor.com",
    type: "website",
    images: [
      {
        url: "/images/big-hero-1.jpg",
        width: 1200,
        height: 630,
        alt: "Modern Living Room Design",
      },
      {
        url: "/images/big-hero-2.jpg",
        width: 1200,
        height: 630,
        alt: "Modern Living Room Design",
      },
      {
        url: "/images/big-hero-3.jpg",
        width: 1200,
        height: 630,
        alt: "Modern Living Room Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chandigarh Decor",
    description:
      "Ready to transform your space? Get in touch with our design experts for a personalized consultation.",
    images: ["/images/big-hero-1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    maxSnippet: -1, // Prevents "5 days ago" from showing
  },
  verification: {
    google: "ldEVTtZN1ZsfybvPV7CKOH-sZ4gJJUFNUjvnEnUutZM",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background w-screen h-svh overflow-x-hidden scroll-smooth">
        <Toaster position="top-center" />
        <Suspense fallback={null}>
          <Toast />
        </Suspense>
        {children}
      </body>
    </html>
  );
}