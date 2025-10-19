import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
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
    <section id="contact" className="py-20 bg-secondary/10" ref={ref}>
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
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl mb-4">Let's talk about everything!</h3>
              <p className="text-foreground/70 mb-8">
                Don't like forms? Send me an email. I'm always open to
                discussing new projects, creative ideas, or opportunities to be
                part of your vision.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  className="flex items-start gap-4 group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <info.icon size={20} />
                  </motion.div>
                  <div>
                    <p className="text-sm text-foreground/60">{info.label}</p>
                    <p className="text-foreground">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Decorative Element */}
            <motion.div
              className="relative h-64 mt-8 rounded-xl overflow-hidden"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20" />
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
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
              >
                <label htmlFor="name" className="block mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="w-full"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message..."
                  rows={6}
                  className="w-full resize-none"
                />
              </motion.div>

              <motion.button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg flex items-center justify-center gap-2 disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
              >
                {isSubmitting ? (
                  <motion.div
                    className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                ) : submitted ? (
                  <>
                    <span>Message Sent!</span>
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring" }}
                    >
                      ✓
                    </motion.span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={18} />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
