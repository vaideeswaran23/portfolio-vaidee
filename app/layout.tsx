import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Vaideeswaran Chandrasekaran - Senior Software Developer",
  description:
    "Senior Software Developer with 6+ years of experience in Java, Spring Boot, Microservices, and Cloud Technologies. Building scalable solutions at Morgan Stanley.",
  keywords: "Software Developer, Java, Spring Boot, Microservices, Cloud, AWS, Full Stack Developer",
  authors: [{ name: "Vaideeswaran Chandrasekaran" }],
  creator: "Vaideeswaran Chandrasekaran",
  openGraph: {
    title: "Vaideeswaran Chandrasekaran - Senior Software Developer",
    description:
      "Senior Software Developer with 6+ years of experience in Java, Spring Boot, Microservices, and Cloud Technologies.",
    url: "https://vaideeswaran.dev",
    siteName: "Vaideeswaran Chandrasekaran Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaideeswaran Chandrasekaran - Senior Software Developer",
    description:
      "Senior Software Developer with 6+ years of experience in Java, Spring Boot, Microservices, and Cloud Technologies.",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
