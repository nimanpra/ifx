'use client'

import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Process from '@/components/Process'
import Stream from '@/components/Stream'
import Archive from '@/components/Archive'
import Manifesto from '@/components/Manifesto'
import Footer from '@/components/Footer'
import SmoothScroll from '@/components/SmoothScroll'

export default function Home() {
  return (
    <main className="relative w-full min-h-screen">
      <div className="noise"></div>
      <div className="bg-grid"></div>
      <div id="preview-img" className="hover-reveal-img" style={{ display: 'none' }}></div>
      <div id="flashlight" className="flashlight-mask"></div>
      
      <SmoothScroll />
      <Nav />
      <Hero />
      <Process />
      <Stream />
      <Archive />
      <Manifesto />
      <Footer />
    </main>
  )
}

