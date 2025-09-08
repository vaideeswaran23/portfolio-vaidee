"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { MapPinIcon, BriefcaseIcon, GraduationCapIcon } from "lucide-react"

export function AboutSection() {
  const highlights = [
    "7+ years of experience in software development",
    "Led engineering teams at Morgan Stanley and Freshworks",
    "Specialized in Java, Spring Boot, and Microservices",
    "Built systems handling million-dollar revenue pipelines",
    "Expert in cloud technologies and data engineering",
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Innovative and results-driven Senior Software Engineer passionate about building scalable solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <MapPinIcon className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">Bengaluru, Karnataka, India</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <BriefcaseIcon className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">Senior Software Engineer at Morgan Stanley</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <GraduationCapIcon className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">B.E. Electronics and Communication, Anna University</span>
                  </div>

                  <p className="text-foreground leading-relaxed">
                    I'm a passionate software engineer with over 7 years of experience designing and developing scalable
                    backend and full-stack applications across fintech, SaaS, and consumer electronics domains. I
                    specialize in building high-throughput, event-driven microservices and optimizing data-intensive
                    systems using modern technologies.
                  </p>

                  <p className="text-foreground leading-relaxed">
                    Currently leading the development of lightweight Data Quality platforms at Morgan Stanley, I'm adept
                    at collaborating with cross-functional teams, resolving performance bottlenecks, and driving
                    business growth through technical excellence.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-foreground mb-6">Key Highlights</h3>
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-foreground">{highlight}</span>
                </motion.div>
              ))}
            </div>

            <div className="pt-6">
              <h4 className="text-lg font-semibold text-foreground mb-4">Certifications</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">AWS Solutions Architect Associate</Badge>
                <Badge variant="secondary">Data Engineering on Google Cloud</Badge>
                <Badge variant="secondary">Spring Framework</Badge>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
