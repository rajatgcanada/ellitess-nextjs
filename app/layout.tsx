import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ellitess.com'),
  title: {
    default: 'Ellitess - Buy, Sell & Invest Profitable Businesses with Confidence',
    template: '%s | Ellitess',
  },
  description:
    'Connect with serious buyers, sellers, and investors in a trusted environment built for high-value business deals. Explore carefully vetted businesses, raise capital with confidence, and invest in real opportunities through transparent listings and verified ventures.',
  keywords: [
    'business marketplace',
    'buy business',
    'sell business',
    'online businesses',
    'offline businesses',
    'buy online business',
    'sell online business',
    'business acquisition',
    'verified businesses',
    'vetted business listings',
    'business for sale',
    'buy established business',
    'sell your business',
    'invest in businesses',
    'business investment opportunities',
    'raise capital',
    'find investors',
    'angel investors',
    'startup funding',
    'growth capital',
    'trusted business marketplace',
  ],
  authors: [{ name: 'Ellitess' }],
  creator: 'Ellitess',
  publisher: 'Ellitess',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.ellitess.com',
    title: 'Ellitess - Buy & Sell Profitable Businesses',
    description: 'The secure marketplace for verified online and offline ventures.',
    siteName: 'Ellitess',
    images: [
      {
        url: '/img/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ellitess Marketplace',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ellitess - Buy & Sell Profitable Businesses',
    description: 'The secure marketplace for verified online and offline ventures.',
    images: ['/img/twitter-image.jpg'],
    creator: '@ellitess',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JCDFT8JKXG"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-JCDFT8JKXG');
            `,
          }}
        />
        {children}
      </body>
    </html>
  )
}
