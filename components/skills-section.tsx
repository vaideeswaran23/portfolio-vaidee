"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", level: 95 },
      { name: "JavaScript", level: 85 },
      { name: "SQL", level: 90 },
      { name: "Groovy", level: 75 },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "Spring Boot", level: 95 },
      { name: "Spring Framework", level: 90 },
      { name: "React", level: 80 },
      { name: "Node.js", level: 85 },
    ],
  },
  {
    title: "Data & Cloud Technologies",
    skills: [
      { name: "Apache Kafka", level: 90 },
      { name: "Apache Spark", level: 85 },
      { name: "AWS", level: 80 },
      { name: "Docker", level: 85 },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "MySQL", level: 85 },
      { name: "Snowflake", level: 80 },
      { name: "Redis", level: 85 },
    ],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Expertise across the full technology stack with focus on scalable backend systems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
