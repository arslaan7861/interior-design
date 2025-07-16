import React from "react";
import { Card, CardContent } from "../ui/card";
import { MapPin } from "lucide-react";
import { projects } from "@/lib/dummydata";
import { Badge } from "../ui/badge";
import Image from "next/image";

function Projects() {
  return (
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
                <Image
                  fill
                  src={project.before || "/placeholder.svg"}
                  alt={`${project.title} - Before`}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:opacity-0 group-hover:scale-110"
                />
                <Image
                  fill
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
  );
}

export default Projects;
