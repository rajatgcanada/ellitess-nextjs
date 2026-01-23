'use client';

export default function HowItWorks() {
  return (
    <section className="hiw-section" id="how-it-works">
      <div className="hiw-wrap">

        {/* Header */}
        <div className="hiw-head">
          <span className="hiw-pill">Simple Process</span>
          <h2 className="hiw-title">How It Works</h2>
          <p className="hiw-subtitle">
            From listing to closing, we've streamlined every step for a seamless experience.
          </p>
        </div>

        {/* Steps */}
        <div className="hiw-steps">
          <div className="hiw-track" id="hiwTrack">

            {/* STEP 1 */}
            <article className="hiw-step">
              <div className="hiw-iconWrap">
                <div className="hiw-iconCircle">
                  {/* Clipboard */}
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" stroke="currentColor" strokeWidth="2" />
                    <path
                      d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M12 11h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M12 16h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M8 11h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M8 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>

                <span className="hiw-num">01</span>
                <span className="hiw-line" aria-hidden="true" />
              </div>

              <h3 className="hiw-stepTitle">List Your Business</h3>
              <p className="hiw-stepText">
                Create a detailed listing with financials, metrics, and growth potential.
                Our team verifies every detail.
              </p>
            </article>

            {/* STEP 2 */}
            <article className="hiw-step">
              <div className="hiw-iconWrap">
                <div className="hiw-iconCircle">
                  {/* Users */}
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
                    <path
                      d="M22 21v-2a4 4 0 0 0-3-3.87"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M16 3.13a4 4 0 0 1 0 7.75"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <span className="hiw-num">02</span>
                <span className="hiw-line" aria-hidden="true" />
              </div>

              <h3 className="hiw-stepTitle">Get Verified Buyers</h3>
              <p className="hiw-stepText">
                Connect with pre-qualified, serious buyers who match your business
                profile and valuation expectations.
              </p>
            </article>

            {/* STEP 3 */}
            <article className="hiw-step">
              <div className="hiw-iconWrap">
                <div className="hiw-iconCircle">
                  {/* Handshake */}
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="m11 17 2 2a1 1 0 1 0 3-3"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="m21 3 1 11h-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path
                      d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path d="M3 4h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>

                <span className="hiw-num">03</span>
              </div>

              <h3 className="hiw-stepTitle">Close Securely</h3>
              <p className="hiw-stepText">
                Complete the transaction with escrow protection,
                legal support, and seamless asset transfer.
              </p>
            </article>

          </div>

          {/* Mobile dots */}
          <div className="hiw-dots" id="hiwDots" aria-hidden="true" />
        </div>

      </div>
    </section>
  );
}
