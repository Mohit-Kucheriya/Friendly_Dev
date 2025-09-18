export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl rounded-lg bg-gray-900 px-6 py-12 shadow-lg">
      <div className="mb-12 flex flex-col items-center justify-center gap-8 md:flex-row">
        <img
          src="/images/profile.jpg"
          alt="Profile Image"
          className="h-40 w-40 rounded-full border-4 border-blue-600 object-cover"
        />
        <div>
          <h1 className="mb-4 text-3xl font-medium">hey I'm Mohit 👋 </h1>
          <p className="mx-auto mb-6 max-w-xl text-justify text-lg text-gray-300">
            I’m a passionate frontend developer focused on crafting clean,
            responsive, and user-friendly web experiences. Currently diving deep
            into React and modern UI frameworks, I’m dedicated to building
            scalable applications while constantly improving my problem-solving
            and coding skills.
          </p>
        </div>
      </div>

      <div className="mb-12">
        <h3 className="mb-3 text-2xl font-medium">🔑 What Drives Me</h3>
        <p className="text-justify text-sm tracking-wide text-gray-300 italic">
          I believe in growing a little every day — whether it’s sharpening my
          skills as a developer, staying consistent in fitness, or grounding
          myself through spirituality. My purpose is simple: to stay
          disciplined, keep learning, and create something meaningful with the
          knowledge I gain
        </p>
      </div>
      <div className="">
        <h3 className="mb-3 text-2xl font-medium">🚀 Tech Stack</h3>
        <ul className="flex flex-wrap gap-2.5">
          {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"].map(
            (tech) => (
              <li
                key={tech}
                className="mb-2 flex items-center justify-center rounded-md bg-gray-700 px-4 py-2 text-sm font-medium text-gray-200 transition-colors duration-200"
              >
                {tech}
              </li>
            ),
          )}
        </ul>
      </div>
    </div>
  );
}
