import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-secondary/20"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <motion.span
            className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-foreground/80"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            👋 Welcome to my portfolio
          </motion.span>
        </motion.div>

        <motion.h1
          className="mb-6 text-5xl sm:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hi, I'm{" "}
          <motion.span
            className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            Danendra Nayaka Passadhi
          </motion.span>
        </motion.h1>

        <motion.p
          className="mb-8 text-xl sm:text-2xl text-foreground/70 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          IT Student and Tech Enthusiast, 
          passionate about building exceptional digital experiences, with a current focus on Machine Learning.
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a
            href="#projects"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg border border-border"
            whileHover={{ scale: 1.05, borderColor: "var(--primary)" }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get In Touch
          </motion.a>
        </motion.div>

        <motion.div
          className="flex items-center justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { icon: Github, href: "https://github.com/DanendraPassadhi", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/danendra-nayaka-passadhi/", label: "LinkedIn" },
            { icon: Mail, href: "mailto:danendra.passadhi71@gamil.com", label: "Email" },
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-foreground transition-colors"
              whileHover={{ y: -5, scale: 1.1 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.1 }}
            >
              <social.icon size={24} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.button
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-foreground/60"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={scrollToAbout}
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
}
