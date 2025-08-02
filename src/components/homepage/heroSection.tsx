import { heroContent } from "@/lib/dummydata";
import React from "react";
import { Button } from "../ui/button";
import { ArrowRight, NotebookPen } from "lucide-react";
import Image from "next/image";

function HeroSection() {
  return (
    <header
      id="home"
      className="relative h-screen overflow-hidden"
      aria-label="Hero section"
    >
      {/* Parallax Background */}
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className={`absolute inset-0 transition-all duration-1000 ease-in-out`}
        >
          <Image
            src={heroContent.image || "/placeholder.svg"}
            alt={heroContent.title || "Hero background"}
            fill
            priority
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 from-black/30 via-black/10 to-black/5" />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 font-mono h-full flex items-center justify-center text-center text-white text-shadow-md">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-light mb-6 hero-title-animate">
            {heroContent.title}
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8 hero-subtitle-animate">
            {heroContent.subtitle}
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center hero-buttons-animate"
            role="group"
            aria-label="Hero call-to-action buttons"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group"
              aria-label="View our collections"
            >
              View Collections
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <a href="tel:+918699062901">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white capitalize hover:bg-white hover:text-stone-800 px-8 py-3 bg-transparent backdrop-blur-sm transform hover:scale-105 transition-all duration-300 group w-full"
                aria-label="Watch our brand story"
              >
                <NotebookPen className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                Consult our designer
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 right-8 text-white animate-bounce"
        aria-hidden="true"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2 opacity-75">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeroSection;
