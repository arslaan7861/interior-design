import { Instagram } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { navItems } from "./MobileNavBar";
import Link from "next/link";

function Footer() {
  return (
    <footer
      id="about"
      className="bg-stone-800 text-white py-16"
      aria-label="Site footer"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Branding & Social */}
          <section aria-label="Brand description and social links">
            <div className="text-2xl font-bold mb-4">
              Chandigarh<span className="text-primary">Decor</span>
            </div>
            <p className="text-stone-300 mb-4">
              Creating beautiful, functional spaces that reflect your unique
              style and personality.
            </p>
            <div className="flex space-x-4" aria-label="Social media links">
              <a
                href="https://www.instagram.com/modern_makeover_studio1/?igsh=NG00dnZpeDc0N213&utm_source=qr"
                className="text-stone-300 hover:text-primary transition-colors duration-300 flex gap-1"
                aria-label="Instagram"
                target="_blank"
              >
                <Instagram size={20} /> Instagram
              </a>
              {/* <a
                href="#"
                className="text-stone-400 hover:text-primary transition-colors duration-300"
                aria-label="Facebook"
                target="_blank"
              >
                <Facebook size={20} />
              </a> */}
            </div>
          </section>

          {/* Services */}
          <section aria-labelledby="footer-services">
            <h4 id="footer-services" className="text-lg font-semibold mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-stone-300">
              {[
                "Interior Design",
                "Space Planning",
                "Furniture Selection",
                "Color Consultation",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="hover:text-primary transition-colors duration-300"
                    aria-label={service}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* Company */}
          <section aria-labelledby="footer-company">
            <h4 id="footer-company" className="text-lg font-semibold mb-4">
              Company
            </h4>
            <ul className="space-y-2 text-stone-300">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-primary transition-colors duration-300"
                    aria-label={`Go to ${item.label} section`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Contact */}
          <section aria-labelledby="footer-contact">
            <h4 id="footer-contact" className="text-lg font-semibold mb-4">
              Contact Info
            </h4>
            <address className="not-italic space-y-2 text-stone-300">
              <p>
                S.C.O 123 school road new furniture market, Baltana Chandigarh
                India
              </p>
              <article className="flex flex-col items-start">
                <Button
                  variant={"ghost"}
                  asChild
                  className="px-0 hover:bg-transparent hover:text-primary"
                >
                  <a href="tel:+918699062901">+91 8699062901 </a>
                </Button>{" "}
                <Button
                  variant={"ghost"}
                  asChild
                  className="px-0 hover:bg-transparent hover:text-primary"
                >
                  <a href="tel:+919357757976">+91 9357757976 </a>
                </Button>
              </article>
              <p>
                <a
                  href={`mailto:${process.env.NEXT_PUBLIC_COMPANY_EMAIL}`}
                  className="hover:text-primary transition-colors duration-300"
                >
                  {process.env.NEXT_PUBLIC_COMPANY_EMAIL}
                </a>
              </p>
            </address>
          </section>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-stone-400 text-sm">
              © 2024 ChandigarhDecor. All rights reserved.
            </p>
            <nav
              className="flex space-x-6 mt-4 md:mt-0"
              aria-label="Legal navigation"
            >
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (policy) => (
                  <a
                    key={policy}
                    href="#"
                    className="text-stone-400 hover:text-primary text-sm transition-colors duration-300"
                    aria-label={policy}
                  >
                    {policy}
                  </a>
                )
              )}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
