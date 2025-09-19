type PostSearchProps = {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
};

export default function PostSearch({
  searchQuery,
  setSearchQuery,
}: PostSearchProps) {
  return (
    <div className="mb-6 w-full">
      <input
        type="text"
        placeholder="Search posts..."
        className="w-full rounded-lg bg-gray-800 px-3 py-2 text-gray-100 focus:ring-2 focus:ring-blue-600 focus:outline-none"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}
