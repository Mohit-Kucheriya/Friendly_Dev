import { Link } from "react-router";
import type { Route } from "./+types/details";
import type { Project } from "~/types";
import { TiArrowBackOutline, TiArrowForwardOutline } from "react-icons/ti";

export async function clientLoader({
  request,
  params,
}: Route.ClientLoaderArgs): Promise<Project> {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/projects/${params.id}`,
  );
  if (!res.ok)
    throw new Response(`Project not found with id ${params.id} `, {
      status: 404,
    });

  const project: Project = await res.json();
  return project;
}

export function HydrateFallback() {
  return <div className="text-center text-xl font-medium">Loading...</div>;
}

export default function ProjectDetails({ loaderData }: Route.ComponentProps) {
  const project = loaderData;

  return (
    <>
      <Link
        to="/projects"
        className="mb-8 flex items-center text-blue-600 transition-colors duration-200 hover:text-blue-700"
      >
        <TiArrowBackOutline className="mr-2 text-lg" /> Back to Projects
      </Link>
      <div className="grid items-start gap-8 md:grid-cols-2">
        <div className="overflow-hidden rounded-lg">
          <img src={project.image} alt={project.title} className="w-full" />
        </div>
        <div>
          <h2 className="mb-3 text-3xl font-semibold text-blue-600">
            {project.title}
          </h2>
          <p className="mb-5 text-lg text-gray-300">{project.description}</p>
          <div className="mb-6 flex items-center gap-4 font-medium text-gray-400">
            <span className="italic">{project.category}</span>
            <span>•</span>
            <span className="">{new Date(project.date).toDateString()}</span>
          </div>
          <div className="flex items-center">
            <a
              href={project.url}
              className="flex items-center rounded-lg bg-blue-600 px-4 py-2 transition-colors duration-200 ease-in hover:bg-blue-700 focus:outline-none"
              target="_blank"
            >
              View Live <TiArrowForwardOutline className="ml-2 text-lg" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
