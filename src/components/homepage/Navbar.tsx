"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  // Scroll animations
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight / 2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "text-gray-700 bg-background py-4"
          : "bg-gradient-to-b from-black/30 via-black/10 to-black/0 py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div
          className={`text-2xl font-bold ${
            isScrolled ? "text-black" : "text-white"
          }`}
        >
          Luxe<span className="text-primary">Interior</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {["Home", "Collections", "Projects", "About", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`${
                  isScrolled ? "text-black" : "text-white"
                } hover:text-primary transition-colors duration-300 relative group`}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            )
          )}
        </div>

        <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group">
          Book Consultation
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
