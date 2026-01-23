"use client";

export default function Footer() {
  return (
    <footer className="el-footer" id="site-footer">
      <div className="el-footer__inner">

        <div className="el-footer__grid">

          {/* BRAND */}
          <div className="el-footer__brand">
            <a className="el-footer__logo" href="/" aria-label="Ellitess Home">
              <img
                className="el-footer__logoImg"
                src="/img/white-logo.png"
                alt="Ellitess"
                loading="lazy"
              />
            </a>

            <p className="el-footer__desc">
              The trusted marketplace for buying,selling and investing in profitable online and offline
              businesses. Verified listings, secure transactions, expert support.
            </p>

            <div className="el-footer__trust">
              <span className="el-footer__trustIcon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>Secure & Verified Transactions</span>
            </div>
          </div>

          {/* LINKS */}
          <div className="el-footer__col el-footer__col--desktop">
            <h4 className="el-footer__title">Useful Link</h4>
            <ul className="el-footer__list">
              <li><a href="/buyer">Buyer</a></li>
              <li><a href="/seller">Seller</a></li>
              <li><a href="/investment">Investment</a></li>
              <li><a href="/buyer-pricing">Buyer Pricing</a></li>
              <li><a href="/seller-pricing">Seller Pricing</a></li>
            </ul>
          </div>

          <div className="el-footer__col el-footer__col--desktop">
            <h4 className="el-footer__title">Quick Links</h4>
            <ul className="el-footer__list">
              <li><a className="js-open-login" href="#">Login</a></li>
              <li><a className="js-open-signup" href="#">Register</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </div>

          {/* SUBSCRIBE */}
          <div className="el-footer__subscribe">
            <h4 className="el-footer__title el-footer__title--white">Subscribe</h4>
            <p className="el-footer__subDesc">
              Subscribe our newsletter to get updated the latest news
            </p>

            <form className="el-footer__form">
              <input
                className="el-footer__input"
                type="email"
                placeholder="Enter Mail"
                required
              />
              <button className="el-footer__btn" type="submit">
                Subscribe Now
              </button>
            </form>
          </div>

        </div>

        <div className="el-footer__bottom">
          <p>Copyright © 2026 Ellitess. All rights reserved.</p>

          <div className="el-footer__bottomLinks">
            <a href="/terms-condition">Terms</a>
            <a href="/privacy-policy">Privacy</a>
            <a href="/cookie-policy">Cookies</a>
            <a href="/refund-policy">Refund</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
