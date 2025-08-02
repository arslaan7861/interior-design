"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import {
  Calendar,
  Phone,
  Star,
  Gift,
  CheckCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface AppointmentPopupProps {
  delay?: number; // delay in milliseconds
  showOnce?: boolean; // show only once per session
}

export function AppointmentPopup({
  delay = 5000,
  showOnce = true,
}: AppointmentPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    // Check if popup was already shown in this session
    const hasShown =
      showOnce && sessionStorage.getItem("appointmentPopupShown");

    if (hasShown) return;

    const timer = setTimeout(() => {
      setIsVisible(true);
      if (showOnce) {
        sessionStorage.setItem("appointmentPopupShown", "true");
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, showOnce]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleCallNow = () => {
    window.open("tel:+919876543210", "_self");
    handleClose();
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi! I'm interested in booking a consultation for interior design services."
    );
    window.open(
      `https://wa.me/8699062901
?text=${message}`,
      "_blank"
    );
    handleClose();
  };

  return (
    <Dialog open={isVisible} onOpenChange={setIsVisible}>
      <DialogContent className="max-w-md p-0 overflow-hidden border-0 shadow-none">
        <DialogTitle></DialogTitle>
        <div className="p-8 text-center relative">
          {/* Special Offer Badge */}
          <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full text-sm font-medium mb-4 shadow-lg">
            <Gift className="h-4 w-4" />
            <span>Limited Time Offer</span>
            <Sparkles className="h-4 w-4" />
          </div>

          {/* Main Heading */}
          <h2 className="text-2xl font-bold text-stone-800 mb-2">
            Transform Your Space Today!
          </h2>

          <p className="text-stone-600 mb-6 leading-relaxed">
            Get a{" "}
            <span className="font-semibold text-primary">
              FREE consultation
            </span>{" "}
            and
            <span className="font-semibold text-green-600"> 15% OFF</span> on
            your first project
          </p>

          {/* Features */}
          <div className="space-y-3 mb-6 text-left">
            {[
              "Expert Interior Consultation",
              "Custom Furniture Solutions",
              "On-time Project Delivery",
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-stone-700 text-sm">{feature}</span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button
              //   onClick={handleBookNow}
              className="w-full bg-primary hover:bg-primary/80 text-white py-3 text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
            >
              {" "}
              <a
                href={`mailto:${process.env.NEXT_PUBLIC_COMPANY_EMAIL}`}
                className="flex items-center"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Book Free Consultation
                <ArrowRight className="h-4 w-4 ml-2" />
              </a>
            </Button>

            <div className="grid grid-cols-2 gap-3">
              <Button
                onClick={handleCallNow}
                variant="outline"
                className="border-green-500 text-green-600 hover:bg-green-50 hover:border-green-600 transition-all duration-300 bg-transparent"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>

              <Button
                onClick={handleWhatsApp}
                variant="outline"
                className="border-green-500 text-green-600 hover:bg-green-50 hover:border-green-600 transition-all duration-300 bg-transparent"
              >
                <svg
                  className="h-4 w-4 mr-2"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                WhatsApp
              </Button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-6 pt-4 border-t border-stone-200">
            <div className="flex items-center justify-center gap-4 text-sm text-stone-500">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="w-1 h-1 bg-stone-300 rounded-full"></div>
              <span>500+ Happy Clients</span>
              <div className="w-1 h-1 bg-stone-300 rounded-full"></div>
              <span>15+ Years</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
