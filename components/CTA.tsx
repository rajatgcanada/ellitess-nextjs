"use client";
export default function CTA() {
  return (
    <section className="cta" id="cta">
      <div className="cta__container">
        <div className="cta__content">
          <h2 className="cta__title">Ready to Make Your Move?</h2>

          <p className="cta__subtitle">
            Whether you're looking to sell your business or find your next acquisition,
            Ellitess provides the trusted platform you need.
          </p>

          <div className="cta__actions">
            <a
              className="btn btn--primary js-open-login"
              href="#browse"
              aria-label="Browse Businesses"
            >
              Browse Businesses
              <span className="btn__icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </span>
            </a>

            <a
              className="btn btn--ghost js-open-login"
              href="#list"
              aria-label="List Your Business"
            >
              List Your Business
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
