import type { Route } from "./+types/index";
import type { Project } from "~/types";
import type { PostMeta } from "~/types";

import FeaturedProject from "~/components/FeaturedProject";
import AboutPreview from "~/components/AboutPreview";
import LatestPost from "~/components/LatestPost";

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[]; posts: PostMeta[] }> {
  const [projectsRes, postsRes] = await Promise.all([
    fetch(`${import.meta.env.VITE_API_URL}/projects`),
    fetch(new URL("/posts-meta.json", request.url)),
  ]);

  if (!projectsRes.ok || !postsRes.ok) throw new Error("Failed to fetch data");

  const [projects, posts] = await Promise.all([
    projectsRes.json(),
    postsRes.json(),
  ]);

  return { projects, posts };
}

export default function HomePage({ loaderData }: Route.ComponentProps) {
  const { projects, posts } = loaderData;
  return (
    <>
      <FeaturedProject projects={projects} count={2} />
      <AboutPreview />
      <LatestPost posts={posts} limit={2} />
    </>
  );
}
