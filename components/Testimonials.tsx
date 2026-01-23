"use client";

import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Founder, CloudMetrics",
    avatar: "S",
    quote:
      "Ellitess made selling my SaaS business seamless. The verification process gave buyers confidence, and I closed above asking price within 45 days.",
  },
  {
    name: "David Chen",
    role: "Serial Entrepreneur",
    avatar: "D",
    quote:
      "As a first-time buyer, the due diligence support was invaluable. Every financial claim was verified, making my decision straightforward.",
  },
  {
    name: "Marcus Rodriguez",
    role: "Investment Director, Nexus Ventures",
    avatar: "M",
    quote:
      "The escrow protection and legal support removed all the friction from our $800K acquisition. Highly professional from start to finish.",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="tst-section" id="testimonials">
      <div className="tst-container">
        <div className="tst-head">
          <span className="tst-pill">Testimonials</span>
          <h2 className="tst-title">Trusted by Entrepreneurs</h2>
          <p className="tst-subtitle">
            Hear from buyers and sellers who successfully closed deals on Ellitess.
          </p>
        </div>

        <div className="tst-sliderWrap">
          <div
            className="tst-track"
            style={{ transform: `translateX(-${active * 100}%)` }}
            aria-label="Testimonials slider"
          >
            {testimonials.map((item, index) => (
              <article className="tst-card" key={index}>
                <div className="tst-stars" aria-label="5 star rating">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>

                <p className="tst-quote">"{item.quote}"</p>

                <div className="tst-footer">
                  <div className="tst-avatar">{item.avatar}</div>
                  <div>
                    <div className="tst-name">{item.name}</div>
                    <div className="tst-role">{item.role}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="tst-dots" aria-label="Testimonials pagination">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`tst-dot ${active === index ? "active" : ""}`}
                onClick={() => setActive(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
