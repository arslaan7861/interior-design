import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { IProject } from "@/server/DB/ProjectModel";
import { MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";

function ProjectsCard({ project }: { project: IProject }) {
  return (
    <Card
      key={project._id}
      className="group overflow-hidden border-0 shadow-lg pt-0 hover:shadow-2xl transition-all duration-500 scroll-animate transform hover:-translate-y-1"
    >
      <div className="relative overflow-hidden">
        <div className="w-full h-64 relative transition-all duration-700 group-hover:scale-110 group-hover:rotate-1">
          <Image
            src={project.video_url || "/placeholder.svg"}
            alt={project.name}
            className="object-cover"
            fill
          />
        </div>

        <Badge className="absolute top-4 left-4 bg-primary hover:bg-primary/90 animate-pulse">
          New
        </Badge>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-stone-800 mb-2 group-hover:text-primary transition-colors duration-300 relative">
          {project.name}
        </h3>
        <p className="text-stone-600 flex items-center">
          <MapPin className="h-4 w-4 mr-1 group-hover:text-primary transition-colors duration-300" />
          {project.location}
        </p>
        <p className="text-stone-500 text-sm my-2 line-clamp-3">
          {project.description}
        </p>
      </CardContent>
    </Card>
  );
}

export default ProjectsCard;
