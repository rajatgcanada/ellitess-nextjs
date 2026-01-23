'use client';

import Link from 'next/link';

export default function FeaturedOpportunities() {
  return (
    <section className="fo-section" id="featured">
      <div className="fo-wrap">

        {/* Header */}
        <div className="fo-head">
          <div className="fo-head-left">
            <span className="fo-pill">Marketplace</span>
            <h2 className="fo-title">Featured Opportunities</h2>
            <p className="fo-subtitle">
              Discover verified businesses ready for acquisition
            </p>
          </div>

          <Link href="#" className="fo-topbtn js-open-login">
            View All Listings
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7 7h10v10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M7 17 17 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* Cards */}
        <div className="fo-cards">
          <div className="fo-track" id="foTrack">

            {/* CARD TEMPLATE */}
            {[
              {
                title: 'Established SaaS Platform',
                category: 'SaaS',
                revenue: '$45,000',
                profit: '$32,000',
                price: '$1,200,000',
                multiple: '2.7x',
                trending: true,
                verified: true,
                link: '#listing-saas-details'
              },
              {
                title: 'Premium eCommerce Store',
                category: 'eCommerce',
                revenue: '$28,500',
                profit: '$18,200',
                price: '$680,000',
                multiple: '3.1x',
                verified: true,
                link: '#listing-ecom-details'
              },
              {
                title: 'Content & Affiliate Website',
                category: 'Content',
                revenue: '$12,800',
                profit: '$10,500',
                price: '$290,000',
                multiple: '2.3x',
                verified: true,
                link: '#listing-content-details'
              },
              {
                title: 'Mobile App Portfolio',
                category: 'Apps',
                revenue: '$35,000',
                profit: '$28,000',
                price: '$950,000',
                multiple: '2.8x',
                trending: true,
                verified: true,
                link: '#listing-apps-details'
              },
              {
                title: 'B2B Lead Gen Agency',
                category: 'Agency',
                revenue: '$52,000',
                profit: '$38,000',
                price: '$1,450,000',
                multiple: '3.2x',
                link: '#listing-agency-details'
              },
              {
                title: 'Subscription Box Business',
                category: 'eCommerce',
                revenue: '$22,000',
                profit: '$14,500',
                price: '$520,000',
                multiple: '3.0x',
                verified: true,
                link: '#listing-subscription-details'
              }
            ].map((item, index) => (
              <article className="fo-card" key={index}>
                <Link href="#" className="fo-cardlink js-open-login" aria-label={`Open ${item.title}`} />

                <div className="fo-card-top">
                  <div className="fo-badges">
                    <span className="fo-badge fo-badge--cat">{item.category}</span>
                  </div>

                  <div className="fo-flags">
                    {item.trending && (
                      <span className="fo-flag fo-flag--trend">Trending</span>
                    )}
                    {item.verified && (
                      <span className="fo-flag fo-flag--ver">Verified</span>
                    )}
                  </div>
                </div>

                <div className="fo-card-mid">
                  <h3 className="fo-card-title">{item.title}</h3>

                  <div className="fo-grid2">
                    <div className="fo-metric">
                      <div className="fo-k">Monthly Revenue</div>
                      <div className="fo-v">{item.revenue}</div>
                    </div>
                    <div className="fo-metric">
                      <div className="fo-k">Monthly Profit</div>
                      <div className="fo-v">{item.profit}</div>
                    </div>
                  </div>

                  <div className="fo-divider" />

                  <div className="fo-bottomrow">
                    <div>
                      <div className="fo-k">Asking Price</div>
                      <div className="fo-price">{item.price}</div>
                    </div>
                    <div className="fo-right">
                      <div className="fo-k">Multiple</div>
                      <div className="fo-multi">{item.multiple}</div>
                    </div>
                  </div>
                </div>

                <div className="fo-card-foot">
                  <Link href={item.link} className="fo-detailbtn js-open-login">
                    View Details
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M7 7h10v10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M7 17 17 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Mobile dots */}
          <div className="fo-dots" id="foDots" aria-hidden="true" />
        </div>

      </div>
    </section>
  );
}
