import { Link } from "react-router";
import { TiArrowBackOutline } from "react-icons/ti";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h2 className="mb-4 text-6xl font-semibold text-blue-600">404</h2>
      <h3 className="mb-2 text-xl font-medium text-gray-200">
        Page not found X﹏X
      </h3>
      <p className="mb-6 max-w-md text-lg text-gray-400">
        The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="flex items-center text-blue-600 transition-colors duration-200 hover:text-blue-700"
      >
        <TiArrowBackOutline className="mr-2 inline-block text-lg" /> Back to
        Home
      </Link>
    </div>
  );
}
