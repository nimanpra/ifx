'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'

export default function Process() {
  const processSectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const initInteractions = () => {
      const bgLayers = document.querySelectorAll('.process-bg-layer')
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/<>[]"
      
      function scrambleText(element: HTMLElement) {
        const originalText = element.getAttribute('data-original') || element.innerText
        if (!element.getAttribute('data-original')) {
          element.setAttribute('data-original', originalText)
        }
        let iterations = 0
        const interval = setInterval(() => {
          element.innerText = originalText.split("").map((l, i) => {
            if (i < iterations) return originalText[i]
            return chars[Math.floor(Math.random() * chars.length)]
          }).join("")
          if (iterations >= originalText.length) clearInterval(interval)
          iterations += 1/2
        }, 30)
      }

      const steps = document.querySelectorAll('.process-step')
      steps.forEach(step => {
        step.addEventListener('mouseenter', () => {
          const targetId = step.getAttribute('data-bg')
          bgLayers.forEach(layer => layer.classList.remove('active'))
          if (targetId) {
            const targetBg = document.getElementById(targetId)
            if (targetBg) targetBg.classList.add('active')
          }
          const header = step.querySelector('.scramble-text') as HTMLElement
          if (header) scrambleText(header)
        })
      })
      
      if (processSectionRef.current) {
        processSectionRef.current.addEventListener('mouseleave', () => {
          bgLayers.forEach(layer => layer.classList.remove('active'))
          const firstBg = document.querySelector('.process-bg-layer')
          if (firstBg) firstBg.classList.add('active')
        })
      }
    }

    if (document.readyState === 'complete') {
      setTimeout(initInteractions, 100)
    } else {
      window.addEventListener('load', () => setTimeout(initInteractions, 100))
    }
  }, [])

  const steps = [
    {
      id: 'bg-step-1',
      number: '01',
      title: 'CONCEPTION',
      subtitle: 'AI Pre-Visualization',
      description: 'We start with AI-powered pre-visualization. Our neural networks analyze your script and generate photorealistic storyboards, helping you see the final result before production begins.',
      image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f3bf2a64-4eb0-40b9-9f2d-2ad4303037aa_3840w.webp'
    },
    {
      id: 'bg-step-2',
      number: '02',
      title: 'GENERATION',
      subtitle: 'AI VFX Creation',
      description: 'Our proprietary AI systems generate Hollywood-grade VFX in minutes, not months. From particle effects to complex simulations, we deliver cinematic quality at a fraction of traditional costs.',
      image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d9ec54d2-3cc5-4bae-ac6d-4b4eef75799f_3840w.webp'
    },
    {
      id: 'bg-step-3',
      number: '03',
      title: 'REFINEMENT',
      subtitle: 'Precision Editing',
      description: 'Human artists refine AI-generated assets with precision. We combine the speed of AI with the nuance of human creativity, ensuring every frame meets Hollywood standards.',
      image: 'https://images.unsplash.com/photo-1504198458649-3128b932f49e?q=80&w=2000'
    },
    {
      id: 'bg-step-4',
      number: '04',
      title: 'DELIVERY',
      subtitle: 'Final Render',
      description: '4K/8K delivery optimized for any platform. Our render farm ensures fast turnaround without compromising quality. Ready for theaters, streaming, or digital distribution.',
      image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f3bf2a64-4eb0-40b9-9f2d-2ad4303037aa_3840w.webp'
    }
  ]

  return (
    <section id="process" ref={processSectionRef} className="relative min-h-screen py-32 overflow-hidden border-b border-white/5 bg-[#0a1628] w-full">
      <div className="absolute inset-0 z-0 pointer-events-none w-full">
        <div className="process-bg-layer active bg-[#0a1628]"></div>
        {steps.map((step) => (
          <Image
            key={step.id}
            id={step.id}
            src={step.image}
            alt={step.title}
            fill
            className="process-bg-layer"
            sizes="100vw"
            unoptimized
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628] via-[#0a1628]/80 to-transparent"></div>
      </div>

      <div className="relative z-10 px-6 md:px-20 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4 h-full">
          <div className="sticky top-32">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-[1px] bg-[var(--accent-color)]"></div>
              <span className="mono text-xs text-[var(--accent-color)] uppercase tracking-widest">Workflow</span>
            </div>
            <h2 className="text-6xl md:text-7xl heading-font mb-6 leading-none text-white">THE<br />PIPELINE</h2>
            <p className="mono text-sm text-gray-400 max-w-xs leading-relaxed">
              AI meets artistry. Explore our end-to-end VFX production pipeline. From concept to final frame.
            </p>
          </div>
        </div>

        <div className="md:col-span-8 flex flex-col">
          {steps.map((step) => (
            <div key={step.id} className="process-step py-8 cursor-pointer group" data-bg={step.id}>
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-4xl md:text-5xl heading-font text-gray-400 group-hover:text-white transition-colors scramble-text">
                  {step.title}
                </h3>
                <span className="step-number mono text-xl text-gray-600 transition-colors">{step.number}</span>
              </div>
              <p className="mono text-xs text-gray-500 uppercase tracking-widest group-hover:text-[var(--accent-color)] transition-colors">
                {step.subtitle}
              </p>
              <div className="step-details">
                <p className="text-gray-300 mt-6 max-w-xl leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

