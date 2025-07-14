"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  Star,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  Play,
  ArrowRight,
  Filter,
} from "lucide-react";
import {
  heroSlides,
  categories,
  featuredFurniture,
  galleryItems,
  projects,
  testimonials,
} from "@/lib/dummydata";

export default function InteriorDesignWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [isScrolled, setIsScrolled] = useState(false);

  const [scrollY, setScrollY] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const heroRef = useRef<HTMLElement>(null);

  // Scroll animations
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Loading animation
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            entry.target.classList.remove("scroll-animate");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    // Wait for DOM to be ready
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll(".scroll-animate");
      elements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [isLoading]);

  // Auto-advance hero slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Parallax effect
  const parallaxOffset = scrollY * 0.5;

  const filteredGallery =
    selectedFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedFilter);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "text-gray-700 backdrop-blur-md py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="text-2xl font-bold text-stone-800">
            Luxe<span className="text-primary">Interior</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {["Home", "Collections", "Projects", "About", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-black hover:text-primary transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              )
            )}
          </div>

          <Button
            variant="outline"
            className="hidden md:flex border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 bg-transparent"
          >
            Book Consultation
          </Button>

          <button
            className="md:hidden text-stone-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t">
            <div className="container mx-auto px-6 py-4 space-y-4">
              {["Home", "Collections", "Projects", "About", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-stone-700 hover:text-primary transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                )
              )}
              <Button className="w-full bg-primary hover:bg-amber-700">
                Book Consultation
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Loading Screen */}
      {isLoading && (
        <div className="fixed inset-0 z-50 bg-stone-50 flex items-center justify-center">
          <div className="text-center">
            <div className="text-3xl font-bold text-stone-800 mb-4 animate-pulse">
              Luxe<span className="text-primary">Interior</span>
            </div>
            <div className="w-16 h-1 bg-primary mx-auto animate-pulse"></div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        {/* Parallax Background */}
        <div
          className="absolute inset-0"
          style={{ transform: `translateY(${parallaxOffset}px)` }}
        >
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentSlide
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-105"
              }`}
            >
              <img
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/50"></div>
            </div>
          ))}
        </div>

        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
          <div className="max-w-4xl mx-auto px-6">
            <h1
              key={currentSlide}
              className="text-5xl md:text-7xl font-light mb-6 hero-title-animate"
            >
              {heroSlides[currentSlide].title}
            </h1>
            <p
              key={`subtitle-${currentSlide}`}
              className="text-xl md:text-2xl opacity-90 mb-8 hero-subtitle-animate"
            >
              {heroSlides[currentSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center hero-buttons-animate">
              <Button
                size="lg"
                className="bg-primary hover:bg-amber-700 text-white px-8 py-3 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group"
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

        {/* Enhanced Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-primary transition-all duration-300 hover:scale-110 backdrop-blur-sm bg-white/10 rounded-full p-3 hover:bg-white/20"
        >
          <ChevronLeft size={32} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-primary transition-all duration-300 hover:scale-110 backdrop-blur-sm bg-white/10 rounded-full p-3 hover:bg-white/20"
        >
          <ChevronRight size={32} />
        </button>

        {/* Enhanced Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`relative transition-all duration-500 ${
                index === currentSlide ? "w-12 h-3" : "w-3 h-3"
              }`}
            >
              <div
                className={`absolute inset-0 rounded-full transition-all duration-500 ${
                  index === currentSlide
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

      {/* Featured Furniture */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-4">
              Featured Collection
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Discover our handpicked selection of premium furniture pieces that
              define luxury living
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredFurniture.map((item) => (
              <Card
                key={item.id}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 scroll-animate"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                  />
                  {item.isNew && (
                    <Badge className="absolute top-4 left-4 bg-primary hover:bg-amber-700 animate-pulse">
                      New
                    </Badge>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <Button
                      size="sm"
                      className="bg-white text-stone-800 hover:bg-primary hover:text-white"
                    >
                      Quick View
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-stone-800 group-hover:text-primary transition-colors duration-300">
                      {item.name}
                    </h3>
                    <span className="text-lg font-bold text-primary transform group-hover:scale-110 transition-transform duration-300">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-stone-600 mb-4">{item.category}</p>
                  <Button className="w-full bg-stone-800 hover:bg-primary transition-all duration-300 transform hover:scale-105">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-20 bg-stone-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-4">
              Transformation Stories
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Witness the magic of our interior transformations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 scroll-animate transform hover:-translate-y-1"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.before || "/placeholder.svg"}
                    alt={`${project.title} - Before`}
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:opacity-0 group-hover:scale-110"
                  />
                  <img
                    src={project.after || "/placeholder.svg"}
                    alt={`${project.title} - After`}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-1000 group-hover:opacity-100 scale-105 group-hover:scale-100"
                  />
                  <div className="absolute top-4 right-4 transform translate-x-4 group-hover:translate-x-0 transition-transform duration-300">
                    <Badge
                      variant="secondary"
                      className="bg-white/90 backdrop-blur-sm"
                    >
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
                      Hover to see transformation
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-stone-800 mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-stone-600 flex items-center">
                    <MapPin className="h-4 w-4 mr-1 group-hover:text-primary transition-colors duration-300" />
                    {project.location}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-4">
              Client Stories
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Hear from our satisfied clients about their experience
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentTestimonial * 100}%)`,
                }}
              >
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="w-full flex-shrink-0 px-8"
                  >
                    <Card className="border-0 shadow-lg">
                      <CardContent className="p-8 text-center">
                        <div className="flex justify-center mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-5 w-5 fill-amber-400 text-amber-400"
                            />
                          ))}
                        </div>
                        <p className="text-lg text-stone-700 mb-6 italic">
                          &quot;{testimonial.content}&quot;
                        </p>
                        <div className="flex items-center justify-center">
                          <img
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full mr-4"
                          />
                          <div>
                            <h4 className="font-semibold text-stone-800">
                              {testimonial.name}
                            </h4>
                            <p className="text-stone-600 text-sm">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 text-stone-400 hover:text-primary transition-colors duration-300"
            >
              <ChevronLeft size={32} />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 text-stone-400 hover:text-primary transition-colors duration-300"
            >
              <ChevronRight size={32} />
            </button>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? "bg-primary" : "bg-stone-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Gallery */}
      <section className="py-20 bg-stone-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-4">
              Design Gallery
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto mb-8">
              Explore our diverse portfolio of interior design styles
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8 scroll-animate">
              {categories.map((category, index) => (
                <Button
                  key={category}
                  variant={selectedFilter === category ? "default" : "outline"}
                  onClick={() => setSelectedFilter(category)}
                  className={`transition-all duration-300 transform hover:scale-105 ${
                    selectedFilter === category
                      ? "bg-primary hover:bg-amber-700 shadow-lg"
                      : "border-stone-300 text-stone-700 hover:border-primary hover:text-primary hover:shadow-md"
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <Filter className="h-4 w-4 mr-2" />
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {filteredGallery.map((item, index) => (
              <div
                key={item.id}
                className="break-inside-avoid group cursor-pointer scroll-animate"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-6">
                    <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-lg font-semibold mb-2">
                        {item.title}
                      </h3>
                      <Badge
                        variant="secondary"
                        className="bg-white/20 text-white backdrop-blur-sm"
                      >
                        {item.category}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
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
                  <span className="text-stone-700">hello@luxeinterior.com</span>
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
                  <a
                    href="#"
                    className="text-stone-600 hover:text-primary transition-colors duration-300"
                  >
                    <Twitter size={24} />
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
                    <Button className="w-full bg-primary hover:bg-amber-700 text-white py-3">
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

      {/* Footer */}
      <footer className="bg-stone-800 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
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
    </div>
  );
}
