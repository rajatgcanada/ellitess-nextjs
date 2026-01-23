// ===================================
// FILE: src/components/Hero.tsx
// ===================================
'use client'

import { useEffect } from 'react'

export default function Hero() {
  useEffect(() => {
    const toast = document.getElementById('buyerToast')
    if (!toast) return

    const showTimer = setTimeout(() => toast.classList.add('is-show'), 700)
    const hideTimer = setTimeout(() => toast.classList.remove('is-show'), 5200)

    return () => {
      clearTimeout(showTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  return (
    <section 
      className="hero"
      style={{ '--hero-grad': 'linear-gradient(135deg,#0B1B2A 0%, #0E2236 45%, #0F2A36 100%)' } as any}
    >
      <div className="hero__bg">
        <span className="hero__blob hero__blob--teal"></span>
        <span className="hero__blob hero__blob--emerald"></span>
      </div>

      <div className="hero__gridbg" aria-hidden="true"></div>

      <div className="container-wide hero__container">
        <div className="hero__wrap">
          <div className="hero__left">
            <div className="hero__pill">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
              Trusted by 10,000+ entrepreneurs
            </div>

            <h1 className="hero__title">
              Buy, Sell &amp; Invest in Profitable <br />
              Businesses <span className="hero__accent">with Confidence</span>
            </h1>

            <p className="hero__sub">
              The secure marketplace for verified online and offline ventures.
              Connect with serious buyers, sellers, investors for transparent, high-value transactions.
            </p>

            <div className="hero__cta"> 
              <a className="hero__btn hero__btn--primary js-open-login" href="#">
                Browse Businesses
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                  <path d="m12 5 7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </a>

              <a className="hero__btn hero__btn--ghost js-open-login" href="#">
                List Your Business
              </a>
            </div>

            <div className="hero__stats">
              <div className="hero__stat">
                <div className="hero__statVal">500+</div>
                <div className="hero__statLbl">Businesses Sold</div>
              </div>
              <div className="hero__stat">
                <div className="hero__statVal">$150M+</div>
                <div className="hero__statLbl">Total Value Traded</div>
              </div>
              <div className="hero__stat">
                <div className="hero__statVal">12K+</div>
                <div className="hero__statLbl">Active Buyers</div>
              </div>
            </div>
          </div>

          <div className="hero__right">
            <div className="dash">
              <div className="dash__head">
                <div>
                  <div className="dash__kicker">Active Listings</div>
                  <div className="dash__big">2,847</div>
                </div>

                <div className="dash__trend">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></polyline>
                    <polyline points="16 7 22 7 22 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></polyline>
                  </svg>
                  <span>+12.4%</span>
                </div>
              </div>

              <div className="dash__list">
                <div className="dash__row">
                  <div className="dash__left">
                    <div className="dash__icon">S</div>
                    <div>
                      <div className="dash__name">SaaS</div>
                      <div className="dash__sub">$45K/mo</div>
                    </div>
                  </div>
                  <div className="dash__right">
                    <div className="dash__price">$1.2M</div>
                    <div className="dash__verified">
                      <span className="dot"></span> Verified
                    </div>
                  </div>
                </div>

                <div className="dash__row">
                  <div className="dash__left">
                    <div className="dash__icon">e</div>
                    <div>
                      <div className="dash__name">eCommerce</div>
                      <div className="dash__sub">$28K/mo</div>
                    </div>
                  </div>
                  <div className="dash__right">
                    <div className="dash__price">$680K</div>
                    <div className="dash__verified">
                      <span className="dot"></span> Verified
                    </div>
                  </div>
                </div>

                <div className="dash__row">
                  <div className="dash__left">
                    <div className="dash__icon">C</div>
                    <div>
                      <div className="dash__name">Content Site</div>
                      <div className="dash__sub">$12K/mo</div>
                    </div>
                  </div>
                  <div className="dash__right">
                    <div className="dash__price">$290K</div>
                  </div>
                </div>
              </div>

              <div className="toast" id="buyerToast" role="status" aria-live="polite">
                <div className="toast__icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
                <div>
                  <div className="toast__title">New Buyer Matched</div>
                  <div className="toast__sub">Just now</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
