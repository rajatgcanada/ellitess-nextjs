'use client';
import React, { useState, useEffect } from 'react';
import { Shield, TrendingUp, Users, DollarSign, FileCheck, Lock, Headphones, CheckCircle, ArrowRight, BarChart3, Clock, Zap, Star, Award } from 'lucide-react';
import Header from '@/components/Header';


export default function SellerClient() {

  const [activeStep, setActiveStep] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowToast(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { value: "98.5%", label: "Success Rate" },
    { value: "$150M+", label: "Total Value Sold" },
    { value: "500+", label: "Businesses Sold" },
    { value: "45 Days", label: "Average Sale Time" }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Maximum Valuation",
      description: "Get the highest possible price for your business with our expert valuation service and access to 12,000+ verified buyers."
    },
    {
      icon: Shield,
      title: "Secure & Confidential",
      description: "Your business information remains confidential until you approve disclosure. Bank-grade security protects all your data."
    },
    {
      icon: Clock,
      title: "Fast Sale Process",
      description: "Close deals in as little as 30-45 days with our streamlined process and pre-qualified buyer network."
    },
    {
      icon: Headphones,
      title: "Expert Guidance",
      description: "Dedicated advisors support you through valuation, marketing, negotiation, and closing every step of the way."
    },
    {
      icon: Users,
      title: "Pre-Qualified Buyers",
      description: "Connect only with serious, financially verified buyers who are ready to make competitive offers."
    },
    {
      icon: FileCheck,
      title: "Complete Due Diligence",
      description: "We handle all paperwork, legal documentation, and due diligence to ensure a smooth, compliant transaction."
    }
  ];

  const process = [
    {
      number: "01",
      title: "Free Business Valuation",
      description: "Submit your business details and receive a professional valuation report within 24 hours at no cost.",
      icon: BarChart3
    },
    {
      number: "02",
      title: "Create Your Listing",
      description: "Our team helps you create a compelling, verified listing that highlights your business strengths and attracts serious buyers.",
      icon: FileCheck
    },
    {
      number: "03",
      title: "Connect with Buyers",
      description: "We match you with pre-qualified buyers and facilitate secure communications while maintaining your confidentiality.",
      icon: Users
    },
    {
      number: "04",
      title: "Negotiate & Close",
      description: "Receive offers, negotiate terms with our support, and close the deal securely with escrow protection and legal assistance.",
      icon: CheckCircle
    }
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Former SaaS Founder",
      company: "CloudMetrics",
      rating: 5,
      text: "Ellitess made selling my SaaS business seamless. The verification process gave buyers confidence, and I closed above asking price within 45 days. Their team handled everything professionally."
    },
    {
      name: "James Rodriguez",
      role: "eCommerce Entrepreneur",
      company: "Premium Goods Co",
      rating: 5,
      text: "I was skeptical about selling online, but Ellitess exceeded my expectations. They found serious buyers, handled negotiations, and the escrow service made everything secure. Highly recommended."
    },
    {
      name: "Emily Chen",
      role: "Agency Owner",
      company: "Digital Growth Agency",
      rating: 5,
      text: "The support team was incredible. They guided me through valuation, helped create a compelling listing, and found the perfect buyer who shared my vision for the company's future."
    }
  ];

  const faqs = [
    {
      q: "How much does it cost to list my business?",
      a: "Creating your listing is completely free. We only charge a success fee when your business sells, typically 3-5% of the final sale price depending on the transaction value."
    },
    {
      q: "How long does it take to sell a business?",
      a: "On average, businesses sell within 45-90 days on our platform. However, this varies based on your industry, asking price, and business performance. Some businesses sell in as little as 30 days."
    },
    {
      q: "Will my information remain confidential?",
      a: "Absolutely. Your business details remain anonymous until you approve sharing with specific buyers. We use NDAs and strict confidentiality protocols to protect your information."
    },
    {
      q: "How do you verify buyers?",
      a: "All buyers undergo financial verification, identity checks, and must sign NDAs before viewing detailed business information. We ensure only serious, qualified buyers can contact you."
    },
    {
      q: "What types of businesses can I sell?",
      a: "We support all types of online and offline businesses including SaaS, eCommerce, content sites, mobile apps, agencies, local businesses, and more. If it generates revenue, we can help you sell it."
    },
    {
      q: "Do you help with business valuation?",
      a: "Yes! Every seller receives a free professional valuation within 24 hours. Our experts analyze your financials, market position, and growth potential to determine fair market value."
    }
  ];

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#F8F9FA', minHeight: '100vh' }}>
      {/* Header */}
      <Header/>
  {/* Hero Section */}

      <section style={{
        position: 'relative',
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'radial-gradient(1200px 600px at 70% 80%, rgba(63,166,132,.25), rgba(0,0,0,0) 55%), radial-gradient(900px 500px at 20% 10%, rgba(255,255,255,.08), rgba(0,0,0,0) 45%), linear-gradient(135deg, #0b1220 0%, #0e1a2b 45%, #0b2630 100%)',
        color: '#EAF2F8'
      }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.08, backgroundImage: 'linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        
        <div style={{ position: 'relative', zIndex: 1, width: 'min(1200px, calc(100% - 40px))', margin: '0 auto', padding: '80px 0' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 20px',
              borderRadius: '999px',
              background: 'rgba(255,255,255,.08)',
              border: '1px solid rgba(255,255,255,.18)',
              color: 'rgba(234,242,248,.92)',
              fontWeight: 600,
              fontSize: '14px',
              marginBottom: '24px'
            }}>
              <Award size={16} />
              Trusted by 500+ Successful Sellers
            </div>

            <h1 style={{
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              color: '#FFFFFF',
              margin: '0 0 20px'
            }}>
              Sell Your Business for <span style={{ color: '#3EA991' }}>Maximum Value</span>
            </h1>

            <p style={{
              fontSize: 'clamp(16px, 1.8vw, 20px)',
              lineHeight: 1.7,
              color: 'rgba(234,242,248,.75)',
              fontWeight: 500,
              margin: '0 0 36px',
              maxWidth: '680px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              Connect with 12,000+ verified buyers, get expert valuation, and close your deal securely in as little as 45 days. No upfront costs, only pay when you sell.
            </p>

            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '48px' }}>
              <button style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                height: '58px',
                padding: '0 32px',
                borderRadius: '14px',
                background: '#3FA684',
                color: '#ffffff',
                fontWeight: 600,
                fontSize: '18px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 16px 32px rgba(0,0,0,.25)',
                transition: 'transform .2s ease'
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                Get Free Valuation
                <ArrowRight size={18} />
              </button>
              
              <button style={{
                height: '58px',
                padding: '0 32px',
                borderRadius: '14px',
                background: 'rgba(255,255,255,.06)',
                border: '1px solid rgba(255,255,255,.22)',
                color: '#ffffff',
                fontWeight: 600,
                fontSize: '18px',
                cursor: 'pointer',
                transition: 'all .2s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,.10)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,.32)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,.06)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,.22)';
              }}
              >
                How It Works
              </button>
            </div>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '24px', marginTop: '48px' }}>
              {stats.map((stat, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '36px', fontWeight: 800, color: '#fff', marginBottom: '6px' }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '16px', color: 'rgba(234,242,248,.65)', fontWeight: 500 }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Sell with Ellitess */}
      <section style={{ padding: '90px 0', background: '#ffffff' }}>
        <div style={{ width: 'min(1200px, calc(100% - 40px))', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span style={{
              display: 'inline-block',
              padding: '6px 14px',
              borderRadius: '999px',
              background: '#EEF1F4',
              color: '#5B6B7A',
              fontWeight: 500,
              fontSize: '14px',
              marginBottom: '14px'
            }}>
              Why Choose Ellitess
            </span>
            <h2 style={{
              fontSize: 'clamp(28px, 3.5vw, 42px)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: '#0B1220',
              margin: '0 0 16px'
            }}>
              The Trusted Way to Sell Your Business
            </h2>
            <p style={{
              fontSize: '18px',
              lineHeight: 1.7,
              color: '#5B6B7A',
              fontWeight: 500,
              maxWidth: '720px',
              margin: '0 auto'
            }}>
              We make selling your business simple, secure, and profitable. Our proven process has helped hundreds of entrepreneurs achieve successful exits.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '28px' }}>
            {benefits.map((benefit, i) => (
              <div key={i} style={{
                background: '#fff',
                border: '1px solid #E6EAEE',
                borderRadius: '16px',
                padding: '32px',
                boxShadow: '0 10px 26px rgba(11,18,32,.06)',
                transition: 'transform .2s ease, box-shadow .2s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(11,18,32,.12)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 26px rgba(11,18,32,.06)';
              }}
              >
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '14px',
                  background: 'rgba(62,169,145,.12)',
                  color: '#3EA991',
                  display: 'grid',
                  placeItems: 'center',
                  marginBottom: '20px'
                }}>
                  <benefit.icon size={28} />
                </div>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 600,
                  color: '#0B1220',
                  margin: '0 0 12px'
                }}>
                  {benefit.title}
                </h3>
                <p style={{
                  fontSize: '16px',
                  lineHeight: 1.7,
                  color: '#5B6B7A',
                  margin: 0,
                  fontWeight: 400
                }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ padding: '90px 0', background: '#F8F9FA' }}>
        <div style={{ width: 'min(1200px, calc(100% - 40px))', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span style={{
              display: 'inline-block',
              padding: '6px 14px',
              borderRadius: '999px',
              background: '#EEF1F4',
              color: '#5B6B7A',
              fontWeight: 500,
              fontSize: '14px',
              marginBottom: '14px'
            }}>
              Simple Process
            </span>
            <h2 style={{
              fontSize: 'clamp(28px, 3.5vw, 42px)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: '#0B1220',
              margin: '0 0 16px'
            }}>
              How to Sell Your Business
            </h2>
            <p style={{
              fontSize: '18px',
              lineHeight: 1.7,
              color: '#5B6B7A',
              fontWeight: 500,
              maxWidth: '720px',
              margin: '0 auto'
            }}>
              From valuation to closing, we guide you through every step of selling your business for maximum value.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '40px' }}>
            {process.map((step, i) => (
              <div key={i} style={{ textAlign: 'center', position: 'relative' }}>
                <div style={{ position: 'relative', display: 'inline-flex', marginBottom: '24px' }}>
                  <div style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '999px',
                    background: '#EEF1F4',
                    display: 'grid',
                    placeItems: 'center',
                    color: '#3EA991'
                  }}>
                    <step.icon size={48} />
                  </div>
                  <div style={{
                    position: 'absolute',
                    top: '-8px',
                    right: '-8px',
                    width: '44px',
                    height: '44px',
                    borderRadius: '999px',
                    background: '#0B1220',
                    color: '#fff',
                    display: 'grid',
                    placeItems: 'center',
                    fontWeight: 600,
                    fontSize: '16px'
                  }}>
                    {step.number}
                  </div>
                </div>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 600,
                  color: '#0B1220',
                  margin: '0 0 12px'
                }}>
                  {step.title}
                </h3>
                <p style={{
                  fontSize: '16px',
                  lineHeight: 1.7,
                  color: '#5B6B7A',
                  margin: 0,
                  fontWeight: 400
                }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '90px 0', background: '#ffffff' }}>
        <div style={{ width: 'min(1200px, calc(100% - 40px))', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span style={{
              display: 'inline-block',
              padding: '6px 14px',
              borderRadius: '999px',
              background: '#EEF1F4',
              color: '#5B6B7A',
              fontWeight: 500,
              fontSize: '14px',
              marginBottom: '14px'
            }}>
              Success Stories
            </span>
            <h2 style={{
              fontSize: 'clamp(28px, 3.5vw, 42px)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: '#0B1220',
              margin: '0 0 16px'
            }}>
              Trusted by Successful Sellers
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            {testimonials.map((test, i) => (
              <div key={i} style={{
                background: '#fff',
                border: '1px solid #E6EAEE',
                borderRadius: '16px',
                padding: '32px',
                boxShadow: '0 10px 26px rgba(11,18,32,.06)',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{ color: '#3FA684', marginBottom: '16px', fontSize: '18px' }}>
                  {'★'.repeat(test.rating)}
                </div>
                <p style={{
                  fontSize: '16px',
                  lineHeight: 1.7,
                  color: '#0B1220',
                  fontWeight: 400,
                  margin: '0 0 24px',
                  flex: 1
                }}>
                  "{test.text}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '20px', borderTop: '1px solid #EEF2F6' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '999px',
                    background: '#F2F4F6',
                    color: '#0B1220',
                    fontWeight: 800,
                    display: 'grid',
                    placeItems: 'center'
                  }}>
                    {test.name[0]}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: '#0B1220', fontSize: '16px' }}>
                      {test.name}
                    </div>
                    <div style={{ color: '#667085', fontSize: '14px', marginTop: '2px' }}>
                      {test.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '90px 0', background: '#F8F9FA' }}>
        <div style={{ width: 'min(900px, calc(100% - 40px))', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span style={{
              display: 'inline-block',
              padding: '6px 14px',
              borderRadius: '999px',
              background: '#EEF1F4',
              color: '#5B6B7A',
              fontWeight: 500,
              fontSize: '14px',
              marginBottom: '14px'
            }}>
              FAQ
            </span>
            <h2 style={{
              fontSize: 'clamp(28px, 3.5vw, 42px)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: '#0B1220',
              margin: '0 0 16px'
            }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{
                background: '#fff',
                border: '1px solid #E6EAEE',
                borderRadius: '14px',
                overflow: 'hidden'
              }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: '100%',
                    padding: '24px',
                    background: 'transparent',
                    border: 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  <span style={{ fontSize: '18px', fontWeight: 600, color: '#0B1220' }}>
                    {faq.q}
                  </span>
                  <span style={{
                    fontSize: '24px',
                    color: '#5B6B7A',
                    transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0)',
                    transition: 'transform .2s ease'
                  }}>
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div style={{
                    padding: '0 24px 24px',
                    fontSize: '16px',
                    lineHeight: 1.7,
                    color: '#5B6B7A',
                    fontWeight: 400
                  }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: '100px 0',
        background: 'radial-gradient(1200px 600px at 70% 80%, rgba(63,166,132,.25), rgba(0,0,0,0) 55%), radial-gradient(900px 500px at 20% 10%, rgba(255,255,255,.08), rgba(0,0,0,0) 45%), linear-gradient(135deg, #0b1220 0%, #0e1a2b 45%, #0b2630 100%)',
        color: '#fff'
      }}>
        <div style={{ width: 'min(900px, calc(100% - 40px))', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            margin: '0 0 20px',
            color: '#fff'
          }}>
            Ready to Sell Your Business?
          </h2>
          <p style={{
            fontSize: '18px',
            lineHeight: 1.7,
            color: 'rgba(255,255,255,.75)',
            fontWeight: 500,
            margin: '0 0 36px',
            maxWidth: '680px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Get your free business valuation today and connect with thousands of verified buyers ready to make competitive offers.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              height: '58px',
              padding: '0 32px',
              borderRadius: '14px',
              background: '#3FA684',
              color: '#ffffff',
              fontWeight: 600,
              fontSize: '18px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 16px 32px rgba(0,0,0,.25)',
              transition: 'transform .2s ease'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              Get Free Valuation
              <ArrowRight size={18} />
            </button>
            
            <button style={{
              height: '58px',
              padding: '0 32px',
              borderRadius: '14px',
              background: 'rgba(255,255,255,.06)',
              border: '1px solid rgba(255,255,255,.22)',
              color: '#ffffff',
              fontWeight: 600,
              fontSize: '18px',
              cursor: 'pointer',
              transition: 'all .2s ease'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,.10)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,.32)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,.06)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,.22)';
            }}
            >
              Talk to an Expert
            </button>
          </div>
        </div>
      </section>

      {/* Toast Notification */}
      {showToast && (
        <div style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          background: '#fff',
          border: '1px solid #E6EAEE',
          borderRadius: '12px',
          padding: '16px 20px',
          boxShadow: '0 10px 40px rgba(11,18,32,.15)',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          maxWidth: '380px',
          zIndex: 1000,
          animation: 'slideIn 0.3s ease'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '999px',
            background: 'rgba(62,169,145,.12)',
            color: '#3EA991',
            display: 'grid',
            placeItems: 'center',
            flexShrink: 0
          }}>
            <CheckCircle size={20} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 600, color: '#0B1220', fontSize: '14px', marginBottom: '2px' }}>
              John just listed his business
            </div>
            <div style={{ fontSize: '13px', color: '#667085' }}>
              SaaS company • $2.4M asking
            </div>
          </div>
          <button
            onClick={() => setShowToast(false)}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#9CA3AF',
              cursor: 'pointer',
              padding: '4px',
              fontSize: '18px',
              lineHeight: 1
            }}
          >
            ×
          </button>
        </div>
      )}

      <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(400px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        * {
          box-sizing: border-box;
        }
        
        body {
          margin: 0;
          padding: 0;
        }
      `}</style>
    </div>
  );
}