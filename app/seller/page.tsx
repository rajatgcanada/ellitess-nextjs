

import type { Metadata } from 'next'
import SellerClient from '../Pages/Seller';
export const metadata: Metadata = {
  metadataBase: new URL('https://www.ellitess.com'),
  title: 'Sell Your Business Online | Get Maximum Value | Ellitess',
  description:
    'Sell your online or offline business for maximum value. Connect with 12,000+ verified buyers, get free professional valuation, and close deals in 45 days with expert support and escrow protection.',
  keywords: [
    'sell business',
    'sell my business',
    'business for sale',
    'sell online business',
    'business valuation',
    'sell SaaS business',
    'sell ecommerce business',
    'sell startup',
    'business exit strategy',
    'business broker',
    'sell profitable business',
    'business marketplace',
    'sell digital business',
    'business acquisition platform',
    'sell content website',
    'sell mobile app',
    'sell agency business',
    'business selling platform',
    'exit planning',
    'business appraisal',
    'sell business fast',
    'verified buyer network',
    'business sale services',
    'entrepreneur exit'
  ],
  authors: [{ name: 'Ellitess Seller Team' }],
  creator: 'Ellitess',
  publisher: 'Ellitess',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://www.ellitess.com/seller',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.ellitess.com/seller',
    title: 'Sell Your Business for Maximum Value | Ellitess',
    description:
      'Connect with 12,000+ verified buyers. Get free business valuation and sell your business in as little as 45 days with expert support.',
    siteName: 'Ellitess',
    images: [
      {
        url: '/img/sell-business-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Sell Your Business on Ellitess',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sell Your Business for Maximum Value | Ellitess',
    description:
      'Connect with 12,000+ verified buyers. Get free valuation and sell your business fast with expert support.',
    images: ['/img/sell-business-twitter.jpg'],
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
  category: 'Business Sale',
};





export default function SellerPage() {

  return (
    <>
    <SellerClient/>
    </>
  )
    
}