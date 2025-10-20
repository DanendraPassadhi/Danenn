import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState<"all" | "github" | "dribbble">("all");

  // Base URL for production (GitHub Pages)
  const baseUrl = "/Danenn/";

  const projects = [
    {
      id: 1,
      title: "Techno Rules",
      description:
        "The student code of conduct information system for Information Technology students was developed through project-based learning as a final campus assignment.",
      image: `${baseUrl}technorules.jpg`,
      tags: [
        "Team Project",
        "PHP",
        "SQL Server",
        "Tailwind",
        "JQuery",
        "Figma",
      ],
      github: "https://github.com/a6iyyu/tatib",
      demo: null,
      type: "github" as const,
      stars: 1,
      forks: 3,
    },
    {
      id: 2,
      title: "Simapres",
      description:
        " A web-based information system designed to manage and monitor students' academic and non-academic achievements.",
      image: `${baseUrl}simapres.png`,
      tags: [
        "Team Project",
        "PHP",
        "Laravel",
        "MySql",
        "Bootstrap",
        "JQuery",
        "Figma",
      ],
      github: "https://github.com/anugerahhrama/simapres-app",
      demo: null,
      type: "github" as const,
      stars: 1,
      forks: 2,
    },
    {
      id: 3,
      title: "Sawit-Track Web App",
      description: "- Soon -",
      image: `${baseUrl}sawit.png`,
      tags: [
        "Team Project",
        "React.js",
        "Flutter",
        "Dart",
        "Firebase",
        "Figma",
      ],
      github: null,
      demo: null,
      type: "github" as const,
      stars: 3,
      forks: 3,
    },
    {
      id: 4,
      title: "UI Design of Lastfoods",
      description: "Lastfoods is anti waste food delivery app.",
      image: `${baseUrl}lastfoods.jpg`,
      tags: ["Figma"],
      github: null,
      demo: "https://www.figma.com/proto/9NxmBfAIUgl0c9zhWznHk6/Lastfoods?node-id=1239-3983&t=tfUs0UQvzmSkXK1E-1&scaling=scale-down&content-scaling=fixed&page-id=4%3A6&starting-point-node-id=1239%3A3983&show-proto-sidebar=1",
      type: "dribbble" as const,
      stars: null,
      forks: null,
    },
    {
      id: 5,
      title: "UI Design of Sentinel Apps",
      description:
        "Sentinel is a mobile notification app for natural disasters.",
      image: `${baseUrl}sentinel.png`,
      tags: ["Team Project", "Figma"],
      github: null,
      demo: "https://www.figma.com/proto/RXD1W2Sb3PDdajfD9rHxNM/Sentinel?node-id=257-11478&p=f&t=PMsYOYBjbywzKSv3-1&scaling=scale-down&content-scaling=fixed&page-id=256%3A2831&starting-point-node-id=257%3A11478&show-proto-sidebar=1",
      type: "dribbble" as const,
      stars: null,
      forks: null,
    },
    {
      id: 6,
      title: "UI Design of Web Zernia",
      description: "Zernia is an tracking electricty for home.",
      image: `${baseUrl}zernia.png`,
      tags: ["Team Project", "Figma"],
      github: null,
      demo: "https://www.figma.com/proto/0JE02aEBu4inz5dprjSiYQ/TFS?node-id=2180-5151&p=f&t=mEt3WTPoLFKaksHK-1&scaling=scale-down&content-scaling=fixed&page-id=1%3A9&starting-point-node-id=2180%3A5151&show-proto-sidebar=1",
      type: "dribbble" as const,
      stars: 92,
      forks: 27,
    },
  ];

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    return project.type === filter;
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-20 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-4">Featured Projects</h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto mb-8"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
          <p className="text-foreground/70 max-w-2xl mx-auto mb-8">
            A collection of my recent work showcasing various technologies and
            design approaches
          </p>

          {/* Filter Buttons */}
          <motion.div
            className="flex items-center justify-center gap-4 flex-wrap"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            {[
              { label: "All Projects", value: "all" as const },
              { label: "GitHub", value: "github" as const },
              { label: "Dribbble", value: "dribbble" as const },
            ].map((btn) => (
              <motion.button
                key={btn.value}
                onClick={() => setFilter(btn.value)}
                className={`px-6 py-2 rounded-lg transition-all ${
                  filter === btn.value
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground border border-border"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {btn.label}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={item}
              layout
              className="group relative bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300"
              whileHover={{ y: -10 }}
            >
              <div className="relative h-48 overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 opacity-60"
                  whileHover={{ opacity: 0.8 }}
                />
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <motion.div
                  className="absolute top-4 right-4 z-20 flex gap-2"
                  initial={{ opacity: 1, x: 20 }}
                  whileHover={{ opacity: 1, x: 0 }}
                >
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-background/90 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={20} />
                    </motion.a>
                  )}
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-background/90 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  )}
                </motion.div>
              </div>

              <div className="p-6">
                <h3 className="text-xl mb-2">{project.title}</h3>
                <p className="text-sm text-foreground/70 mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex items-center gap-4 mb-4 text-sm text-foreground/60">
                  <span className="flex items-center gap-1">
                    <Star size={16} />
                    {project.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork size={16} />
                    {project.forks}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-primary/10 text-foreground/80 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-foreground/60 py-12"
          >
            No projects found for this filter.
          </motion.p>
        )}
      </div>
    </section>
  );
}
