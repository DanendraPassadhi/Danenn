import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Heart,
  Instagram,
  Music,
} from "lucide-react";
import { useState, useRef } from "react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const playLofiMusic = () => {
    if (audioRef.current) {
      if (isPlayingMusic) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlayingMusic(!isPlayingMusic);
    }
  };

  const socialLinks = [
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
      icon: Instagram,
      href: "https://instagram.com/danendra71prime",
      label: "Instagram",
    },
    {
      icon: Mail,
      href: "mailto:danendra.passadhi71@gmail.com",
      label: "Email",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl mb-4 text-foreground font-bold">
              {"<"}Danenn. {"/>"}
            </h3>
            <p className="text-foreground/70 text-sm leading-relaxed">
              IT Student and Tech Enthusiast, passionate about building
              exceptional digital experiences, with a current focus on Software
              Development and Machine Learning.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-foreground/70 hover:text-foreground text-sm transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="mb-4">Connect With Me</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary/50 rounded-lg flex items-center justify-center text-foreground/70 hover:bg-primary hover:text-primary-foreground transition-all shadow-sm hover:shadow-md transition-smooth"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
            <p className="text-foreground/70 text-sm mt-4">
              Open to freelance opportunities and collaborations
            </p>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-sm text-foreground/60 flex items-center gap-2">
            © {currentYear} Danenn. Made with{" "}
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Heart size={14} className="text-red-500 fill-red-500" />
            </motion.span>
            Figma
          </p>
          <div className="flex gap-6 text-sm text-foreground/60">
            <motion.a
              href="#"
              className="hover:text-foreground transition-colors"
              whileHover={{ y: -2 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              className="hover:text-foreground transition-colors"
              whileHover={{ y: -2 }}
            >
              Terms of Service
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg hover:shadow-xl z-50 transition-smooth"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        whileHover={{ scale: 1.1, rotate: 360 }}
        whileTap={{ scale: 0.9 }}
        transition={{ rotate: { duration: 0.5 } }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </motion.button>

      {/* Music button */}
      <motion.button
        className={`fixed bottom-16 right-4 sm:bottom-8 sm:right-24 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-lg z-50 transition-all transition-smooth ${
          isPlayingMusic
            ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-green-500/30"
            : "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-primary/30 hover:shadow-primary/50"
        }`}
        onClick={playLofiMusic}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Play Lofi Music"
      >
        <Music size={18} className="sm:w-5 sm:h-5" />
      </motion.button>

      {/* Hidden audio element for lofi music */}
      <audio ref={audioRef} src="/Danenn/hindia-kita_ ke_sana.mp3" loop />
    </footer>
  );
}
