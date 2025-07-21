import Footer from "@/components/homepage/Footer";
import Navbar from "@/components/homepage/Navbar";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navbar />
      {children}
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default layout;
