import { Link } from "react-router";
import type { Project } from "~/types";

export default function ProjectCard({ project }: { project: Project }) {
  const { id, image, title, description, category, date } = project;

  return (
    <Link
      className="block transform transition-transform duration-200 hover:scale-[1.02]"
      to={`/projects/${id}`}
    >
      <div className="overflow-hidden rounded-lg bg-gray-800 shadow-lg">
        <img src={image} alt={title} className="h-48 w-full object-cover" />

        <div className="p-6">
          <h2 className="mb-1 text-xl font-semibold text-blue-600">{title}</h2>
          <p className="mb-3 min-h-12 text-sm text-gray-300">{description}</p>

          <div className="mt-auto flex items-center justify-between font-medium text-gray-400">
            <span className="italic">{category}</span>
            <span className="text-sm">{new Date(date).toDateString()}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
