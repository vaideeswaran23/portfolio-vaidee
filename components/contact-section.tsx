"use client"

import { motion } from "framer-motion"
import { MailIcon, MapPinIcon, GithubIcon, InstagramIcon, TwitterIcon, Linkedin } from "lucide-react"

export function ContactSection() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: GithubIcon,
      url: "https://github.com/vaideeswaran23",
      description: "View my code and projects"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/vaideeswaranc/",
      description: "Connect professionally"
    },
    {
      name: "Twitter",
      icon: TwitterIcon,
      url: "https://x.com/vaideeswaran23",
      description: "Follow me on X (Twitter)"
    },
    {
      name: "Instagram",
      icon: InstagramIcon,
      url: "https://www.instagram.com/vaideeswaranc/",
      description: "Personal moments and insights"
    }
  ]

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Let's discuss opportunities to build something amazing together
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MailIcon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <a
                    href="mailto:vaidee.work@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    vaidee.work@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPinIcon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p className="text-muted-foreground">Bengaluru, Karnataka, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Connect With Me</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {socialLinks.map((link, index) => {
                const IconComponent = link.icon
                return (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group flex flex-col items-center p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:scale-105"
                  >
                    <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary/20 rounded-lg flex items-center justify-center mb-4 transition-colors">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                      {link.name}
                    </h4>
                    <p className="text-sm text-muted-foreground text-center leading-relaxed">
                      {link.description}
                    </p>
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
