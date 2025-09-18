type InputProps = {
  name: string;
  label: string;
  type: "text" | "email" | "textarea";
  error?: string;
};

export default function Input({
  name,
  label,
  type,
  error,
  ...rest
}: InputProps) {
  const inputType =
    type === "textarea" ? (
      <textarea
        name={name}
        id={name}
        className="w-full resize-none rounded-lg bg-gray-800 px-3 py-4 font-medium text-gray-200 focus:outline-none"
        {...rest}
      />
    ) : (
      <input
        type={type}
        name={name}
        id={name}
        className="w-full rounded-lg bg-gray-800 px-3 py-2 font-medium text-gray-200 focus:outline-none"
        {...rest}
      />
    );

  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-lg font-medium text-gray-400"
      >
        {label}
      </label>
      {inputType}
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}
