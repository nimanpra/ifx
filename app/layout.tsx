import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'IFX / AI VFX STUDIO',
  description: 'Hollywood-grade VFX production powered by AI. We create cinematic excellence under budget.',
  icons: {
    icon: '/ifx-logo.png',
    shortcut: '/ifx-logo.png',
    apple: '/ifx-logo.png',
  },
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
        <link rel="icon" href="/ifx-logo.png" type="image/png" />
      </head>
      <body className="antialiased selection:bg-[#ff3300] selection:text-white w-full overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}

