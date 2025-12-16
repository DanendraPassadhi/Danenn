import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleEmailClick = () => {
    const email = "danendra.passadhi71@gmail.com";
    const subject = "Hello from your portfolio";
    const body =
      "Hi Danendra,\n\nI would like to get in touch with you regarding...\n\n";

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "danendra.passadhi71@gmail.com",
      href: "mailto:danendra.passadhi71@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+62 85713788055",
      href: "tel:+6285713788055",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Malang, East Java, Indonesia",
      href: "#",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-secondary/10 snap-start snap-always"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-4">Get In Touch</h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto mb-4"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            {/* Info Card */}
            <motion.div
              className="relative bg-card border border-border rounded-2xl p-10 overflow-hidden card-glow h-full flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-50" />

              <div className="relative flex flex-col h-full justify-between space-y-8">
                <div className="space-y-3">
                  <h3 className="text-3xl font-semibold">Get In Touch</h3>
                  <p className="text-foreground/70 text-lg">
                    I'm always open to discussing new projects, creative ideas,
                    or opportunities to collaborate. Let's create something
                    amazing together!
                  </p>
                </div>

                <div className="space-y-4 flex-1 flex flex-col justify-center">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      className="flex items-center gap-4 p-4 rounded-xl bg-secondary/20 hover:bg-secondary/40 transition-all group"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      whileHover={{ x: 5, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <motion.div
                        className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors flex-shrink-0"
                        whileHover={{ rotate: 5 }}
                      >
                        <info.icon size={22} />
                      </motion.div>
                      <div className="flex-1">
                        <p className="text-xs text-foreground/60 mb-1">
                          {info.label}
                        </p>
                        <p className="text-foreground font-medium">
                          {info.value}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Decorative Element Integrated */}
                <div className="relative h-32 rounded-xl overflow-hidden mt-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="text-6xl"
                      animate={{
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      👋
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            {/* Main CTA Card */}
            <motion.div
              className="relative bg-card border border-border rounded-2xl p-10 overflow-hidden card-glow group h-full flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-50" />

              <div className="relative space-y-8 flex flex-col h-full justify-between">
                <div className="text-center space-y-3">
                  <motion.div
                    className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-2xl mb-4"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Send className="text-primary" size={40} />
                  </motion.div>
                  <h3 className="text-3xl font-semibold">Social & Messaging</h3>
                  <p className="text-foreground/70 max-w-md mx-auto text-lg">
                    Connect with me on social media or send a quick message
                    through your favorite platform.
                  </p>
                </div>

                {/* Messaging Apps */}
                <div className="grid grid-cols-2 gap-4">
                  <motion.a
                    href="https://wa.me/6285713788055"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary/30 hover:bg-[#25D366] rounded-xl p-6 flex flex-col items-center justify-center gap-3 text-center hover:text-white transition-all group/method"
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg
                      className="text-[#25D366] group-hover/method:text-white transition-colors"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                    <div>
                      <div className="font-semibold">WhatsApp</div>
                      <div className="text-xs text-foreground/60 group-hover/method:text-white/80">
                        Chat now
                      </div>
                    </div>
                  </motion.a>
                  <motion.a
                    href="https://t.me/danenn10"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary/30 hover:bg-[#0088cc] rounded-xl p-6 flex flex-col items-center justify-center gap-3 text-center hover:text-white transition-all group/method"
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg
                      className="text-[#0088cc] group-hover/method:text-white transition-colors"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.02.01-.06-.02-.09-.03-.02-.07-.02-.11-.01-.05.01-1.93 1.23-5.46 3.62-.52.36-.99.54-1.42.53-.47-.01-1.37-.27-2.04-.49-.82-.27-1.47-.42-1.42-.88.03-.24.37-.49 1.02-.74 3.99-1.74 6.66-2.89 8.01-3.45 3.81-1.65 4.6-1.94 5.12-1.94.11 0 .37.03.53.16.14.11.17.26.19.37.01.08.03.32.01.49z" />
                    </svg>
                    <div>
                      <div className="font-semibold">Telegram</div>
                      <div className="text-xs text-foreground/60 group-hover/method:text-white/80">
                        Message me
                      </div>
                    </div>
                  </motion.a>
                </div>

                <div className="flex items-center gap-3 before:flex-1 before:h-px before:bg-border after:flex-1 after:h-px after:bg-border">
                  <span className="text-sm text-foreground/50">
                    Follow on social
                  </span>
                </div>

                {/* Social Links */}
                <div className="grid grid-cols-3 gap-3">
                  <motion.a
                    href="https://github.com/DanendraPassadhi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-16 bg-secondary/30 hover:bg-[#333] rounded-xl flex flex-col items-center justify-center gap-1 text-sm font-medium hover:text-white transition-all group/social"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Github size={24} />
                    <span className="text-xs">GitHub</span>
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/danendra-nayaka-passadhi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-16 bg-secondary/30 hover:bg-[#0077b5] rounded-xl flex flex-col items-center justify-center gap-1 text-sm font-medium hover:text-white transition-all group/social"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Linkedin size={24} />
                    <span className="text-xs">LinkedIn</span>
                  </motion.a>
                  <motion.a
                    href="https://instagram.com/danendra71prime"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-16 bg-secondary/30 hover:bg-gradient-to-br hover:from-[#f58529] hover:via-[#dd2a7b] hover:to-[#8134af] rounded-xl flex flex-col items-center justify-center gap-1 text-sm font-medium hover:text-white transition-all group/social"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Instagram size={24} />
                    <span className="text-xs">Instagram</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
