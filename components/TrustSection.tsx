'use client'

import { useEffect, useRef } from 'react'

const trustCards = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Verified Listings',
    text: 'Every business undergoes rigorous verification to ensure authenticity and accuracy of financials.'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Secure Transactions',
    text: 'End-to-end encrypted deals with escrow protection for safe, transparent transactions.'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Expert Support',
    text: 'Dedicated advisors guide you through every step of buying or selling your business.'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M21.801 10A10 10 0 1 1 17 3.335" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="m9 11 3 3L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Due Diligence',
    text: 'Comprehensive documentation and third-party audits to validate business performance.'
  }
]

export default function TrustSection() {
  const trackRef = useRef<HTMLDivElement>(null)
  const dotsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const track = trackRef.current
    const dotsWrap = dotsRef.current
    if (!track || !dotsWrap) return

    const cards = Array.from(track.querySelectorAll('.trust-card'))
    if (!cards.length) return

    // Create dots
    dotsWrap.innerHTML = cards
      .map((_, i) => `<span class="trust-dot ${i === 0 ? 'is-active' : ''}" data-i="${i}"></span>`)
      .join('')

    const dots = Array.from(dotsWrap.querySelectorAll('.trust-dot'))

    const setActive = (idx: number) => {
      dots.forEach((d, i) => d.classList.toggle('is-active', i === idx))
    }

    const getClosestIndex = () => {
      const left = track.scrollLeft
      let best = 0
      let bestDist = Infinity

      cards.forEach((card, i) => {
        const dist = Math.abs((card as HTMLElement).offsetLeft - left)
        if (dist < bestDist) {
          bestDist = dist
          best = i
        }
      })

      return best
    }

    track.addEventListener('scroll', () => {
      window.requestAnimationFrame(() => setActive(getClosestIndex()))
    })

    dotsWrap.addEventListener('click', (e) => {
      const dot = (e.target as HTMLElement).closest('.trust-dot')
      if (!dot) return

      const idx = Number(dot.getAttribute('data-i'))
      track.scrollTo({ left: (cards[idx] as HTMLElement).offsetLeft, behavior: 'smooth' })
    })

    // Auto slide (mobile only)
    const mq = window.matchMedia('(max-width: 640px)')
    let timer: NodeJS.Timeout | null = null
    let pausedUntil = 0

    const stopAuto = () => {
      if (timer) {
        clearInterval(timer)
        timer = null
      }
    }

    const startAuto = () => {
      stopAuto()
      if (!mq.matches) return

      timer = setInterval(() => {
        if (Date.now() < pausedUntil) return

        const current = getClosestIndex()
        const next = (current + 1) % cards.length
        track.scrollTo({ left: (cards[next] as HTMLElement).offsetLeft, behavior: 'smooth' })
      }, 3000)
    }

    const pauseTemporarily = () => {
      pausedUntil = Date.now() + 2500
    }

    track.addEventListener('touchstart', pauseTemporarily, { passive: true } as any)
    track.addEventListener('touchmove', pauseTemporarily, { passive: true } as any)
    track.addEventListener('mousedown', pauseTemporarily)
    track.addEventListener('wheel', pauseTemporarily, { passive: true } as any)

    const onChange = () => {
      if (mq.matches) startAuto()
      else stopAuto()
    }

    mq.addEventListener('change', onChange)
    onChange()

    return () => {
      stopAuto()
      mq.removeEventListener('change', onChange)
    }
  }, [])

  return (
    <section className="trust-section" id="why-ellitess">
      <div className="trust-wrap">
        <div className="trust-head">
          <span className="trust-pill">Why Ellitess</span>
          <h2 className="trust-title">Built for Trust &amp; Transparency</h2>
          <p className="trust-subtitle">
            Every feature is designed to create a secure environment for high-value business transactions.
          </p>
        </div>

        <div className="trust-cards">
          <div className="trust-track" ref={trackRef}>
            {trustCards.map((card, index) => (
              <article key={index} className="trust-card">
                <div className="trust-icon">{card.icon}</div>
                <h3 className="trust-card-title">{card.title}</h3>
                <p className="trust-card-text">{card.text}</p>
              </article>
            ))}
          </div>

          <div className="trust-dots" ref={dotsRef} aria-hidden="true"></div>
        </div>

        <div className="trust-metrics">
          <div className="metric">
            <div className="metric-val">2,847</div>
            <div className="metric-lbl">Active Listings</div>
          </div>
          <div className="metric">
            <div className="metric-val">$150M+</div>
            <div className="metric-lbl">Total Value Sold</div>
          </div>
          <div className="metric">
            <div className="metric-val">12,400</div>
            <div className="metric-lbl">Verified Buyers</div>
          </div>
          <div className="metric">
            <div className="metric-val">98.5%</div>
            <div className="metric-lbl">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  )
}
