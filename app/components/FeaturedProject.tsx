import type { Project } from "~/types";
import ProjectCard from "./ProjectCard";

type FeaturedProjectProps = {
  projects: Project[];
  count?: number;
};

export default function FeaturedProject({
  projects,
  count = 4,
}: FeaturedProjectProps) {
  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, count);

  return (
    <section>
      <h2 className="mb-8 text-2xl font-medium">Featured projects</h2>
      <div className="grid gap-8 sm:grid-cols-2">
        {featuredProjects.map((featuredProject) => (
          <ProjectCard key={featuredProject.id} project={featuredProject} />
        ))}
      </div>
    </section>
  );
}
