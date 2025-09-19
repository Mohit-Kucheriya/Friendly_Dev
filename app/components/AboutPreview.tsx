import { Link } from "react-router";
import { TiArrowForwardOutline } from "react-icons/ti";

export default function AboutPreview() {
  return (
    <section className="mt-12 flex flex-col items-center gap-8 rounded-lg bg-gray-900 px-6 py-12 shadow-lg md:flex-row">
      <img
        src="/images/profile.jpg"
        alt="Profile Image"
        className="h-32 w-32 rounded-full border-4 border-blue-600 object-cover"
      />
      <div>
        <h3 className="mb-3 text-2xl font-medium">About me</h3>
        <p className="mb-4 max-w-4xl text-lg text-gray-300">
          I’m a passionate frontend developer focused on crafting clean,
          responsive, and user-friendly web experiences.
        </p>
        <Link
          to="/about"
          className="flex items-center text-blue-600 transition-colors duration-200 hover:text-blue-700"
        >
          Learn more <TiArrowForwardOutline className="ml-2 text-lg" />
        </Link>
      </div>
    </section>
  );
}
