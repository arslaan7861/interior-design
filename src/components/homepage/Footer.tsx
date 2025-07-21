import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";

function Footer() {
  return (
    <footer className="bg-stone-800 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="text-2xl font-bold mb-4">
              Luxe<span className="text-primary">Interior</span>
            </div>
            <p className="text-stone-300 mb-4">
              Creating beautiful, functional spaces that reflect your unique
              style and personality.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-stone-400 hover:text-primary transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-stone-400 hover:text-primary transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-stone-400 hover:text-primary transition-colors duration-300"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-stone-300">
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors duration-300"
                >
                  Interior Design
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors duration-300"
                >
                  Space Planning
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors duration-300"
                >
                  Furniture Selection
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors duration-300"
                >
                  Color Consultation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-stone-300">
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors duration-300"
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors duration-300"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors duration-300"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-stone-300">
              <p>123 Design Street</p>
              <p>New York, NY 10001</p>
              <p>+1 (555) 123-4567</p>
              <p>hello@luxeinterior.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-stone-400 text-sm">
              © 2024 LuxeInterior. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-stone-400 hover:text-primary text-sm transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-stone-400 hover:text-primary text-sm transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-stone-400 hover:text-primary text-sm transition-colors duration-300"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
