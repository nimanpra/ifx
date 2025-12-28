# IFX VFX Agency

A modern web application for IFX, an AI-powered VFX agency that creates Hollywood-grade films under budget.

## Features

- **Modern Design**: Dark, cinematic aesthetic with smooth animations
- **AI-Focused Content**: Showcases AI-powered VFX production pipeline
- **Smooth Scrolling**: Lenis-powered smooth scroll experience
- **Interactive Animations**: GSAP-powered scroll and hover effects
- **Responsive**: Fully responsive design for all devices

## Tech Stack

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **GSAP**: Animation library for scroll and hover effects
- **Lenis**: Smooth scrolling library

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with fonts
│   ├── page.tsx         # Main page component
│   └── globals.css      # Global styles
├── components/
│   ├── Nav.tsx          # Navigation component
│   ├── Hero.tsx         # Hero section
│   ├── Process.tsx      # Process/workflow section
│   ├── Stream.tsx       # Showreel stream section
│   ├── Archive.tsx      # Portfolio/archive section
│   ├── Manifesto.tsx    # Ethos/manifesto section
│   ├── Footer.tsx       # Footer component
│   └── SmoothScroll.tsx # Smooth scroll setup
└── public/              # Static assets
```

## Build

```bash
npm run build
```

## Production

```bash
npm start
```

