'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

export default function Archive() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    gsap.registerPlugin(ScrollTrigger)

    const initAnimations = () => {
      // Skew text on scroll
      let proxy = { skew: 0 }
      const skewSetter = gsap.quickSetter('.skew-on-scroll', 'skewY', 'deg')
      const clamp = gsap.utils.clamp(-10, 10)
      
      ScrollTrigger.create({
        onUpdate: (self) => {
          let skew = clamp(self.getVelocity() / -300)
          if (Math.abs(skew) > Math.abs(proxy.skew)) {
            proxy.skew = skew
            gsap.to(proxy, {
              skew: 0,
              duration: 0.8,
              ease: 'power3',
              overwrite: true,
              onUpdate: () => skewSetter(proxy.skew)
            })
          }
        }
      })

      // Archive card hover animations
      document.querySelectorAll('.archive-card').forEach(card => {
        const thumb = card.querySelector('.archive-thumb')
        if (thumb) {
          card.addEventListener('mouseenter', () => {
            gsap.to(thumb, { scale: 1.1, duration: 0.5 })
          })
          card.addEventListener('mouseleave', () => {
            gsap.to(thumb, { scale: 1, duration: 0.5 })
          })
        }
      })
    }

    if (document.readyState === 'complete') {
      setTimeout(initAnimations, 100)
    } else {
      window.addEventListener('load', () => setTimeout(initAnimations, 100))
    }
  }, [])

  const projects = [
    {
      title: 'NEON FUTURES',
      tag: 'AI VFX / 4K',
      image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/14ce38c5-165b-458e-98d6-3b5cbb6b91dc_1600w.webp',
      alt: 'Neon Futures'
    },
    {
      title: 'VOID RUNNER',
      tag: 'AI COMPOSITE / B&W',
      image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5dcf1acc-de58-41a8-a3cd-2bb642c6e66e_1600w.webp',
      alt: 'Void Runner'
    },
    {
      title: 'HORIZON LOST',
      tag: 'AI SIMULATION / IMAX',
      image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a6398c31-e7f2-45ea-9396-0967a4ff0c97_1600w.jpg',
      alt: 'Horizon Lost'
    },
    {
      title: 'STATIC NOISE',
      tag: 'AI PARTICLES / 8K',
      image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8f447586-99ce-4695-80ef-7e6a5ba06c4d_1600w.webp',
      alt: 'Static Noise'
    },
    {
      title: 'TOKYO DRIFT',
      tag: 'AI RENDER / 4K',
      image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg',
      alt: 'Tokyo Drift'
    },
    {
      title: 'DESERT ECHO',
      tag: 'AI COMPOSITE / 4K',
      image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3a09bc92-f4bc-4e56-a19f-81c007a9fb04_1600w.webp',
      alt: 'Desert Echo'
    }
  ]

  return (
    <section id="archive" className="py-32 px-6 md:px-20 bg-[#0a1628] relative z-20 border-b border-white/5 w-full">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-6">
        <div>
          <h2 className="text-6xl md:text-8xl heading-font text-white font-bold -mb-4 skew-on-scroll">PORTFOLIO</h2>
          <p className="mono text-xs text-gray-500 mt-6">DATABASE ACCESS: LEVEL 4</p>
        </div>
        
        <div className="flex gap-4 mono text-[10px] text-gray-400 mt-8 md:mt-0">
          <span className="text-[var(--accent-color)] cursor-pointer">[ALL]</span>
          <span className="hover:text-white cursor-pointer hover:underline">[FEATURE]</span>
          <span className="hover:text-white cursor-pointer hover:underline">[SHORT]</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="archive-card group">
            <div className="archive-thumb-wrap">
              <Image
                src={project.image}
                alt={project.alt}
                fill
                className="archive-thumb object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                unoptimized
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl heading-font text-gray-200 group-hover:text-white mb-4">{project.title}</h3>
              <span className="archive-tag mono">{project.tag}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

