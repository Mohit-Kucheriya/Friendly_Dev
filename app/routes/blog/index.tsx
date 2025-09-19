import { useState } from "react";

import type { Route } from "./+types/index";
import type { PostMeta } from "~/types";

import PostCard from "~/components/PostCard";
import Pagination from "~/components/Pagination";
import PostSearch from "~/components/PostSearch";

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ posts: PostMeta[] }> {
  const url = new URL("/posts-meta.json", request.url);

  const res = await fetch(url.href);
  if (!res.ok) throw new Error("Failed to fetch posts meta data");

  const data = await res.json();
  data.sort(
    (a: PostMeta, b: PostMeta) =>
      new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return { posts: data };
}

export default function BlogPage({ loaderData }: Route.ComponentProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const { posts } = loaderData as { posts: PostMeta[] };

  const filteredSearchPosts = posts.filter((post) => {
    const query = searchQuery.toLowerCase();
    return (
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query)
    );
  });

  const postPerPage = 2;
  const totalPages = Math.ceil(filteredSearchPosts.length / postPerPage);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;

  const currentPosts = filteredSearchPosts.slice(
    indexOfFirstPost,
    indexOfLastPost,
  );

  function handleSearch(value: string) {
    setSearchQuery(value);
    setCurrentPage(1);
  }

  return (
    <div className="mx-auto max-w-4xl rounded-lg bg-gray-900 px-6 py-12 shadow-lg">
      <h2 className="mb-8 text-2xl font-medium">📝 Blog</h2>

      <PostSearch searchQuery={searchQuery} setSearchQuery={handleSearch} />

      <div className="space-y-8">
        {currentPosts.length === 0 ? (
          <p className="text-lg font-medium text-gray-400">
            No posts found X﹏X
          </p>
        ) : (
          currentPosts.map((post) => <PostCard key={post.slug} post={post} />)
        )}
      </div>

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
