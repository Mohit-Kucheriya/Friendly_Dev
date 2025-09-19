import type { Route } from "./+types/details";
import type { PostMeta } from "~/types";

import { Link } from "react-router";
import { TiArrowBackOutline } from "react-icons/ti";
import ReactMarkdown from "react-markdown";

export async function loader({ request, params }: Route.LoaderArgs) {
  const { slug } = params;

  const url = new URL("/posts-meta.json", request.url);

  const res = await fetch(url.href);
  if (!res.ok) throw new Error("Failed to fetch posts meta data");

  const data = await res.json();
  const postMeta = data.find((post: PostMeta) => post.slug === slug);

  if (!postMeta)
    throw new Response(`Post not found with slug ${slug}`, { status: 404 });

  // Dynamically import the raw markdown file
  const markdown = await import(`../../posts/${slug}.md?raw`);

  return { postMeta, markdown: markdown.default };
}

export default function BlogPostDetailsPage({
  loaderData,
}: Route.ComponentProps) {
  const { postMeta, markdown } = loaderData as {
    postMeta: PostMeta;
    markdown: string;
  };
  return (
    <div className="mx-auto max-w-4xl rounded-lg bg-gray-900 px-6 py-12 shadow-lg">
      <h2 className="mb-3 text-3xl font-semibold text-blue-600">
        {postMeta.title}
      </h2>
      <span className="mb-4 inline-block text-sm font-medium text-gray-400">
        Published on {new Date(postMeta.date).toDateString()}
      </span>
      <div className="prose prose-invert mb-12 max-w-none">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
      <div className="flex items-center">
        <Link
          to="/blog"
          className="flex items-center rounded-lg bg-blue-600 px-4 py-2 transition-colors duration-200 ease-in hover:bg-blue-700 focus:outline-none"
        >
          <TiArrowBackOutline className="mr-2 text-lg" /> Back to Post
        </Link>
      </div>
    </div>
  );
}
