import React from "react";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";

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
              <a href="tel:+918699062901" className="flex items-center">
                <Phone className="h-6 w-6 text-primary mr-4" />
                <span className="text-stone-700">+91 8699062901 </span>
              </a>
              <a
                href="tel:+918699062901"
                className="flex items-center text-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-4 text-primary"
                  viewBox="0 0 448 512"
                  fill="currentColor"
                >
                  <path d="M380.9 97.1c-41.9-42-97.7-65.1-157-65.1-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480 117.7 449.1c32.4 17.7 68.9 27 106.1 27l.1 0c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.6-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1s56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6zM325.1 300.5c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8s-14.3 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7s-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4s4.6-24.1 3.2-26.4c-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
                <span className="text-stone-700">Whatsapp </span>
              </a>
              <a
                href={`mailto:${process.env.NEXT_PUBLIC_COMPANY_EMAIL}`}
                className="flex items-center"
              >
                <Mail className="h-6 w-6 text-primary mr-4" />
                <span className="text-stone-700">
                  {process.env.NEXT_PUBLIC_COMPANY_EMAIL}
                </span>
              </a>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 shrink-0 text-primary mr-4" />
                <span className="text-stone-700 capitalize">
                  S.C.O 123 school road new furniture market, Baltana Chandigarh
                  India
                </span>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-stone-800 mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/modern_makeover_studio1/?igsh=NG00dnZpeDc0N213&utm_source=qr"
                  className="text-stone-700 hover:text-primary transition-colors duration-300 flex gap-1"
                  aria-label="Instagram"
                  target="_blank"
                >
                  <Instagram size={24} /> Instagram
                </a>
                {/* <a
                  href="#"
                  className="text-stone-600 hover:text-primary transition-colors duration-300"
                >
                  <Facebook size={24} />
                </a> */}
              </div>
            </div>
          </div>

          {/* <div>
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
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
