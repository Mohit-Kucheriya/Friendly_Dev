import { Link } from "react-router";

export default function Hero({
  name = "[NAME]",
  description = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius veritatis officiis nisi, eaque nostrum repudiandae aliquam harum explicabo nobis?",
}) {
  return (
    <header className="rounded-lg bg-gray-900 px-6 py-20 text-center shadow-lg">
      <h2 className="mb-4 text-2xl font-medium">hey I'm {name} 👋</h2>
      <p className="mx-auto mb-6 max-w-2xl text-lg text-gray-300">
        {description}
      </p>
      <div className="flex justify-center gap-4">
        <Link
          to="/projects"
          className="rounded-lg bg-blue-600 px-4 py-2 transition-colors duration-200 ease-in hover:bg-blue-700 focus:outline-none"
        >
          Projects
        </Link>
        <Link
          to="/contact"
          className="rounded-lg border-2 border-blue-600 px-4 py-2 transition-colors duration-200 ease-in hover:bg-blue-600 focus:outline-none"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
