'use client'

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0a1628] flex flex-col justify-between p-6 md:p-12 relative overflow-hidden z-20 border-t border-white/5 w-full max-w-full">
      <div className="footer-bg-text">START NOW</div>
      
      <div className="flex flex-col md:flex-row justify-between items-start z-10 relative">
        <div>
          <h2 className="text-4xl heading-font uppercase mb-4 text-white">Ready to Render?</h2>
          <p className="mono text-sm text-gray-500 max-w-sm">Send us your project. We deliver Hollywood-grade VFX worldwide.</p>
        </div>
        <div className="mt-8 md:mt-0">
          <p className="mono text-xs text-[var(--accent-color)] uppercase mb-4">Locations</p>
          <div className="flex flex-col gap-3 text-lg font-light text-white">
            <p>Sydney, Australia</p>
            <p>Colombo, Sri Lanka</p>
            <p>Wellington, New Zealand</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center flex-grow z-10 relative mt-24 mb-24">
        <a href="mailto:studio@ifx.com" className="group relative inline-block">
          <span className="heading-font text-[12vw] md:text-[10vw] leading-none text-white group-hover:text-[var(--accent-color)] transition-colors duration-300">
            GET A QUOTE
          </span>
          <div className="w-full h-[4px] bg-[var(--accent-color)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
        </a>
      </div>

      <div className="flex justify-between items-end border-t border-white/10 pt-6 z-10 relative">
        <p className="mono text-xs text-gray-500">© 2025 IFX.</p>
        <div className="flex gap-6 font-mono text-xs uppercase text-gray-400">
          <a href="https://www.instagram.com/ifx2009?igsh=d2Jwb3o5azlrdmtp&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a>
          <a href="#" className="hover:text-white">Vimeo</a>
        </div>
      </div>
    </footer>
  )
}

