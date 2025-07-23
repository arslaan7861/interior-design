import React from "react";

import { IProject } from "@/server/DB/ProjectModel";
import ProjectsCard from "./Cards/projectsCard";

async function Projects({ projects }: { projects: IProject[] }) {
  return (
    <section
      id="projects"
      className="py-20 bg-stone-100"
      aria-label="Completed interior projects"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-4">
            Transformation Stories
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Witness the magic of our interior transformations
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          role="list"
          aria-label="Project gallery"
        >
          {projects.map((project) => (
            <article key={project._id} role="listitem">
              <ProjectsCard project={project} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
