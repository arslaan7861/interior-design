"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TabsContent } from "@/components/ui/tabs";

import { Edit, Trash2, Video } from "lucide-react";
import AddProjectForm from "../forms/AddProjectForm";

interface Project {
  id: number;
  title: string;
  location: string;
  beforeImages: string[];
  afterImages: string[];
  videos: string[];
  category: string;
  description: string;
  completedAt: string;
  clientName: string;
}

function Projects() {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      title: "Modern Penthouse",
      location: "Manhattan, NY",
      beforeImages: ["/placeholder.svg?height=200&width=300"],
      afterImages: ["/placeholder.svg?height=200&width=300"],
      videos: [],
      category: "Modern",
      description: "Complete renovation of luxury penthouse",
      completedAt: "2024-01-20",
      clientName: "John Smith",
    },
  ]);

  const deleteProject = (id: number) => {
    setProjects(projects.filter((item) => item.id !== id));
  };

  return (
    <TabsContent value="projects" className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-stone-800">
            Project Management
          </h2>
          <p className="text-stone-600">
            Manage your completed interior design projects
          </p>
        </div>
        <AddProjectForm />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="group">
            <CardContent className="p-4">
              <div className="relative mb-4">
                <div className="grid grid-cols-2 gap-2 mb-2">
                  <div>
                    <p className="text-xs text-stone-500 mb-1">
                      Before ({project.beforeImages.length})
                    </p>
                    <div className="grid grid-cols-2 gap-1">
                      {project.beforeImages.slice(0, 2).map((image, index) => (
                        <img
                          key={index}
                          src={image || "/placeholder.svg"}
                          alt={`${project.title} - Before ${index + 1}`}
                          className="w-full h-16 object-cover rounded"
                        />
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-stone-500 mb-1">
                      After ({project.afterImages.length})
                    </p>
                    <div className="grid grid-cols-2 gap-1">
                      {project.afterImages.slice(0, 2).map((image, index) => (
                        <img
                          key={index}
                          src={image || "/placeholder.svg"}
                          alt={`${project.title} - After ${index + 1}`}
                          className="w-full h-16 object-cover rounded"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                {project.videos.length > 0 && (
                  <div className="flex items-center gap-2 text-xs text-stone-500">
                    <Video className="h-3 w-3" />
                    <span>
                      {project.videos.length} video
                      {project.videos.length > 1 ? "s" : ""}
                    </span>
                  </div>
                )}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex space-x-1">
                    <Button size="sm" variant="secondary">
                      <Edit className="h-3 w-3" />
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => deleteProject(project.id)}
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold text-stone-800">
                    {project.title}
                  </h3>
                  <Badge>{project.category}</Badge>
                </div>
                <p className="text-sm text-stone-600">{project.location}</p>
                <p className="text-xs text-stone-500">{project.description}</p>
                <div className="flex justify-between items-center pt-2 text-xs text-stone-500">
                  <span>Client: {project.clientName}</span>
                  <span>Completed: {project.completedAt}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </TabsContent>
  );
}

export default Projects;
