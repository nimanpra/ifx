'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'

export default function Hero() {
  const timecodeRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Timecode animation
    const interval = setInterval(() => {
      const now = new Date()
      const ms = Math.floor(now.getMilliseconds() / 10).toString().padStart(2, '0')
      if (timecodeRef.current) {
        timecodeRef.current.innerText = now.toLocaleTimeString('en-GB') + ":" + ms
      }
    }, 40)

    // Entrance animation - initial states are set in CSS
    const initAnimations = () => {
      const heroLines = document.querySelectorAll(".hero-line")
      const heroSub = document.querySelector(".hero-sub")
      const nav = document.querySelector("nav")
      const heroImg = document.querySelector(".hero-img")

      if (heroLines.length > 0) {
        const tl = gsap.timeline()
        tl.to(heroLines, {
          y: 0,
          duration: 1.5,
          stagger: 0.15,
          ease: "power4.out",
          delay: 0.2
        })
        if (heroSub) {
          tl.to(heroSub, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out"
          }, "-=1")
        }
        if (nav) {
          tl.to(nav, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out"
          }, "-=1.2")
        }
        if (heroImg) {
          // Animate from initial state
          tl.from(heroImg, {
            scale: 1.2,
            opacity: 0,
            duration: 2,
            ease: "power2.out"
          }, "-=2")
        }
      }
    }

    // Run animations after DOM is ready
    if (document.readyState === 'loading') {
      window.addEventListener('DOMContentLoaded', () => {
        setTimeout(initAnimations, 100)
      })
    } else {
      setTimeout(initAnimations, 100)
    }

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <section className="h-screen relative flex flex-col justify-between p-6 overflow-hidden border-b border-white/10 bg-[#0a1628] w-full min-h-screen">
      <div className="hero-img-container">
        <Image
          src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"
          alt="VFX Production"
          fill
          className="hero-img"
          priority
          unoptimized
          style={{ objectFit: 'cover', zIndex: 1 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-[#0a1628]/60 z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_20%,#0a1628_120%)] z-10"></div>
      </div>

      <div className="absolute top-1/2 left-6 -translate-y-1/2 hidden md:flex flex-col gap-4 z-10 mono text-[10px] text-gray-500 writing-vertical-lr opacity-60">
        <span>AI RENDER / 4K</span>
        <span>TEMP 24.5°C</span>
        <span>PROCESS VFX</span>
      </div>

      <div className="absolute right-6 top-1/3 flex flex-col items-end z-10 mono text-xs text-[var(--accent-color)]">
        <span ref={timecodeRef} id="timecode">00:00:00:00</span>
        <span className="text-gray-500 mt-1">RENDER ●</span>
      </div>

      <div className="relative z-10 mt-auto mb-10 md:mb-20 ml-0 md:ml-12">
        <div className="line-wrapper">
          <h1 className="hero-line text-[14vw] leading-[0.8] font-bold tracking-tighter mix-blend-screen text-white">AI-POWERED</h1>
        </div>
        <div className="line-wrapper flex items-center gap-4 md:gap-10">
          <h1 className="hero-line text-[14vw] leading-[0.8] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">VFX STUDIO</h1>
          <div className="hidden md:block w-32 h-[1px] bg-[var(--accent-color)] mt-8"></div>
          <p className="hero-sub mono text-xs md:text-sm max-w-xs text-gray-400 mt-4 leading-relaxed uppercase">
            We bridge the gap between Hollywood ambition and budget reality. AI-driven VFX production at scale.
          </p>
        </div>
      </div>
    </section>
  )
}

