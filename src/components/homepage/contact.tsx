import React from "react";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import {
  ArrowRight,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Input } from "../ui/input";
import { Card, CardContent } from "../ui/card";

function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-6">
              Let&apos;s Create Something Beautiful Together
            </h2>
            <p className="text-xl text-stone-600 mb-8">
              Ready to transform your space? Get in touch with our design
              experts for a personalized consultation.
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-primary mr-4" />
                <span className="text-stone-700">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-primary mr-4" />
                <span className="text-stone-700">
                  {process.env.NEXT_PUBLIC_COMPANY_EMAIL}
                </span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-primary mr-4" />
                <span className="text-stone-700">
                  123 Design Street, New York, NY 10001
                </span>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-stone-800 mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-stone-600 hover:text-primary transition-colors duration-300"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="#"
                  className="text-stone-600 hover:text-primary transition-colors duration-300"
                >
                  <Facebook size={24} />
                </a>
              </div>
            </div>
          </div>

          <div>
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-stone-800 mb-6">
                  Book Your Consultation
                </h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      placeholder="First Name"
                      className="border-stone-300 focus:border-primary"
                    />
                    <Input
                      placeholder="Last Name"
                      className="border-stone-300 focus:border-primary"
                    />
                  </div>
                  <Input
                    placeholder="Email Address"
                    type="email"
                    className="border-stone-300 focus:border-primary"
                  />
                  <Input
                    placeholder="Phone Number"
                    type="tel"
                    className="border-stone-300 focus:border-primary"
                  />
                  <Textarea
                    placeholder="Tell us about your project..."
                    rows={4}
                    className="border-stone-300 focus:border-primary"
                  />
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white py-3">
                    Schedule Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
