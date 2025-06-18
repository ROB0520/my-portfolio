import type { Metadata, Viewport } from 'next'
import { Figtree, Fira_Code } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import Script from 'next/script'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://aleczr.link/'),
  alternates: {
    canonical: '/'
  },
  title: {
    default: 'Alecz R. | Web Developer',
    template: '%s | Alecz R.'
  },
  description: 'Passionate web developer specializing in modern React applications, TypeScript, and full-stack development. Building innovative digital experiences.',
  openGraph: {
    images: '/og-image.png',
  },
  other: {
    "theme-color": '#3b82f6',
  },
};

const figtree = Figtree({
  variable: '--font-figtree',
  subsets: ['latin'],
})

const firaCode = Fira_Code({
  variable: '--font-fira-code',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Script defer src="https://umami.vps.aleczr.link/script.js" data-website-id="397d3853-3c32-42d8-9a6a-70cccf7161b1" />
      <body
        className={`${figtree.variable} ${firaCode.variable} bg-white tracking-tight antialiased dark:bg-zinc-950`}
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-figtree)]">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
