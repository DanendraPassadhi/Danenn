import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { useRef, useState, useEffect } from "react";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [greeting, setGreeting] = useState("Hi");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const greetings = [
    "Hi",
    "Halo",
    "おはよう",
    "你好",
    "مرحبا",
    "Ciao",
    "Привет",
  ];

  // rotate through the original greetings (keep versi awal for 'halo')
  useEffect(() => {
    const interval = setInterval(() => {
      setGreeting((prev) => {
        const currentIndex = greetings.indexOf(prev);
        const nextIndex = (currentIndex + 1) % greetings.length;
        return greetings[nextIndex];
      });
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  // Mouse follow effect for background
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    ref.current?.addEventListener("mousemove", handleMouseMove);
    return () => ref.current?.removeEventListener("mousemove", handleMouseMove);
  }, []);

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-secondary/20 snap-start snap-always"
    >
      {/* Interactive gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Mouse-follow glow effect */}
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x - 192,
            y: mousePosition.y - 192,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
          style={{ pointerEvents: "none" }}
        />

        {/* Animated background orbs */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 30, 0],
            y: [0, -30, 0],
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
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Animated grid background */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-30" />
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
          <motion.span
            key={greeting}
            className={`inline-block px-3 py-1 text-primary font-semibold`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            {greeting}
          </motion.span>
          , I'm{" "}
          <motion.span className="text-foreground font-semibold">
            Danendra Nayaka Passadhi
          </motion.span>
        </motion.h1>

        <motion.p
          className="mb-8 text-xl sm:text-2xl text-foreground/70 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          IT Student and Tech Enthusiast, passionate about building exceptional
          digital experiences, with a current focus on Software Development and Machine Learning.
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a
            href="#projects"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold transition-smooth"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 40px rgba(3, 2, 19, 0.3)",
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
            className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg border-2 border-primary/30 font-semibold hover:border-primary transition-colors transition-smooth"
            whileHover={{
              scale: 1.05,
              borderColor: "var(--primary)",
              backgroundColor: "rgba(3, 2, 19, 0.1)",
            }}
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
            {
              icon: Github,
              href: "https://github.com/DanendraPassadhi",
              label: "GitHub",
            },
            {
              icon: Linkedin,
              href: "https://www.linkedin.com/in/danendra-nayaka-passadhi/",
              label: "LinkedIn",
            },
            {
              icon: Mail,
              href: "mailto:danendra.passadhi71@gamil.com",
              label: "Email",
            },
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-foreground transition-colors transition-smooth"
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
