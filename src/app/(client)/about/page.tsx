import AboutServices from "@/components/homepage/AboutServices";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Award,
  Users,
  Hammer,
  Home,
  Star,
  CheckCircle,
  Quote,
  Calendar,
  Zap,
  Ruler,
  Heart,
} from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  const values = [
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Quality Craftsmanship",
      description:
        "We believe in delivering excellence through meticulous attention to detail and superior materials.",
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Client Satisfaction",
      description:
        "Your vision is our mission. We work closely with you to bring your dream spaces to life.",
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Timely Delivery",
      description:
        "We respect your time and ensure all projects are completed within the agreed timeline.",
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Modern Aesthetics",
      description:
        "Contemporary designs that blend functionality with cutting-edge style and innovation.",
    },
  ];

  const stats = [
    {
      number: "500+",
      label: "Projects Completed",
      icon: <Home className="h-6 w-6" />,
    },
    {
      number: "15+",
      label: "Years Experience",
      icon: <Award className="h-6 w-6" />,
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      icon: <Star className="h-6 w-6" />,
    },
    {
      number: "50+",
      label: "Expert Craftsmen",
      icon: <Users className="h-6 w-6" />,
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Homeowner",
      content:
        "The team transformed our entire home beautifully. The modular kitchen and wardrobe designs exceeded our expectations. Highly professional service!",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "Interior Enthusiast",
      content:
        "Amazing work on our living room furniture and TV paneling. The quality of wood work is exceptional and they completed everything on time.",
      rating: 5,
    },
    {
      name: "Amit Singh",
      role: "Business Owner",
      content:
        "They designed our office interiors perfectly. The space optimization and lighting design created a productive and welcoming environment.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      {/* ========== HERO SECTION ========== */}
      <section className="relative text-white py-20">
        <div className="absolute inset-0 bg-black/50 from-black/30 via-black/10 to-black/5" />
        <Image
          src={"/images/hero-1.jpg"}
          className="block sm:hidden"
          fill
          alt="Chandigarh decor"
        ></Image>
        <Image
          src={"/images/big-hero-1.jpg"}
          className="hidden sm:block"
          fill
          alt="Chandigarh decor"
        ></Image>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-light mb-6">
              About{" "}
              <span className="text-primary font-semibold">
                Chandigarh Decor
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-stone-200 mb-8 leading-relaxed">
              Transforming spaces into functional, beautiful environments
              tailored to your taste and lifestyle
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/80 text-white px-8 py-3"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Schedule Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-stone-800 px-8 py-3 bg-transparent"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ========== COMPANY STORY ========== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-light text-stone-800 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-stone-600 leading-relaxed">
                <p className="text-lg">
                  Located in the heart of Baltana at S.C.O. 123, School Road,
                  New Furniture Market, we have been crafting exceptional
                  interior solutions for over 15 years. What started as a
                  passion for creating beautiful spaces has evolved into a
                  trusted name in the interior design industry.
                </p>
                <p>
                  Our journey began with a simple belief: every space has the
                  potential to be extraordinary. We specialize in delivering
                  high-quality, customized interior solutions that reflect your
                  personality while maximizing functionality and comfort.
                </p>
                <p>
                  From elegant furniture pieces to complete home
                  transformations, we combine traditional craftsmanship with
                  modern design principles to create spaces that truly feel like
                  home.
                </p>
              </div>
              <div className="mt-8 flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-stone-700">Baltana, Punjab</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="text-stone-700">15+ Years</span>
                </div>
              </div>
            </div>
            <div className="relative w-full h-96 rounded-lg shadow-2xl">
              <Image
                src="/images/hero-3.jpg"
                alt="Our Workshop"
                fill
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-2 md:-left-6 bg-primary text-white p-2 md:p-6 rounded-lg shadow-xl">
                <div className="text-xl md:text-3xl font-bold">500+</div>
                <div className="text-sm">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== STATS SECTION ========== */}
      <section className="py-16 bg-stone-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <div className="text-primary">{stat.icon}</div>
                </div>
                <div className="text-3xl font-bold text-stone-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-stone-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== OUR VALUES ========== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-stone-800 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              The principles that guide everything we do and ensure exceptional
              results for every client
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="space-y-4">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-stone-800">
                    {value.title}
                  </h3>
                  <p className="text-stone-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SERVICES SHOWCASE ========== */}
      <AboutServices />

      {/* ========== PROCESS SECTION ========== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-stone-800 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              A systematic approach to bringing your vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description:
                  "We discuss your needs, preferences, and budget to understand your vision",
                icon: <Users className="h-8 w-8" />,
              },
              {
                step: "02",
                title: "Design & Planning",
                description:
                  "Our team creates detailed 3D layouts and material selections",
                icon: <Ruler className="h-8 w-8" />,
              },
              {
                step: "03",
                title: "Crafting",
                description:
                  "Expert craftsmen bring the design to life with precision and care",
                icon: <Hammer className="h-8 w-8" />,
              },
              {
                step: "04",
                title: "Installation",
                description:
                  "Professional installation and final touches to complete your space",
                icon: <CheckCircle className="h-8 w-8" />,
              },
            ].map((process, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {process.step}
                </div>
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-primary">
                  {process.icon}
                </div>
                <h3 className="text-xl font-semibold text-stone-800 mb-2">
                  {process.title}
                </h3>
                <p className="text-stone-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section className="py-20 bg-stone-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-stone-800 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Real experiences from satisfied customers who trusted us with
              their spaces
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="relative">
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <p className="text-stone-700 mb-6 italic">
                    &quot;{testimonial.content}&quot;
                  </p>
                  <div>
                    <h4 className="font-semibold text-stone-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-stone-600 text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ========== LOCATION & CONTACT ========== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-light text-stone-800 mb-6">
                Visit Our Showroom
              </h2>
              <p className="text-lg text-stone-600 mb-8">
                Experience our craftsmanship firsthand at our showroom in the
                New Furniture Market, Baltana. See our latest designs and
                discuss your project with our expert team.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-stone-800 mb-1">
                      Address
                    </h3>
                    <p className="text-stone-600">
                      S.C.O. 123, School Road
                      <br />
                      New Furniture Market, Baltana
                      <br />
                      Punjab, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-stone-800 mb-1">
                      Business Hours
                    </h3>
                    <p className="text-stone-600">
                      Monday - Saturday: 9:00 AM - 7:00 PM
                      <br />
                      Sunday: 10:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-stone-800 mb-1">
                      Contact
                    </h3>
                    <p className="text-stone-600">
                      Phone: +91 98765 43210
                      <br />
                      Email: {process.env.NEXT_PUBLIC_COMPANY_EMAIL!}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button className="bg-primary hover:bg-primary/80">
                  <a href="tel:+918699062901" className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    Book Appointment
                  </a>
                </Button>
                <Button variant="outline">
                  <MapPin className="h-4 w-4 mr-2" />
                  Get Directions
                </Button>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600&text=Showroom+Interior"
                alt="Our Showroom"
                fill
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Modern Showroom</h3>
                <p className="text-stone-200">
                  Experience our latest designs and quality craftsmanship
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="py-20 bg-gradient-to-r from-primary to-red-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-light mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your vision and create something extraordinary
            together. Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-stone-100 px-8 py-3"
            >
              <a href="tel:+918699062901" className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                Call Now
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-3 bg-transparent"
            >
              {" "}
              <a
                href={`mailto:${process.env.NEXT_PUBLIC_COMPANY_EMAIL}`}
                className="flex items-center"
              >
                <Mail className="h-5 w-5 mr-2" />
                Send Message
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
