import HeroSection from "@/components/homepage/heroSection";
import FeaturedSection from "@/components/homepage/featuredSection";
import Testimonials from "@/components/homepage/testimonials";
import Projects from "@/components/homepage/projects";
import ContactSection from "@/components/homepage/contact";

export default function InteriorDesignWebsite() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      {/* Featured Furniture */}
      <FeaturedSection />
      {/* Projects Showcase */}
      <Projects />
      {/* Testimonials */}
      <Testimonials />
      {/* Contact Section */}
      <ContactSection />
    </>
  );
}
