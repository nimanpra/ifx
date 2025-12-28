'use client'

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 w-full px-6 py-5 flex justify-between items-start z-50 mix-blend-difference text-white">
      <div className="flex flex-col">
        <div className="heading-font text-2xl font-bold tracking-tighter leading-none">IFX</div>
        <div className="mono text-[10px] text-gray-400 mt-1 tracking-widest">EST. 2009</div>
      </div>
      
      <div className="hidden md:flex gap-12 mono text-xs uppercase tracking-widest items-center">
        <div className="flex items-center gap-2 text-[var(--accent-color)]">
          <div className="w-2 h-2 rounded-full bg-[var(--accent-color)] animate-pulse"></div>
          <span>Studio Online</span>
        </div>
        <a href="#process" className="hover:text-[var(--accent-color)] transition-colors">Process</a>
        <a href="#stream" className="hover:text-[var(--accent-color)] transition-colors">Showreel</a>
        <a href="#archive" className="hover:text-[var(--accent-color)] transition-colors">Portfolio</a>
        <a href="#manifesto" className="hover:text-[var(--accent-color)] transition-colors">Ethos</a>
        <a href="#contact" className="btn-lab px-5 py-2 rounded-full text-xs">
          Start Project <span className="btn-text"></span>
        </a>
      </div>
      <div className="md:hidden text-xs uppercase mono border border-white/20 px-3 py-1 rounded">Menu</div>
    </nav>
  )
}

