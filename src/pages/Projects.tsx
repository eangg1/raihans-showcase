import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Static Web Karang Taruna",
    desc: "website statis untuk organisasi karang taruna",
    tech: ["html", "css", "javascript"],
    image: "/projects/Karang Taruna RW 05.png",
    github: "https://github.com/eangg1/karangtaruna05serdang",
    demo: "https://karangtaruna05serdang.vercel.app/index.html",
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen px-6 py-6 bg-white dark:bg-gray-950 text-gray-900 dark:text-white">

      {/* Header */}
      <div className="max-w-5xl mx-auto mb-16 text-center">
        <h1 className="text-3xl font-semibold mb-3"> Projects</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          beberapa project yang pernah saya kerjakan
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

        {projects.map((project, i) => (
          <div
            key={i}
            className="border rounded-xl overflow-hidden flex flex-col hover:-translate-y-1 transition dark:border-gray-800"
          >
            {/* Image */}
            <div className="aspect-video overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1 justify-between">

              <div>
                <h3 className="text-lg font-medium mb-2">{project.title}</h3>

                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  {project.desc}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 text-xs mb-4">
                  {project.tech.map((t, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 border rounded-md dark:border-gray-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 text-sm">
                <a
                  href={project.github}
                  className="flex items-center gap-1 hover:underline"
                >
                  <Github size={16} />
                  github
                </a>

                <a
                  href={project.demo}
                  className="flex items-center gap-1 hover:underline"
                >
                  <ExternalLink size={16} />
                  demo
                </a>
              </div>

            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
