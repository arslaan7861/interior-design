"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Lightbulb,
  Home,
  Sofa,
  ChefHat,
  Shirt,
  Monitor,
  Layers,
  Palette,
  Ruler,
  Target,
  Hammer,
} from "lucide-react";

function AboutServices() {
  const [activeService, setActiveService] = useState("core");

  const coreServices = [
    {
      icon: <Sofa className="h-6 w-6" />,
      name: "Sofa",
      description: "Custom sofas and seating solutions",
    },
    {
      icon: <Home className="h-6 w-6" />,
      name: "Bed",
      description: "Comfortable and stylish bedroom furniture",
    },
    {
      icon: <ChefHat className="h-6 w-6" />,
      name: "Dining Table",
      description: "Elegant dining sets for every space",
    },
    {
      icon: <Home className="h-6 w-6" />,
      name: "Chairs",
      description: "Ergonomic and designer chairs",
    },
    {
      icon: <Sofa className="h-6 w-6" />,
      name: "Diwan",
      description: "Traditional and modern diwan designs",
    },
    {
      icon: <Home className="h-6 w-6" />,
      name: "Center Table",
      description: "Functional and aesthetic center tables",
    },
  ];

  const specialistServices = [
    {
      icon: <Shirt className="h-6 w-6" />,
      name: "Wardrobe & Almira",
      description: "Custom storage solutions",
    },
    {
      icon: <Monitor className="h-6 w-6" />,
      name: "TV Paneling",
      description: "Modern entertainment units",
    },
    {
      icon: <Layers className="h-6 w-6" />,
      name: "Wall Fluted Panels",
      description: "Textured wall treatments",
    },
    {
      icon: <Palette className="h-6 w-6" />,
      name: "All Wall Paneling",
      description: "Complete wall solutions",
    },
    {
      icon: <ChefHat className="h-6 w-6" />,
      name: "Modular Kitchen",
      description: "Complete kitchen design & installation",
    },
    {
      icon: <Hammer className="h-6 w-6" />,
      name: "Wood Works",
      description: "All kinds of carpentry work",
    },
  ];

  const additionalServices = [
    {
      icon: <Layers className="h-6 w-6" />,
      name: "False Ceiling",
      description: "Design and installation",
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      name: "Lighting Design",
      description: "Ambient, task & accent lighting",
    },
    {
      icon: <Ruler className="h-6 w-6" />,
      name: "3D Layouts",
      description: "Floor planning & visualization",
    },
    {
      icon: <Home className="h-6 w-6" />,
      name: "Storage Solutions",
      description: "Customized organization systems",
    },
    {
      icon: <Palette className="h-6 w-6" />,
      name: "Wall Finishes",
      description: "Wallpaper & textured treatments",
    },
    {
      icon: <Shirt className="h-6 w-6" />,
      name: "Upholstery",
      description: "Curtain & fabric coordination",
    },
    {
      icon: <Target className="h-6 w-6" />,
      name: "Space Optimization",
      description: "Smart solutions for small homes",
    },
    {
      icon: <Monitor className="h-6 w-6" />,
      name: "Office Interiors",
      description: "Professional workspace design",
    },
  ];
  return (
    <section className="py-20 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-stone-800 mb-4">
            Our Expertise
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Comprehensive interior solutions from furniture to complete space
            transformations
          </p>
        </div>
        {/* Service Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button
            variant={activeService === "core" ? "default" : "outline"}
            onClick={() => setActiveService("core")}
            className={
              activeService === "core" ? "bg-primary hover:bg-primary/80" : ""
            }
          >
            Core Furniture
          </Button>
          <Button
            variant={activeService === "specialist" ? "default" : "outline"}
            onClick={() => setActiveService("specialist")}
            className={
              activeService === "specialist"
                ? "bg-primary hover:bg-primary/80"
                : ""
            }
          >
            Specialist Services
          </Button>
          <Button
            variant={activeService === "additional" ? "default" : "outline"}
            onClick={() => setActiveService("additional")}
            className={
              activeService === "additional"
                ? "bg-primary hover:bg-primary/80"
                : ""
            }
          >
            Design Services
          </Button>
        </div>
        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeService === "core" &&
            coreServices.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-stone-800">
                        {service.name}
                      </h3>
                      <p className="text-stone-600 text-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

          {activeService === "specialist" &&
            specialistServices.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-stone-800">
                        {service.name}
                      </h3>
                      <p className="text-stone-600 text-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

          {activeService === "additional" &&
            additionalServices.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-stone-800">
                        {service.name}
                      </h3>
                      <p className="text-stone-600 text-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
}

export default AboutServices;
