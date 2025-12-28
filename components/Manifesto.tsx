'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Manifesto() {
  const manifestoRef = useRef<HTMLElement | null>(null)
  const flashlightRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const flashlight = flashlightRef.current
    const manifestoSection = manifestoRef.current

    if (!flashlight || !manifestoSection) return

    const handleMouseMove = (e: MouseEvent) => {
      gsap.to(flashlight, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out'
      })
      const previewImg = document.getElementById('preview-img')
      if (previewImg) {
        gsap.to(previewImg, {
          x: e.clientX + 20,
          y: e.clientY + 20,
          duration: 0.6,
          ease: 'power3.out'
        })
      }
    }

    const handleMouseEnter = () => {
      gsap.to(flashlight, { opacity: 1, duration: 0.3 })
    }

    const handleMouseLeave = () => {
      gsap.to(flashlight, { opacity: 0, duration: 0.3 })
    }

    document.addEventListener('mousemove', handleMouseMove)
    manifestoSection.addEventListener('mouseenter', handleMouseEnter)
    manifestoSection.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      manifestoSection.removeEventListener('mouseenter', handleMouseEnter)
      manifestoSection.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <>
      <div ref={flashlightRef} id="flashlight" className="flashlight-mask"></div>
      <section id="manifesto" ref={manifestoRef} className="py-24 px-6 bg-[#0a1628] relative flex items-center justify-center z-20 w-full">
        <div className="text-center relative z-10 max-w-5xl mx-auto">
          <p className="mono text-[var(--accent-color)] text-sm mb-8 tracking-widest">[ THE ETHOS ]</p>
          <h2 className="text-5xl md:text-8xl heading-font leading-tight text-white manifesto-text">
            <span className="manifesto-span">WE</span>{' '}
            <span className="manifesto-span">DO</span>{' '}
            <span className="manifesto-span">NOT</span>{' '}
            <span className="manifesto-span">WAIT</span>{' '}
            <span className="manifesto-span">FOR</span>{' '}
            <span className="manifesto-span">BUDGET.</span><br />
            <span className="manifesto-span">WE</span>{' '}
            <span className="manifesto-span">CREATE</span>{' '}
            <span className="manifesto-span">IT</span>{' '}
            <span className="manifesto-span">WITH</span>{' '}
            <span className="manifesto-span">AI.</span>
          </h2>
          <div className="mt-16 border-t border-white/10 pt-8 flex justify-center gap-12 mono text-xs text-gray-600">
            <span>AI IS INFINITE</span>
            <span>QUALITY IS TEXTURE</span>
            <span>SPEED IS DATA</span>
          </div>
        </div>
      </section>
    </>
  )
}

