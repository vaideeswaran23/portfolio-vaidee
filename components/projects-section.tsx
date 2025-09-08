"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ExternalLinkIcon } from "lucide-react"

const projects = [
  {
    title: "Data Quality Platform",
    description:
      "Lightweight DQ platform for ETL pipelines to validate trade data, improving processing time by 30% using Drools-based rule engine.",
    technologies: ["Java", "Spring", "Drools", "Spark", "Kafka", "Snowflake"],
    achievements: ["99.9% trade accuracy", "30% faster processing", "Scalable rule engine"],
    company: "Morgan Stanley",
  },
  {
    title: "Funnel Graph System",
    description:
      "Real-time behavioral analysis system to reduce user drop-offs during onboarding by implementing action triggers and monitoring dashboards.",
    technologies: ["Java", "Spring Boot", "Snowflake", "Prometheus", "ElasticSearch"],
    achievements: ["15% reduction in drop-offs", "40% faster incident resolution", "10x query performance"],
    company: "Freshworks",
  },
  {
    title: "B2B eCommerce Platform",
    description:
      "Enterprise eCommerce modules including Insurance, Bulk Cart, Order Upload, and Custom Pricing contributing $1M+ in annual revenue.",
    technologies: ["Node.js", "React", "PostgreSQL", "Redis", "RabbitMQ", "AWS"],
    achievements: ["$1M+ revenue contribution", "2x order handling capacity", "40% faster checkout"],
    company: "Samsung Electronics",
  },
  {
    title: "Event-Driven Integration APIs",
    description:
      "End-to-end APIs to integrate chatbot with external platforms, boosting webhook response reliability and system performance.",
    technologies: ["Java", "Spring Boot", "Kafka", "React", "MySQL", "AWS"],
    achievements: ["35% improved reliability", "20% reduced latency", "50% better rule execution"],
    company: "Agentz Inc",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Showcasing impactful solutions that drive business growth and technical excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <Badge variant="outline" className="text-xs">
                      {project.company}
                    </Badge>
                  </div>
                  <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-foreground mb-2">Key Achievements</h4>
                    <ul className="space-y-1">
                      {project.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm text-foreground mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                      <ExternalLinkIcon className="mr-2 h-3 w-3" />
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
