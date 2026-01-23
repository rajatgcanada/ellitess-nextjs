// app/investment/page.tsx


import type { Metadata } from 'next'

import InvestmentClient from '.././Pages/Investment';
export const metadata: Metadata = {
  metadataBase: new URL('https://www.ellitess.com'),
  title: 'Investment Opportunities - Direct Equity Stakes in Verified Businesses | Ellitess',
  description: 'Access exclusive equity investment opportunities in verified businesses. Take direct ownership positions from 5% to 15% in high-growth companies with proven track records. Private investor platform for serious investors.',
  keywords: [
    'business investment',
    'equity investment',
    'direct equity stakes',
    'private equity',
    'invest in businesses',
    'business equity opportunities',
    'equity stake investment',
    'buy equity in business',
    'private investor platform',
    'angel investment',
    'strategic investment',
    'business ownership',
    'equity acquisition',
    'verified investment opportunities',
    'vetted businesses for investment',
    'high-growth business investment',
    'online business equity',
    'SaaS investment',
    'eCommerce investment',
    'mobile app investment',
    'content business investment',
    'accredited investor opportunities',
    'private investment deals',
    'exclusive equity deals',
    'business equity purchase',
    'shareholder opportunities',
    'investment marketplace',
    'verified business investments',
    'secure equity transactions',
    'due diligence investment',
    'portfolio diversification',
    'equity investor platform'
  ],
  authors: [{ name: 'Ellitess Investment Team' }],
  creator: 'Ellitess',
  publisher: 'Ellitess',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://www.ellitess.com/investment',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.ellitess.com/investment',
    title: 'Investment Opportunities - Direct Equity Stakes | Ellitess',
    description: 'Access exclusive equity investment opportunities in verified businesses. Take direct ownership from 5% to 15% in high-growth companies.',
    siteName: 'Ellitess',
    images: [
      {
        url: '/img/investment-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ellitess Investment Opportunities - Equity Stakes in Verified Businesses',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Investment Opportunities - Direct Equity Stakes | Ellitess',
    description: 'Access exclusive equity investment opportunities in verified businesses. Take ownership positions from 5% to 15% in high-growth companies.',
    images: ['/img/investment-twitter-image.jpg'],
    creator: '@ellitess',
    site: '@ellitess',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'Investment',
  other: {
    'price:currency': 'USD',
    'price:amount': '100000-250000',
    'business:type': 'Investment Platform',
  },
};


export default function InvestmentPage() {

  return (
    <>
    <InvestmentClient/>
    </>
  )
    
}