import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Toast from "@/components/Global/Toast";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Chandigarh Decor",
  description: "Interior design services that transform spaces.",
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
