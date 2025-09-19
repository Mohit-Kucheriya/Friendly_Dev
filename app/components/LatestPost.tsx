import { Link } from "react-router";
import type { PostMeta } from "~/types";

type LatestPostProps = {
  posts: PostMeta[];
  limit?: number;
};

export default function LatestPost({ posts, limit = 3 }: LatestPostProps) {
  const filteredLatesDatePosts = posts
    .sort(
      (a: PostMeta, b: PostMeta) =>
        new Date(b.date).getTime() - new Date(a.date).getTime(),
    )
    .slice(0, limit);

  return (
    <section className="mt-12">
      <h2 className="mb-8 text-2xl font-medium">🆕 Latest Post</h2>
      <div className="grid gap-8 sm:grid-cols-2">
        {filteredLatesDatePosts.map((post) => (
          <Link
            to={`/blog/${post.slug}`}
            className="block rounded-lg bg-gray-900 p-6 shadow-lg"
            key={post.slug}
          >
            <h3 className="mb-2 text-xl font-semibold text-blue-600">
              {post.title}
            </h3>
            <p className="mb-4 min-h-12 text-sm text-gray-300">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-end">
              <span className="mt-auto inline-block text-sm font-medium text-gray-400">
                {new Date(post.date).toDateString()}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
