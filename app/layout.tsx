import { Metadata } from 'next'
import { PropsWithChildren, Suspense } from 'react'
import { getURL } from '@/utils/helpers'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { Toaster } from '@/components/ui/toaster'
import { Analytics } from '@/components/analytics'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { ThemeProvider } from '@/components/theme-provider'
import { Inter as FontSans } from 'next/font/google'
import localFont from 'next/font/local'
import type { Viewport } from 'next'
import { RootProvider } from 'fumadocs-ui/provider'
import Header from '@/components/header'
import CircularNavigation from '@/components/navigation/circular-navigation'

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

import '@/styles/globals.css'
import { marketingConfig } from '../config/marketing'
import { getUser } from './supabase-server'
import FooterPrimary from '../components/footer/footer-primary'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

// Font files can be colocated inside of `pages`
const fontHeading = localFont({
  // src: "../assets/fonts/NotoSansMono-VariableFont_wdth,wght.ttf",
  src: '../assets/fonts/CalSans-SemiBold.woff2',
  variable: '--font-heading',
})

export const metadata: Metadata = {
  metadataBase: new URL(getURL()),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ['Next.js', 'React', 'Tailwind CSS', 'Server Components', 'Radix UI'],
  authors: [
    {
      name: 'antoineross',
      url: 'https://antoineross.com',
    },
  ],
  creator: 'antoineross',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
    creator: '@antoineross',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

export default async function RootLayout({ children }: PropsWithChildren) {
  const user = await getUser()

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn('min-h-screen bg-background font-mono antialiased', fontSans.variable, fontHeading.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <RootProvider>
            <Header
              NavigationComponent={CircularNavigation}
              navigationProps={{ items: marketingConfig.mainNav }}
              navType="circular"
              user={user}
            />
            {/* <Header NavigationComponent={MainNav} 
        navigationProps={{ items: marketingConfig.mainNav }} 
        navType="between" 
        user={user} 
      /> */}
            <main className="flex-1">{children}</main>
            <FooterPrimary />
          </RootProvider>
          <Analytics />
          <Toaster />
          {/* <TailwindIndicator /> */}
        </ThemeProvider>
      </body>
    </html>
  )
}
