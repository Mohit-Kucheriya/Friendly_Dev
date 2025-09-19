import type { PostMeta } from "~/types";
import { Link } from "react-router";
import { TiArrowForwardOutline } from "react-icons/ti";

export default function PostCard({ post }: { post: PostMeta }) {
  const { title, excerpt, slug, date } = post;

  return (
    <article className="mb-4 rounded-lg bg-gray-800 p-4 shadow-lg">
      <h3 className="mb-2 text-xl font-semibold text-blue-600">{title}</h3>
      <p className="mb-4 text-sm text-gray-300">{excerpt}</p>
      <div className="flex items-center justify-between">
        <Link
          to={`/blog/${slug}`}
          className="flex items-center text-blue-600 transition-colors duration-200 hover:text-blue-700"
        >
          Learn more <TiArrowForwardOutline className="ml-2 text-lg" />
        </Link>
        <span className="text-sm font-medium text-gray-400">
          {new Date(date).toDateString()}
        </span>
      </div>
    </article>
  );
}
