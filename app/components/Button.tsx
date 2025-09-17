export default function Button({ children, type, onClick, condition }: any) {
  const base = `flex cursor-pointer items-center justify-center rounded-md  text-sm font-medium text-gray-200 transition-colors duration-200 active:scale-95 ${condition ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-700 hover:bg-gray-600"}`;

  const pagination = `h-10 w-10 ${base}`;
  const category = `px-4 py-2 ${base}`;

  return (
    <button
      type={type}
      onClick={onClick}
      className={type === "pagination" ? `${pagination}` : `${category}`}
    >
      {children}
    </button>
  );
}
