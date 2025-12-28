'use client'

import Image from 'next/image'

export default function Stream() {
  const streamItems = [
    {
      type: 'image',
      src: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04cf950b-7612-44ac-a767-6b8b9dc3e83b_800w.jpg',
      alt: 'VFX Render'
    },
    { type: 'text', content: 'AI RENDER' },
    { type: 'code', content: 'XR-990' },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=400',
      alt: 'VFX Composite'
    },
    { type: 'text', content: 'COMPOSITE' },
    { type: 'code', content: 'AI-VFX' },
    {
      type: 'image',
      src: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c59ec7be-cfcf-4651-b25c-6f5baded8d17_800w.jpg',
      alt: 'VFX Render'
    },
    { type: 'text', content: 'AI RENDER' },
    { type: 'code', content: 'XR-990' },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=400',
      alt: 'VFX Composite'
    },
    { type: 'text', content: 'COMPOSITE' },
    { type: 'code', content: 'AI-VFX' }
  ]

  const streamItems2 = [
    { type: 'text', content: 'SIMULATION' },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=400',
      alt: 'Particle Effects'
    },
    { type: 'code', content: 'AI-PARTICLES' },
    { type: 'text', content: 'PROCESS' },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=400',
      alt: 'VFX Process'
    },
    { type: 'text', content: 'SIMULATION' },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=400',
      alt: 'Particle Effects'
    },
    { type: 'code', content: 'AI-PARTICLES' },
    { type: 'text', content: 'PROCESS' },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=400',
      alt: 'VFX Process'
    }
  ]

  const streamItems3 = [
    { type: 'code', content: 'RENDER.LOG' },
    {
      type: 'image',
      src: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/187a0108-cdee-4c0b-9d37-e438811c787e_800w.jpg',
      alt: 'VFX Output'
    },
    { type: 'text', content: 'OPTICAL' },
    {
      type: 'image',
      src: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f6191da6-cb07-4c17-b085-36202e1b172b_800w.jpg',
      alt: 'VFX Transfer'
    },
    { type: 'text', content: 'TRANSFER' },
    { type: 'code', content: 'RENDER.LOG' },
    {
      type: 'image',
      src: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg',
      alt: 'VFX Output'
    },
    { type: 'text', content: 'OPTICAL' },
    {
      type: 'image',
      src: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c03ed2fe-b5ae-4807-b063-a69067689369_800w.jpg',
      alt: 'VFX Transfer'
    },
    { type: 'text', content: 'TRANSFER' }
  ]

  const renderItem = (item: any, index: number) => {
    if (item.type === 'image') {
      return (
        <Image
          key={index}
          src={item.src}
          alt={item.alt}
          width={300}
          height={200}
          className="stream-img object-cover w-[300px] h-[200px] flex-none"
          unoptimized
        />
      )
    }
    if (item.type === 'text') {
      return <span key={index} className="stream-text">{item.content}</span>
    }
    if (item.type === 'code') {
      return <span key={index} className="stream-code">{item.content}</span>
    }
    return null
  }

  return (
    <section id="stream" className="relative w-full">
      <div className="absolute top-10 left-6 md:left-20 flex items-center gap-4 z-30 pointer-events-none">
        <div className="w-12 h-[1px] bg-[var(--accent-color)]"></div>
        <span className="mono text-xs text-[var(--accent-color)] uppercase tracking-widest">Showreel Stream</span>
      </div>

      <div className="stream-row row-left">
        <div className="stream-track">
          {streamItems.map((item, index) => renderItem(item, index))}
          {streamItems.map((item, index) => renderItem(item, index + streamItems.length))}
        </div>
      </div>

      <div className="stream-row row-right">
        <div className="stream-track">
          {streamItems2.map((item, index) => renderItem(item, index))}
          {streamItems2.map((item, index) => renderItem(item, index + streamItems2.length))}
        </div>
      </div>

      <div className="stream-row row-left">
        <div className="stream-track">
          {streamItems3.map((item, index) => renderItem(item, index))}
          {streamItems3.map((item, index) => renderItem(item, index + streamItems3.length))}
        </div>
      </div>
    </section>
  )
}

