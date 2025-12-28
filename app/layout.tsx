import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'IFX / AI VFX STUDIO',
  description: 'Hollywood-grade VFX production powered by AI. We create cinematic excellence under budget.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&family=Oswald:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased selection:bg-[#ff3300] selection:text-white w-full overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}

