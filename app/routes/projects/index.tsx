import { useState } from "react";

import type { Route } from "./+types/index";
import type { Project } from "~/types";

import ProjectCard from "~/components/ProjectCard";
import Pagination from "~/components/Pagination";

import { AnimatePresence, motion } from "framer-motion";

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[] }> {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/projects`);
  const data = await res.json();

  return { projects: data };
}

export default function ProjectPage({ loaderData }: Route.ComponentProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const { projects } = loaderData as { projects: Project[] };

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];

  // Number of projects per page
  const projectsPerPage = 2;

  // Calculate total pages
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  // Get current pages projects
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject,
  );

  return (
    <>
      <h2 className="mb-8 text-2xl font-medium">Projects </h2>

      {/* Category buttons  */}
      <div className="mb-8 flex flex-wrap gap-2.5">
        {categories.map((category) => (
          <button
            key={category}
            className={`flex cursor-pointer items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-200 transition-colors duration-200 active:scale-95 ${selectedCategory === category ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-700 hover:bg-gray-600"}`}
            onClick={() => {
              setSelectedCategory(category);
              setCurrentPage(1);
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <AnimatePresence mode="wait">
        <motion.div layout className="grid gap-8 sm:grid-cols-2">
          {currentProjects.map((project) => (
            <motion.div key={project.id} layout>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Pagination */}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}
