import { heroSlides } from "@/lib/dummydata";
import React from "react";
import { Button } from "../ui/button";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";

function HeroSection() {
  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === 0 ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          >
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 from-black/30 via-black/10 to-black/5"></div>
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 font-mono h-full flex items-center justify-center text-center text-white text-shadow-md">
        <div className="max-w-4xl mx-auto px-6">
          <h1
            key={0}
            className="text-5xl md:text-7xl font-light mb-6 hero-title-animate "
          >
            {heroSlides[0].title}
          </h1>
          <p
            key={`subtitle-${0}`}
            className="text-xl md:text-2xl opacity-90 mb-8 hero-subtitle-animate"
          >
            {heroSlides[0].subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center hero-buttons-animate">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group"
            >
              View Collections
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-stone-800 px-8 py-3 bg-transparent backdrop-blur-sm transform hover:scale-105 transition-all duration-300 group"
            >
              <Play className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              Watch Story
            </Button>
          </div>
        </div>
      </div>

      {/* Enhanced Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            // onClick={() => setCurrentSlide(index)}
            className={`relative transition-all duration-500 ${
              index === 0 ? "w-12 h-3" : "w-3 h-3"
            }`}
          >
            <div
              className={`absolute inset-0 rounded-full transition-all duration-500 ${
                index === 0
                  ? "bg-primary shadow-lg shadow-primary/50"
                  : "bg-white/50 hover:bg-white/70"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 text-white animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2 opacity-75">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
