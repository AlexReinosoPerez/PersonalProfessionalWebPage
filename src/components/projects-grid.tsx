import { projects } from "@/data/projects";
import ProjectCard from "./project-card";

export default function ProjectsGrid() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  );
}
