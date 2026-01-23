'use client';

import Link from 'next/link';

export default function TriCards() {
  return (
    <section className="tri-section" id="tri-cards">
      <div className="tri-wrap">
        <div className="tri-grid" id="triTrack">

          {/* CARD 1 – Sellers */}
          <article className="tri-card tri-card--light">
            <div className="tri-top">
              <div className="tri-badge">
                <span className="tri-badgeIcon tri-badgeIcon--mint" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M12 2v20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path
                      d="M17 6H9.5a3.5 3.5 0 0 0 0 7H14.5a3.5 3.5 0 0 1 0 7H6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="tri-badgeText tri-badgeText--mint">For Sellers</span>
              </div>
            </div>

            <h3 className="tri-title">Exit with Confidence</h3>
            <p className="tri-desc">
              List your business with the marketplace trusted by thousands of entrepreneurs.
              Get maximum value with verified buyers.
            </p>

            <ul className="tri-list">
              {[
                'Free business valuation',
                'Access to 12,000+ verified buyers',
                'Secure escrow & legal support',
              ].map((item, i) => (
                <li className="tri-li" key={i}>
                  <span className="tri-liIcon tri-liIcon--mint" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path
                        d="M20 6 9 17l-5-5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <Link href="#list-business" className="tri-btn tri-btn--solid js-open-login">
              List Your Business
              <span className="tri-arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path
                    d="m12 5 7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </article>

          {/* CARD 2 – Buyers */}
          <article className="tri-card tri-card--dark">
            <div className="tri-top">
              <div className="tri-badge">
                <span className="tri-badgeIcon tri-badgeIcon--dark" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                    <path d="m21 21-4.3-4.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
                <span className="tri-badgeText tri-badgeText--dark">For Buyers</span>
              </div>
            </div>

            <h3 className="tri-title tri-title--dark">Discover Vetted Opportunities</h3>
            <p className="tri-desc tri-desc--dark">
              Browse thousands of verified businesses with transparent financials.
              Find your next acquisition with confidence.
            </p>

            <ul className="tri-list tri-list--dark">
              {[
                'Verified financials & metrics',
                'Due diligence support',
                'Acquisition financing options',
              ].map((item, i) => (
                <li className="tri-li tri-li--dark" key={i}>
                  <span className="tri-liIcon tri-liIcon--dark" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M4 20V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M10 20V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M16 20v-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M22 20H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <Link href="#browse-listings" className="tri-btn tri-btn--outlineDark js-open-login">
              Browse Listings
              <span className="tri-arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path
                    d="m12 5 7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </article>

          {/* CARD 3 – Investors */}
          <article className="tri-card tri-card--teal">
            <div className="tri-top">
              <div className="tri-badge">
                <span className="tri-badgeIcon tri-badgeIcon--teal" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                    <path
                      d="M12 7v6l4 2"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="tri-badgeText tri-badgeText--teal">For Investors</span>
              </div>
            </div>

            <h3 className="tri-title tri-title--teal">Invest in Growth</h3>
            <p className="tri-desc tri-desc--teal">
              Access curated investment opportunities in proven businesses.
              Diversify your portfolio with passive income assets.
            </p>

            <ul className="tri-list tri-list--teal">
              {[
                'Curated high-yield opportunities',
                'Fractional ownership options',
                'Portfolio management tools',
              ].map((item, i) => (
                <li className="tri-li tri-li--teal" key={i}>
                  <span className="tri-liDot" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <Link href="#explore-investments" className="tri-btn tri-btn--ghostTeal js-open-login">
              Explore Investments
              <span className="tri-arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path
                    d="m12 5 7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </article>

        </div>

        {/* Mobile dots */}
        <div className="tri-dots" id="triDots" aria-hidden="true" />
      </div>
    </section>
  );
}
