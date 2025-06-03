import type { Metadata, Viewport } from 'next'
import { Figtree, Fira_Code } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'

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
            <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
