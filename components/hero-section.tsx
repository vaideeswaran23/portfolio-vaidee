"use client"

import { Button } from "@/components/ui/button"
import { ArrowDownIcon, DownloadIcon, MailIcon } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const openResume = () => {
    window.open("/resume.pdf", "_blank")
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
              <span className="text-4xl font-bold text-primary-foreground">VC</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Vaideeswaran Chandrasekaran
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-2 max-w-3xl mx-auto text-pretty"
          >
            Back End Engineer
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-base text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty"
          >
            I build scalable and robust backend apps with Java, NodeJs, Spring Boot, Microservices, and Cloud
            Technologies
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button size="lg" onClick={openResume} className="min-w-[160px]">
              <DownloadIcon className="mr-2 h-4 w-4" />
              View Resume
            </Button>
            <Button variant="outline" size="lg" onClick={() => scrollToSection("#contact")} className="min-w-[160px]">
              <MailIcon className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="animate-bounce"
          >
            <Button variant="ghost" size="icon" onClick={() => scrollToSection("#about")} className="rounded-full">
              <ArrowDownIcon className="h-6 w-6" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
