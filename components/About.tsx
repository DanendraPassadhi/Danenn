import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Video, Camera } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    {
      icon: Code2,
      title: "Programming",
      description: "JavaScript, PHP, Java, Dart, Laravel, FLutter, React JS",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Code2,
      title: "Machine Learning",
      description: "Python, Jupyter, TensorFlow, Keras, Scikit-Learn, Pandas, CV2, etc.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Palette,
      title: "Design",
      description: "Figma, Canva, Adobe Photoshop",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Camera,
      title: "Photography & Videography",
      description: "Lightroom, Snapseed, Capcut, Premiere Pro,",
      color: "from-orange-500 to-red-500",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 bg-secondary/10" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl sm:text-5xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            About Me
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-2xl"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1698919585693-191c51b66cde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBwcm9ncmFtbWluZ3xlbnwxfHx8fDE3NjAwMTA3NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Developer workspace"
                className="relative rounded-2xl w-full h-[400px] object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h3 className="text-3xl mb-4">Passionate IT Student & Developer</h3>
            <p className="text-foreground/80 leading-relaxed">
              I'm a dedicated IT student with a passion for creating innovative
              solutions through code. Currently pursuing my degree in Computer
              Science, I specialize in Web development with a focus on
              modern web technologies.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              I'm currently learning Machine Learning and have a strong interest
              in this field. Beyond coding, I also enjoy design, photography, and 
              videography, which help me bring creative perspectives to my technical 
              work. I also explore new technologies or contribute to open-source projects.
            </p>
            <motion.div
              className="flex flex-wrap gap-2 pt-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              {[
                "JavaScript",
                "PHP",
                "React JS",
                "Laravel",
                "Python",
                "Flutter",
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1 bg-primary/10 text-foreground/90 rounded-full text-sm"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.1, backgroundColor: "var(--primary)" }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              variants={item}
              className="group relative bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}
              />
              <motion.div
                className={`w-12 h-12 bg-gradient-to-br ${skill.color} rounded-lg flex items-center justify-center mb-4`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <skill.icon className="text-white" size={24} />
              </motion.div>
              <h4 className="text-lg mb-2">{skill.title}</h4>
              <p className="text-sm text-foreground/70">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
