import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Github,
  ExternalLink,
  Star,
  GitFork,
  Figma,
  Compass,
} from "lucide-react";
import { FigmaModal } from "./FigmaModal";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [filter, setFilter] = useState<
    "discover" | "all" | "github" | "dribbble"
  >("discover");

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
        "Figma",
      ],
      github: "https://github.com/a6iyyu/tatib",
      demo: null,
      figma: null,
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
        "Figma",
      ],
      github: "https://github.com/anugerahhrama/simapres-app",
      demo: null,
      figma: null,
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
        "MongoDB",
        "Firebase",
        "Figma",
      ],
      github: null,
      demo: null,
      figma: null,
      type: "github" as const,
      stars: 3,
      forks: 3,
    },
    {
      id: 4,
      title: "UI Design of Lastfoods Apps",
      description: "Lastfoods is anti waste food delivery app.",
      image: `${baseUrl}lastfoods.jpg`,
      tags: ["Figma"],
      github: null,
      demo: null,
      figma:
        "https://www.figma.com/proto/9NxmBfAIUgl0c9zhWznHk6/Lastfoods?node-id=1239-3983&t=tfUs0UQvzmSkXK1E-1&scaling=scale-down&content-scaling=fixed&page-id=4%3A6&starting-point-node-id=1239%3A3983&show-proto-sidebar=1",
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
      figma:
        "https://www.figma.com/proto/RXD1W2Sb3PDdajfD9rHxNM/Sentinel?node-id=257-11478&p=f&t=PMsYOYBjbywzKSv3-1&scaling=scale-down&content-scaling=fixed&page-id=256%3A2831&starting-point-node-id=257%3A11478&show-proto-sidebar=1",
      demo: null,
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
      figma:
        "https://www.figma.com/proto/0JE02aEBu4inz5dprjSiYQ/TFS?node-id=2180-5151&p=f&t=mEt3WTPoLFKaksHK-1&scaling=scale-down&content-scaling=fixed&page-id=1%3A9&starting-point-node-id=2180%3A5151&show-proto-sidebar=1",
      demo: null,
      type: "dribbble" as const,
      stars: null,
      forks: null,
    },
    {
      id: 7,
      title: "UI Design of KoopVerse Apps",
      description: "KoopVerse.",
      image: `${baseUrl}koopverse.png`,
      tags: ["Figma"],
      github: null,
      figma:
        "https://www.figma.com/proto/0JE02aEBu4inz5dprjSiYQ/TFS?node-id=2180-5151&p=f&t=mEt3WTPoLFKaksHK-1&scaling=scale-down&content-scaling=fixed&page-id=1%3A9&starting-point-node-id=2180%3A5151&show-proto-sidebar=1",
      demo: null,
      type: "dribbble" as const,
      stars: null,
      forks: null,
    },
    {
      id: 8,
      title: "UI Design of Aksara Apps",
      description: "Aksara is interactive storytelling and literacy applications based on gamification and artificial intelligence to improve literacy and support quality education.",
      image: `${baseUrl}aksara.jpg`,
      tags: ["Figma"],
      github: null,
      figma:
        "https://www.figma.com/design/2cAjBtlTHMkycYIK3Kz4VD/Aksara?node-id=1-4&t=lbtxptjdmkqNr3gd-1",
      demo: null,
      type: "dribbble" as const,
      stars: null,
      forks: null,
    },
    {
      id: 9,
      title: "UI Design of E-Publising Apps",
      description: "E-Publising is an application for publishing books online.",
      image: `${baseUrl}e-publishing.png`,
      tags: ["Team Project", "Figma"],
      github: null,
      figma: "https://www.figma.com/proto/SVu5N3P8zfCI4pYabcMrD9/E-Publishing?node-id=6-700&p=f&t=8kL6OcUCP3vdNGPL-1&scaling=scale-down&content-scaling=fixed&page-id=2%3A103&starting-point-node-id=6%3A700&show-proto-sidebar=1",
      demo: null,
      type: "dribbble" as const,
      stars: null,
      forks: null,
    },
    {
      id: 10,
      title: "Anomali Discord Bot",
      description:
        "A Discord bot that integrates the Google Gemini API to provide generative AI capabilities.",
      image: `${baseUrl}anomaliBot.png`,
      tags: ["Discord Bot", "JavaScript", "Node.js", "Google Gemini API"],
      github: "https://github.com/DanendraPassadhi/Anomali-Bot",
      figma: null,
      demo: "https://discord.com/oauth2/authorize?client_id=1435569513159458956",
      type: "github" as const,
      stars: null,
      forks: null,
    },
    {
      id: 11,
      title: "Vero Discord Bot",
      description:
        "A MongoDB-powered work management Discord bot to create daily checklists, set reminders, and ensure an efficient workflow.",
      image: `${baseUrl}veroBot.png`,
      tags: ["Discord Bot", "Python", "MongoDB"],
      github: "https://github.com/DanendraPassadhi/Vero-Bot",
      figma: null,
      demo: "https://discord.com/oauth2/authorize?client_id=1438023516396982422",
      type: "github" as const,
      stars: null,
      forks: null,
    },
  ];

  // Inline Dribbble icon (small, no external dependency)
  const DribbbleIcon = ({ size = 16 }: { size?: number }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="currentColor"
      className="bi bi-dribbble"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8c4.408 0 8-3.584 8-8s-3.592-8-8-8m5.284 3.688a6.8 6.8 0 0 1 1.545 4.251c-.226-.043-2.482-.503-4.755-.217-.052-.112-.096-.234-.148-.355-.139-.33-.295-.668-.451-.99 2.516-1.023 3.662-2.498 3.81-2.69zM8 1.18c1.735 0 3.323.65 4.53 1.718-.122.174-1.155 1.553-3.584 2.464-1.12-2.056-2.36-3.74-2.551-4A7 7 0 0 1 8 1.18m-2.907.642A43 43 0 0 1 7.627 5.77c-3.193.85-6.013.833-6.317.833a6.87 6.87 0 0 1 3.783-4.78zM1.163 8.01V7.8c.295.01 3.61.053 7.02-.971.199.381.381.772.555 1.162l-.27.078c-3.522 1.137-5.396 4.243-5.553 4.504a6.82 6.82 0 0 1-1.752-4.564zM8 14.837a6.8 6.8 0 0 1-4.19-1.44c.12-.252 1.509-2.924 5.361-4.269.018-.009.026-.009.044-.017a28.3 28.3 0 0 1 1.457 5.18A6.7 6.7 0 0 1 8 14.837m3.81-1.171c-.07-.417-.435-2.412-1.328-4.868 2.143-.338 4.017.217 4.251.295a6.77 6.77 0 0 1-2.924 4.573z"
      />
    </svg>
  );

  const filteredProjects = projects.filter((project) => {
    if (filter === "discover") return project.id >= 1 && project.id <= 6;
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
    <>
      <section
        id="projects"
        className="py-20 bg-background snap-start snap-always"
        ref={ref}
      >
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
                {
                  label: "Discover",
                  value: "discover" as const,
                  icon: Compass,
                },
                { label: "All Projects", value: "all" as const, icon: null },
                { label: "GitHub", value: "github" as const, icon: null },
                { label: "Dribbble", value: "dribbble" as const, icon: null },
              ].map((btn) => (
                <motion.button
                  key={btn.value}
                  onClick={() => setFilter(btn.value)}
                  className={`px-6 py-2 rounded-lg transition-all transition-smooth group flex items-center gap-2 ${
                    filter === btn.value
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground border border-border"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {btn.icon && <btn.icon size={18} />}
                  <span className="font-medium">{btn.label}</span>
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
                className="group relative bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 will-change-transform card-glow"
                whileHover={{ y: -12, rotate: -1, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
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
                  {/* Hover preview CTA (appears when hovering the card) */}
                  <div className="absolute left-4 right-4 bottom-4 z-30 pointer-events-none">
                    <div className="flex items-center justify-between opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-auto">
                      <div className="flex items-center gap-2">
                        {project.figma && (
                          <button
                            onClick={() => setPreviewUrl(project.figma)}
                            type="button"
                            title="Open Figma preview"
                            className="inline-flex items-center gap-2 px-3 py-1 bg-background/90 rounded-full text-sm font-medium shadow-md hover:bg-primary/95 hover:text-primary-foreground transition-colors cta-shadow interactive-glow"
                          >
                            <Figma size={14} />
                            Preview
                          </button>
                        )}
                      </div>
                      {/* End of Selection */}
                    </div>
                  </div>
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
                        title={
                          String(project.type) === "dribbble"
                            ? "Open on Dribbble"
                            : "Open demo"
                        }
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {String(project.type) === "dribbble" ? (
                          <DribbbleIcon size={20} />
                        ) : (
                          <ExternalLink size={20} />
                        )}
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
                    {project.stars !== null && (
                      <span className="flex items-center gap-1">
                        <Star size={16} />
                        {project.stars}
                      </span>
                    )}
                    {project.forks !== null && (
                      <span className="flex items-center gap-1">
                        <GitFork size={16} />
                        {project.forks}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-primary/10 text-foreground/80 rounded text-xs flex items-center gap-1"
                      >
                        {tag === "Figma" && <Figma size={14} />}
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
      <FigmaModal
        open={!!previewUrl}
        url={previewUrl}
        onClose={() => setPreviewUrl(null)}
      />
    </>
  );
}
