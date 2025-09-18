type PaginationProps = {
  totalPages: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
};

export default function Pagination({
  totalPages,
  currentPage,
  setCurrentPage,
}: PaginationProps) {
  if (totalPages <= 1) return null;
  return (
    <div className="mt-8 flex justify-center gap-2.5">
      {Array.from({ length: totalPages }, (_, idx) => (
        <button
          key={idx + 1}
          onClick={() => setCurrentPage(idx + 1)}
          className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-md text-sm font-medium text-gray-200 transition-colors duration-200 active:scale-95 ${
            currentPage === idx + 1
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-gray-700 hover:bg-gray-600"
          }`}
        >
          {idx + 1}
        </button>
      ))}
    </div>
  );
}
