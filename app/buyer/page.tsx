// app/investment/page.tsx


import type { Metadata } from 'next'

import Buyer from '.././Pages/Buyer';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ellitess.com'),
  title: 'Buy a Business Online | Verified Businesses for Sale | Ellitess',
  description:
    'Buy verified online and offline businesses with proven revenue. Explore full acquisitions or minority equity stakes in profitable SaaS, eCommerce, content, and service-based businesses on Ellitess.',
  keywords: [
    'buy business',
    'business for sale',
    'buy online business',
    'buy profitable business',
    'business acquisition',
    'buy running business',
    'verified businesses for sale',
    'buy SaaS business',
    'buy ecommerce business',
    'buy content website',
    'buy startup',
    'business marketplace',
    'private business sale',
    'acquire business',
    'minority stake business',
    'equity purchase',
    'investment opportunities',
    'business buyers platform',
    'digital business for sale',
    'accredited investor deals'
  ],
  authors: [{ name: 'Ellitess Buyer Team' }],
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
    title: 'Buy a Business | Verified Businesses for Sale | Ellitess',
    description:
      'Explore verified businesses for sale. Buy full ownership or equity stakes in profitable, high-growth companies.',
    siteName: 'Ellitess',
    images: [
      {
        url: '/img/buy-business-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Buy a Business on Ellitess',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Buy a Business | Ellitess',
    description:
      'Buy verified businesses with proven revenue. Full acquisitions or equity stakes available.',
    images: ['/img/buy-business-twitter.jpg'],
    creator: '@ellitess',
    site: '@ellitess',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'Business Acquisition',
};



export default function BuyerPage() {

  return (
    <>
    <Buyer/>
    </>
  )
    
}