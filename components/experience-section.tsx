"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { CalendarIcon, MapPinIcon, ArrowUpRight } from "lucide-react"

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Morgan Stanley",
    website: "https://www.morganstanley.com",
    location: "Bengaluru, India",
    period: "Jul 2024 — Present",
    description:
      "Leading the development of a lightweight Data Quality (DQ) platform for ETL pipelines to validate trade data and improve DQ processing time by 30%.",
    achievements: [
      "Designed Drools-based rule engine achieving 99.9% trade accuracy",
      "Optimized Spark-based data pipelines boosting throughput by 20%",
      "Collaborated across teams to deploy scalable trade verification system",
    ],
    technologies: ["Java", "Spring", "Drools", "Spark", "Kafka", "Snowflake", "DB2"],
  },
  {
    title: "Lead Software Engineer",
    company: "Freshworks",
    website: "https://www.freshworks.com",
    location: "Chennai, India",
    period: "Jan 2024 — Jul 2024",
    description:
      "Led engineering of a funnel graph system to reduce user drop-offs during onboarding by 15% through behavioral analysis and action triggers.",
    achievements: [
      "Built real-time monitoring dashboards cutting incident resolution time by 40%",
      "Optimized Snowflake queries resulting in 10x faster analytics performance",
      "Developed lightweight data ingestion framework for near real-time analytics",
    ],
    technologies: ["Java", "Spring Boot", "Snowflake", "MySQL", "Prometheus", "ElasticSearch"],
  },
  {
    title: "Senior Software Engineer",
    company: "Samsung Electronics",
    website: "https://www.samsung.com",
    location: "Chennai, India",
    period: "Sep 2021 — Jan 2024",
    description:
      "Spearheaded the design and development of B2B eCommerce modules for enterprise clients, contributing $1M+ in annual revenue.",
    achievements: [
      "Built bulk order automation doubling order efficiency for enterprise users",
      "Developed B2B pricing engine enabling 2x order handling capacity",
      "Introduced pre-generated carts reducing checkout time by 40%",
    ],
    technologies: ["Node.js", "React", "PostgreSQL", "Redis", "RabbitMQ", "AWS", "Docker"],
  },
  {
    title: "Full Stack Engineer",
    company: "Agentz Inc",
    website: "https://www.agentz.ai",
    location: "United States",
    period: "Feb 2020 — Sep 2021",
    description:
      "Developed end-to-end event-driven APIs to integrate Agentz chatbot with external platforms, boosting webhook response reliability by 35%.",
    achievements: [
      "Reduced system latency by 20% through Kafka optimization",
      "Built hierarchical trigger engine improving rule execution reliability by 50%",
      "Collaborated with US teams to build microservices with CI/CD pipeline",
    ],
    technologies: ["Java", "Spring Boot", "Groovy", "Kafka", "React", "MySQL", "Redis", "AWS"],
  },
  {
    title: "Member Technical Staff",
    company: "Zoho Corporation",
    website: "https://www.zoho.com",
    location: "Chennai, India",
    period: "May 2018 — Dec 2019",
    description:
      "Acted as L3 developer resolving 100+ customer tickets across US and Europe, contributing to 30% improvement in ADManager Plus performance.",
    achievements: [
      "Developed backend automation modules improving IT admin efficiency by 2x",
      "Reduced customer-reported issues through enhanced test automation",
      "Introduced regression pipelines for better quality assurance",
    ],
    technologies: ["Java", "JSP", "MSSQL", "PostgreSQL", "Tomcat"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Professional Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            7+ years of building scalable solutions across fintech, SaaS, and enterprise domains
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-3 h-3 bg-primary rounded-full border-4 border-background z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"} ml-12 md:ml-0`}>
                  <Card>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground">{experience.title}</h3>
                          <a 
                            href={experience.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg font-medium text-primary hover:text-primary/80 transition-all duration-200 inline-flex items-center gap-1 group"
                          >
                            {experience.company}
                            <ArrowUpRight className="h-4 w-4 group-hover:-translate-y-0.5 transition-all duration-200" />
                          </a>

                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <CalendarIcon className="h-4 w-4" />
                              {experience.period}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPinIcon className="h-4 w-4" />
                              {experience.location}
                            </div>
                          </div>
                        </div>

                        <p className="text-foreground leading-relaxed">{experience.description}</p>

                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Key Achievements</h4>
                          <ul className="space-y-1">
                            {experience.achievements.map((achievement, i) => (
                              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Technologies</h4>
                          <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View Full Resume Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-lg font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors duration-200"
          >
            View Full Resume
            <ArrowUpRight className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
