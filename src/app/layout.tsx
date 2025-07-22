import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Toast from "@/components/Global/Toast";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Chandigarh Decor",
  description:
    "Transform your home or office with professional interior design services. Modern, luxurious, and personalized designs.",
  keywords: [
    "interior design services",
    "custom furniture design",
    "modular kitchen design",
    "luxury interior design",
    "turnkey interior solutions",

    // Design Styles
    "modern interior design",
    "minimalist home interiors",
    "contemporary furniture design",

    // Location-Based (Chandigarh & Punjab)
    "interior designers in Chandigarh",
    "custom furniture in Chandigarh",
    "modular furniture in Punjab",
    "home interior design in Punjab",
    "furniture makers in Chandigarh",

    // Long-Tail High-Intent
    "custom wardrobes for bedrooms",
    "space-saving furniture solutions",
    "personalized living room interiors",
    "modular wardrobe design ideas",
    "custom TV unit design Chandigarh",

    // Content/Blog Topics
    "best interior design trends 2025",
    "how to choose custom furniture",
    "interior design with custom furniture",
    "furniture ideas for small apartments",
    "benefits of modular furniture",

    // Commercial/Transactional
    "book interior design consultation Chandigarh",
    "get quote for custom furniture in Punjab",
  ],
  openGraph: {
    title: "Interior Design Company | Elegant Spaces by Chandigarh Decor",
    description:
      "Explore our portfolio of modern, elegant interiors for homes and offices.",
    url: "https://modern-makeover.vercel.app",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Modern Living Room Design",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "3QguOaw_AqS7_76Gaozq2_2Sh1h6CYdaVacxa5s2cuw",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background  w-screen h-svh overflow-x-hidden">
        <Toaster position="top-center" />
        <Suspense fallback={<></>}>
          <Toast />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
