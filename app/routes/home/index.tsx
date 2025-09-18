import type { Route } from "./+types/index";
import type { Project } from "~/types";

import FeaturedProject from "~/components/FeaturedProject";
import AboutPreview from "~/components/AboutPreview";

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[] }> {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/projects`);
  const data = await res.json();
  return { projects: data };
}

export default function HomePage({ loaderData }: Route.ComponentProps) {
  const { projects } = loaderData;
  return (
    <>
      <FeaturedProject projects={projects} count={2} />
      <AboutPreview />
    </>
  );
}
