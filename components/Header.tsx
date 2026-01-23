'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container-wide">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2 brand">
            <Image 
              src="/img/ellitess-logo-header.png" 
              alt="Ellitess" 
              width={120}
              height={28}
              priority
              className="brand__logo"
            />
            <span className="brand__text text-xl font-bold text-foreground tracking-tight">ellitess</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <Link href="/" className="px-4 py-2 text-sm font-medium text-foreground hover:text-accent transition-colors">
              Home
            </Link>

            <div className="relative group">
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Products
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-card rounded-xl shadow-lg border border-border p-2 min-w-[180px]">
                  <Link href="/buyer" className="block px-4 py-2 text-sm text-foreground hover:bg-muted rounded-lg transition-colors">Buyers</Link>
                  <Link href="seller" className="block px-4 py-2 text-sm text-foreground hover:bg-muted rounded-lg transition-colors">Sellers</Link>
                  <Link href="/investment" className="block px-4 py-2 text-sm text-foreground hover:bg-muted rounded-lg transition-colors">Investments</Link>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Pricing
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-card rounded-xl shadow-lg border border-border p-2 min-w-[180px]">
                  <Link href="/seller-pricing" className="block px-4 py-2 text-sm text-foreground hover:bg-muted rounded-lg transition-colors">Seller Pricing</Link>
                  <Link href="/buyer-pricing" className="block px-4 py-2 text-sm text-foreground hover:bg-muted rounded-lg transition-colors">Buyer Pricing</Link>
                  <Link href="/investment-pricing" className="block px-4 py-2 text-sm text-foreground hover:bg-muted rounded-lg transition-colors">Investment Pricing</Link>
                </div>
              </div>
            </div>

            <Link href="/contact" className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="btn btn-ghost">Sign In</button>
            <button className="btn btn-primary">Create Account</button>
          </div>

          <button 
            className="md:hidden p-2 text-foreground" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Open menu"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}