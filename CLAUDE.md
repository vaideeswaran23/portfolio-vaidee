# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**Build and Development:**
- `npm run dev` - Start development server on localhost:3000
- `npm run build` - Build production version
- `npm run start` - Start production server
- `npm run lint` - Run ESLint (Note: configured to ignore during builds)

**Package Management:**
- Uses npm (package-lock.json present)
- Also has pnpm-lock.yaml but npm appears to be primary

## Architecture Overview

This is a Next.js 15 portfolio website using the App Router with TypeScript and Tailwind CSS.

**Tech Stack:**
- Next.js 15.2.4 with App Router
- TypeScript 5 with strict mode
- Tailwind CSS v4 with custom design system
- shadcn/ui components (New York style)
- Framer Motion for animations
- next-themes for dark/light mode
- Radix UI primitives
- Vercel Analytics integration

**Key Directories:**
- `app/` - Next.js App Router pages and layouts
- `components/` - React components, including shadcn/ui components in `components/ui/`
- `lib/` - Utility functions (contains `cn()` class merger)
- `hooks/` - Custom React hooks
- `public/` - Static assets
- `styles/` - Additional stylesheets

**Component Structure:**
The main page (`app/page.tsx`) is composed of modular sections:
- Navbar (with smooth scrolling navigation and theme toggle)
- HeroSection, AboutSection, SkillsSection, ProjectsSection
- ExperienceSection, ContactSection, Footer

**Styling System:**
- Uses Tailwind CSS v4 with custom CSS variables in `app/globals.css`
- Custom color scheme with professional blue primary and emerald accent colors
- Comprehensive dark/light theme support with OKLCH color values
- shadcn/ui components configured with path aliases (@/components, @/lib, etc.)

**Configuration Details:**
- TypeScript path alias: `@/*` maps to `./*`
- ESLint and TypeScript errors ignored during builds (for rapid prototyping)
- Images set to unoptimized mode
- Uses Geist Sans and Mono fonts
- PostCSS configured for Tailwind CSS v4

**Notable Features:**
- Smooth scrolling navigation with scroll-triggered navbar styling
- Responsive design with mobile menu
- Theme switching with system preference detection
- Professional portfolio layout with structured sections