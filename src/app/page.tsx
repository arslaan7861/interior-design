"use client";

import HeroSection from "@/components/homepage/heroSection";
import FeaturedSection from "@/components/homepage/featuredSection";
import Testimonials from "@/components/homepage/testimonials";
import Projects from "@/components/homepage/projects";
import ContactSection from "@/components/homepage/contact";
import Footer from "@/components/homepage/Footer";
import Navbar from "@/components/homepage/Navbar";

export default function InteriorDesignWebsite() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Featured Furniture */}
      <FeaturedSection />

      {/* Projects Showcase */}
      <Projects />

      {/* Testimonials */}
      <Testimonials />

      {/* Interactive Gallery */}
      {/* <Gallery /> */}

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
