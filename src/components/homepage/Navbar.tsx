"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { MobileNavBar, navItems } from "./MobileNavBar";

function Navbar() {
  const pathname = usePathname();
  const isNotHome = pathname !== "/";
  const [isScrolled, setIsScrolled] = useState(isNotHome);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight / 2 || isNotHome);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <header>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "text-gray-700 bg-background py-4 border-b shadow-sm"
            : "bg-gradient-to-b from-black/30 via-black/10 to-black/0 py-6"
        }`}
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link
            href="/"
            className={`text-2xl font-bold font-orbitron ${
              isScrolled ? "text-black" : "text-white"
            }`}
            aria-label="Chandigarh Decor Homepage"
          >
            Chandigarh<span className="text-primary font-orbitron">Decor</span>
          </Link>

          <ul
            className="hidden lg:flex items-center space-x-8"
            aria-label="Site sections"
          >
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${
                    isScrolled ? "text-black" : "text-white"
                  } hover:text-primary transition-colors duration-300 relative group`}
                  aria-label={`Go to ${item.label} section`}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={`https://wa.me/8699062901
?text=${encodeURIComponent(
              "Hi! I'm interested in booking a consultation for interior design services."
            )}`}
            className="hidden lg:block"
            target="_blank"
          >
            <Button
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group"
              aria-label="Book a consultation"
            >
              Book Consultation
            </Button>
          </a>
          <MobileNavBar isScrolled={isScrolled} />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
