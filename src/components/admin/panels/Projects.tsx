import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TabsContent } from "@/components/ui/tabs";

import { MapPin } from "lucide-react";
import AddProjectForm from "../forms/AddProjectForm";
import Image from "next/image";
import { IProject, ProjectModel } from "@/server/DB/ProjectModel";
import { ObjectId } from "mongoose";
import DeleteProjectButton from "../buttons/ProjectDelete";
import connectDb from "@/server/DB";

async function Projects() {
  await connectDb();
  const dbProjects = await ProjectModel.find().lean();
  const projects = dbProjects.map(
    ({ _id, createdAt, updatedAt, __v, ...rest }) => {
      return {
        ...rest,
        _id: (_id as ObjectId).toString(),
      };
      console.log(createdAt, updatedAt, __v);
    }
  ) as IProject[];

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
                <div className="absolute top-0 right-4">
                  <DeleteProjectButton item={project} />
                </div>
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
        ))}
      </div>
    </TabsContent>
  );
}

export default Projects;
