'use client';
import React, { useState } from 'react';
import Header from '@/components/Header';

const BuyerClient = () => {
  const [currentPage, setCurrentPage] = useState('buyer');

  const styles = `
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: Inter, system-ui, sans-serif; color: #0B1220; }
    
    .header { position: fixed; top: 0; left: 0; right: 0; z-index: 50; background: rgba(204,208,213,0.8); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(255,255,255,0.35); }
    .header-content { max-width: 1200px; margin: 0 auto; padding: 0 20px; height: 80px; display: flex; align-items: center; justify-content: space-between; }
    .logo { font-size: 24px; font-weight: 800; color: #0B1220; cursor: pointer; }
    .nav { display: flex; gap: 32px; }
    .nav-link { color: #0B1220; font-weight: 600; cursor: pointer; transition: color 0.2s; }
    .nav-link:hover { color: #3EA991; }
    .nav-link.active { color: #3EA991; }
    
    .btn { padding: 12px 24px; border-radius: 10px; font-weight: 600; border: none; cursor: pointer; transition: all 0.2s; display: inline-flex; align-items: center; gap: 8px; }
    .btn-primary { background: #0F172A; color: white; }
    .btn-ghost { background: transparent; border: 1px solid #E6EAEE; }
    .btn-large { height: 56px; padding: 0 32px; font-size: 18px; border-radius: 14px; }
    
    .hero { padding: 140px 20px 90px; background: linear-gradient(135deg, #0B1B2A 0%, #0E2236 45%, #0F2A36 100%); position: relative; overflow: hidden; }
    .hero-bg { position: absolute; inset: 0; opacity: 0.15; }
    .hero-blob { position: absolute; border-radius: 999px; filter: blur(80px); }
    .hero-blob-1 { width: 500px; height: 500px; background: #3EA991; left: -100px; top: 10%; }
    .hero-blob-2 { width: 600px; height: 600px; background: #22C55E; right: -150px; bottom: 10%; opacity: 0.7; }
    
    .hero-content { max-width: 1200px; margin: 0 auto; position: relative; z-index: 1; }
    .hero-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 60px; align-items: center; }
    
    .hero-pill { display: inline-flex; align-items: center; gap: 10px; padding: 10px 18px; border-radius: 999px; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.18); color: rgba(234,242,248,0.92); font-weight: 600; font-size: 14px; margin-bottom: 24px; }
    .hero-title { font-size: clamp(38px, 5vw, 56px); font-weight: 800; line-height: 1.15; color: white; margin-bottom: 20px; letter-spacing: -0.02em; }
    .hero-accent { color: #3EA991; }
    .hero-subtitle { font-size: clamp(16px, 2vw, 19px); line-height: 1.7; color: rgba(255,255,255,0.75); margin-bottom: 36px; max-width: 580px; }
    .hero-cta { display: flex; gap: 16px; flex-wrap: wrap; }
    
    .hero-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 36px; margin-top: 50px; }
    .stat-value { font-size: 42px; font-weight: 800; color: white; line-height: 1; }
    .stat-label { font-size: 15px; color: rgba(255,255,255,0.65); margin-top: 6px; }
    
    .hero-card { background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.18); border-radius: 22px; padding: 36px; backdrop-filter: blur(20px); }
    .feature-icon { width: 68px; height: 68px; border-radius: 16px; background: rgba(62,169,145,0.2); display: flex; align-items: center; justify-content: center; margin-bottom: 22px; }
    .feature-title { font-size: 26px; font-weight: 700; color: white; margin-bottom: 14px; line-height: 1.3; }
    .feature-text { color: rgba(255,255,255,0.75); line-height: 1.7; font-size: 16px; }
    
    .check-item { display: flex; align-items: center; gap: 12px; padding: 14px 16px; background: rgba(255,255,255,0.08); border-radius: 12px; margin-top: 12px; }
    .check-text { color: white; font-size: 15px; font-weight: 500; }
    
    .section { padding: 90px 20px; }
    .section-light { background: #F8F9FA; }
    .section-white { background: white; }
    .container { max-width: 1200px; margin: 0 auto; }
    
    .section-header { text-align: center; margin-bottom: 64px; }
    .section-pill { display: inline-block; padding: 8px 18px; border-radius: 999px; background: #EEF1F4; color: #5B6B7A; font-weight: 600; font-size: 14px; margin-bottom: 18px; }
    .section-title { font-size: clamp(32px, 4vw, 44px); font-weight: 800; color: #0B1220; margin-bottom: 16px; letter-spacing: -0.02em; }
    .section-subtitle { font-size: 18px; color: #5B6B7A; max-width: 720px; margin: 0 auto; line-height: 1.7; }
    
    .feature-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 28px; }
    .feature-card { background: white; border: 1px solid #E6EAEE; border-radius: 20px; padding: 34px; transition: all 0.3s; }
    .feature-card:hover { transform: translateY(-6px); box-shadow: 0 20px 50px rgba(11,18,32,0.12); }
    
    .card-icon { width: 60px; height: 60px; border-radius: 15px; background: rgba(62,169,145,0.12); display: flex; align-items: center; justify-content: center; margin-bottom: 22px; }
    .card-title { font-size: 22px; font-weight: 700; color: #0B1220; margin-bottom: 12px; }
    .card-text { color: #5B6B7A; line-height: 1.7; font-size: 16px; }
    
    .process-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 50px; }
    .process-step { text-align: center; }
    .step-number { width: 76px; height: 76px; border-radius: 999px; background: #3EA991; color: white; display: flex; align-items: center; justify-content: center; font-size: 32px; font-weight: 800; margin: 0 auto 26px; }
    .step-title { font-size: 23px; font-weight: 700; color: #0B1220; margin-bottom: 14px; }
    .step-text { color: #5B6B7A; line-height: 1.7; font-size: 16px; }
    
    .testimonial-card { background: white; border-radius: 24px; padding: 44px; box-shadow: 0 12px 40px rgba(11,18,32,0.1); max-width: 900px; margin: 0 auto; }
    .testimonial-text { font-size: 21px; line-height: 1.7; color: #0B1220; margin-bottom: 28px; font-style: italic; }
    .testimonial-author { display: flex; align-items: center; gap: 18px; }
    .author-avatar { width: 60px; height: 60px; border-radius: 999px; background: linear-gradient(135deg, #4FA4AE 0%, #42A68B 100%); color: white; display: flex; align-items: center; justify-content: center; font-size: 26px; font-weight: 700; }
    .author-name { font-weight: 700; color: #0B1220; font-size: 18px; }
    .author-role { color: #5B6B7A; font-size: 15px; margin-top: 4px; }
    
    .cta-section { background: radial-gradient(1200px 600px at 70% 80%, rgba(63,166,132,0.25), transparent 55%), linear-gradient(135deg, #0B1220 0%, #0E1A2B 45%, #0B2630 100%); padding: 110px 20px; text-align: center; }
    .cta-title { font-size: clamp(34px, 4vw, 50px); font-weight: 800; color: white; margin-bottom: 22px; letter-spacing: -0.02em; }
    .cta-subtitle { font-size: 20px; color: rgba(255,255,255,0.75); margin-bottom: 44px; max-width: 720px; margin-left: auto; margin-right: auto; line-height: 1.6; }
    .cta-buttons { display: flex; gap: 18px; justify-content: center; flex-wrap: wrap; }
    
    .btn-cta { background: #3EA991; color: white; padding: 20px 44px; font-size: 18px; font-weight: 600; border-radius: 14px; border: none; cursor: pointer; transition: all 0.3s; display: inline-flex; align-items: center; gap: 10px; }
    .btn-cta:hover { transform: translateY(-4px); box-shadow: 0 22px 50px rgba(62,169,145,0.35); }
    .btn-cta-ghost { background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.22); }
    
    @media (max-width: 968px) {
      .hero-grid { grid-template-columns: 1fr; gap: 40px; }
      .hero-stats { grid-template-columns: 1fr; gap: 24px; }
      .nav { display: none; }
      .feature-grid, .process-grid { grid-template-columns: 1fr; }
    }
  `;

  const BuyerPage = () => (
    <div>
        <Header/>
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-blob hero-blob-1"></div>
          <div className="hero-blob hero-blob-2"></div>
        </div>
        <div className="hero-content">
          <div className="hero-grid">
            <div>
              <div className="hero-pill">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="7"/>
                  <path d="m21 21-4.3-4.3"/>
                </svg>
                For Buyers
              </div>
              <h1 className="hero-title">
                Find Your Next <span className="hero-accent">Profitable Business</span>
              </h1>
              <p className="hero-subtitle">
                Access thousands of verified businesses for sale. From SaaS platforms to eCommerce stores, discover opportunities that match your investment goals with complete financial transparency.
              </p>
              <div className="hero-cta">
                <button className="btn btn-primary btn-large">
                  Browse Businesses
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14"/>
                    <path d="m12 5 7 7-7 7"/>
                  </svg>
                </button>
                <button className="btn btn-ghost btn-large">Schedule Call</button>
              </div>
              <div className="hero-stats">
                <div><div className="stat-value">2,847</div><div className="stat-label">Active Listings</div></div>
                <div><div className="stat-value">$150M+</div><div className="stat-label">Deals Closed</div></div>
                <div><div className="stat-value">98.5%</div><div className="stat-label">Success Rate</div></div>
              </div>
            </div>
            <div className="hero-card">
              <div className="feature-icon">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
                </svg>
              </div>
              <h3 className="feature-title">100% Verified Listings</h3>
              <p className="feature-text">
                Every business undergoes rigorous verification. All financials are audited by third-party professionals to ensure accuracy and authenticity.
              </p>
              <div className="check-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3EA991" strokeWidth="2.5">
                  <path d="M20 6 9 17l-5-5"/>
                </svg>
                <span className="check-text">Financial Audits</span>
              </div>
              <div className="check-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3EA991" strokeWidth="2.5">
                  <path d="M20 6 9 17l-5-5"/>
                </svg>
                <span className="check-text">Legal Verification</span>
              </div>
              <div className="check-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3EA991" strokeWidth="2.5">
                  <path d="M20 6 9 17l-5-5"/>
                </svg>
                <span className="check-text">Asset Validation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <span className="section-pill">Why Choose Ellitess</span>
            <h2 className="section-title">Everything You Need to Buy Confidently</h2>
            <p className="section-subtitle">
              Comprehensive support throughout your acquisition journey, from discovery to closing.
            </p>
          </div>
          <div className="feature-grid">
            {[
              { icon: '🔍', title: 'Verified Opportunities', text: 'Browse pre-vetted businesses with transparent financials and validated metrics.' },
              { icon: '📄', title: 'Due Diligence Support', text: 'Access comprehensive reports, analytics, and third-party audits.' },
              { icon: '🔒', title: 'Secure Transactions', text: 'Escrow protection, legal support, and seamless asset transfer.' },
              { icon: '💰', title: 'Financing Options', text: 'Connect with lenders offering acquisition financing.' },
              { icon: '🎯', title: 'Expert Advisors', text: 'Personalized guidance from experienced M&A professionals.' },
              { icon: '📊', title: 'Portfolio Tools', text: 'Track acquisitions with comprehensive dashboard tools.' }
            ].map((item, i) => (
              <div key={i} className="feature-card">
                <div className="card-icon" style={{fontSize: '28px'}}>{item.icon}</div>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <div className="section-header">
            <span className="section-pill">Simple Process</span>
            <h2 className="section-title">How It Works</h2>
          </div>
          <div className="process-grid">
            {[
              { num: '1', title: 'Browse & Discover', text: 'Search verified businesses and filter by industry, revenue, and metrics.' },
              { num: '2', title: 'Review Due Diligence', text: 'Access comprehensive documentation and third-party audits.' },
              { num: '3', title: 'Make an Offer', text: 'Submit offers and negotiate directly through our platform.' },
              { num: '4', title: 'Close the Deal', text: 'Complete purchase with escrow protection and legal support.' }
            ].map((step, i) => (
              <div key={i} className="process-step">
                <div className="step-number">{step.num}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-text">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="testimonial-card">
            <p className="testimonial-text">
              "As a first-time buyer, I was nervous about the process. Ellitess made everything transparent and simple. The due diligence reports were thorough, and their team guided me through every step. I closed on a SaaS business generating $28K/month in just 6 weeks."
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">D</div>
              <div>
                <div className="author-name">David Chen</div>
                <div className="author-role">Acquired SaaS Platform • $680K Deal</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Ready to Find Your Next Business?</h2>
          <p className="cta-subtitle">
            Join thousands of entrepreneurs who have successfully acquired businesses through Ellitess.
          </p>
          <div className="cta-buttons">
            <button className="btn-cta">
              Browse Businesses
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
            </button>
            <button className="btn-cta btn-cta-ghost">Talk to an Advisor</button>
          </div>
        </div>
      </section>
    </div>
  );

  const SellerPage = () => (
    <div>
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-blob hero-blob-1"></div>
          <div className="hero-blob hero-blob-2"></div>
        </div>
        <div className="hero-content">
          <div className="hero-grid">
            <div>
              <div className="hero-pill">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v20"/><path d="M17 6H9.5a3.5 3.5 0 0 0 0 7H14.5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
                For Sellers
              </div>
              <h1 className="hero-title">
                Sell Your Business for <span className="hero-accent">Maximum Value</span>
              </h1>
              <p className="hero-subtitle">
                Connect with 12,000+ verified buyers actively looking for businesses like yours. Get a free valuation, list confidentially, and close your exit with complete support.
              </p>
              <div className="hero-cta">
                <button className="btn btn-primary btn-large">
                  Get Free Valuation
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                  </svg>
                </button>
                <button className="btn btn-ghost btn-large">View Success Stories</button>
              </div>
              <div className="hero-stats">
                <div><div className="stat-value">500+</div><div className="stat-label">Businesses Sold</div></div>
                <div><div className="stat-value">45 Days</div><div className="stat-label">Avg. Time to Sale</div></div>
                <div><div className="stat-value">2.8x</div><div className="stat-label">Revenue Multiple</div></div>
              </div>
            </div>
            <div className="hero-card">
              <div className="feature-icon">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3 className="feature-title">Reach Serious Buyers</h3>
              <p className="feature-text">
                Your listing is shown to 12,400+ pre-qualified buyers actively searching for businesses in your niche. All inquiries are verified before contact.
              </p>
              <div className="check-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3EA991" strokeWidth="2.5">
                  <path d="M20 6 9 17l-5-5"/>
                </svg>
                <span className="check-text">12,400+ Active Buyers</span>
              </div>
              <div className="check-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3EA991" strokeWidth="2.5">
                  <path d="M20 6 9 17l-5-5"/>
                </svg>
                <span className="check-text">Confidential Listings</span>
              </div>
              <div className="check-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3EA991" strokeWidth="2.5">
                  <path d="M20 6 9 17l-5-5"/>
                </svg>
                <span className="check-text">Qualified Inquiries Only</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <span className="section-pill">Why Sell With Us</span>
            <h2 className="section-title">Everything You Need for a Successful Exit</h2>
            <p className="section-subtitle">
              We handle every aspect of your sale, from valuation to closing.
            </p>
          </div>
          <div className="feature-grid">
            {[
              { icon: '📊', title: 'Free Business Valuation', text: 'Professional valuation based on industry benchmarks and market conditions.' },
              { icon: '👥', title: 'Qualified Buyer Network', text: 'Access 12,000+ vetted buyers with verified funds and serious intent.' },
              { icon: '🛡️', title: 'Confidential Process', text: 'Protect your business identity until you approve buyer access.' },
              { icon: '💼', title: 'Marketing Support', text: 'Professional listing creation with photos and compelling descriptions.' },
              { icon: '🤝', title: 'Negotiation Help', text: 'Expert advisors assist with offers and deal structuring.' },
              { icon: '✅', title: 'Closing Support', text: 'Legal documentation, escrow, and complete asset transfer assistance.' }
            ].map((item, i) => (
              <div key={i} className="feature-card">
                <div className="card-icon" style={{fontSize: '28px'}}>{item.icon}</div>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <div className="section-header">
            <span className="section-pill">Simple Process</span>
            <h2 className="section-title">How to Sell Your Business</h2>
          </div>
          <div className="process-grid">
            {[
              { num: '1', title: 'Get Valued', text: 'Submit your business details for a free professional valuation.' },
              { num: '2', title: 'Create Listing', text: 'We help craft a compelling, confidential listing with all details.' },
              { num: '3', title: 'Review Offers', text: 'Receive qualified offers from serious, pre-vetted buyers.' },
              { num: '4', title: 'Close Deal', text: 'Complete sale with escrow protection and full legal support.' }
            ].map((step, i) => (
              <div key={i} className="process-step">
                <div className="step-number">{step.num}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-text">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="testimonial-card">
            <p className="testimonial-text">
              "Ellitess made selling my SaaS business seamless. The verification process gave buyers confidence, and I closed above asking price within 45 days. Their team handled everything professionally from start to finish."
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">S</div>
              <div>
                <div className="author-name">Sarah Mitchell</div>
                <div className="author-role">Sold SaaS Platform • $1.2M Deal</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Ready to Sell Your Business?</h2>
          <p className="cta-subtitle">
            Get your free valuation and connect with thousands of qualified buyers today.
          </p>
          <div className="cta-buttons">
            <button className="btn-cta">
              Get Free Valuation
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
            </button>
            <button className="btn-cta btn-cta-ghost">Schedule a Call</button>
          </div>
        </div>
      </section>
    </div>
  );

  return (
    <>
      <style>{styles}</style>
      
      <header className="header">
        <div className="header-content">
          <div className="logo" onClick={() => setCurrentPage('buyer')}>ellitess</div>
          <nav className="nav">
            <span className={`nav-link ${currentPage === 'buyer' ? 'active' : ''}`} onClick={() => setCurrentPage('buyer')}>Buyers</span>
            <span className={`nav-link ${currentPage === 'seller' ? 'active' : ''}`} onClick={() => setCurrentPage('seller')}>Sellers</span>
            <span className="nav-link">Pricing</span>
          </nav>
          <div style={{display: 'flex', gap: '12px'}}>
            <button className="btn btn-ghost">Sign In</button>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </header>

      {currentPage === 'buyer' ? <BuyerPage /> : <SellerPage />}
    </>
  );
};

export default BuyerClient;