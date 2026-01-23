'use client';

import { useState } from 'react';
import { TrendingUp, Shield, DollarSign, PieChart, Users, BarChart3, Clock, ArrowRight, Star, Award, Target, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';

interface InvestmentDeal {
  id: number;
  category: string;
  title: string;
  minInvestment: number;
  targetRaise: number;
  currentRaise: number;
  investors: number;
  roi: string;
  term: string;
  revenue: number;
  growth: string;
  verified: boolean;
  featured: boolean;
  highlights: string[];
  risk: string;
}

interface Benefit {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

interface Stat {
  value: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

export default function InvestmentClient() {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedDeal, setSelectedDeal] = useState<InvestmentDeal | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const investmentDeals: InvestmentDeal[] = [
    {
      id: 1,
      category: 'SaaS',
      title: 'AI-Powered Analytics Platform',
      minInvestment: 100000,
      targetRaise: 100000,
      currentRaise: 100000,
      investors: 1,
      roi: '5% Equity',
      term: 'Equity Stake',
      revenue: 85000,
      growth: '+156%',
      verified: true,
      featured: true,
      highlights: ['Recurring revenue', 'Enterprise clients', 'AI technology'],
      risk: 'Single Investor Deal'
    },
    {
      id: 2,
      category: 'eCommerce',
      title: 'Sustainable Fashion Marketplace',
      minInvestment: 250000,
      targetRaise: 250000,
      currentRaise: 250000,
      investors: 1,
      roi: '12% Equity',
      term: 'Equity Stake',
      revenue: 52000,
      growth: '+89%',
      verified: true,
      featured: false,
      highlights: ['Growing market', 'Ethical brand', 'Direct-to-consumer'],
      risk: 'Single Investor Deal'
    },
    {
      id: 3,
      category: 'Mobile App',
      title: 'Health & Wellness Subscription',
      minInvestment: 150000,
      targetRaise: 150000,
      currentRaise: 150000,
      investors: 1,
      roi: '8% Equity',
      term: 'Equity Stake',
      revenue: 38000,
      growth: '+124%',
      verified: true,
      featured: true,
      highlights: ['Subscription model', 'High retention', 'Scalable'],
      risk: 'Single Investor Deal'
    },
    {
      id: 4,
      category: 'Content',
      title: 'Educational Content Network',
      minInvestment: 180000,
      targetRaise: 180000,
      currentRaise: 180000,
      investors: 1,
      roi: '10% Equity',
      term: 'Equity Stake',
      revenue: 68000,
      growth: '+72%',
      verified: true,
      featured: false,
      highlights: ['Multiple revenue streams', 'Passive income', 'Growing audience'],
      risk: 'Single Investor Deal'
    }
  ];

  const benefits: Benefit[] = [
    {
      icon: Shield,
      title: 'Verified Opportunities',
      description: 'Every investment undergoes rigorous due diligence with verified financials and third-party audits.'
    },
    {
      icon: PieChart,
      title: 'Portfolio Diversification',
      description: 'Access curated deals across multiple industries to build a balanced investment portfolio.'
    },
    {
      icon: Users,
      title: 'Co-Investment Network',
      description: 'Join a community of sophisticated investors and share insights on opportunities.'
    },
    {
      icon: BarChart3,
      title: 'Performance Tracking',
      description: 'Real-time dashboards to monitor your investments, returns, and portfolio performance.'
    },
    {
      icon: Clock,
      title: 'Direct Equity Stakes',
      description: 'Take ownership positions from 5% to 15% equity in verified businesses with clear exit strategies and shareholder agreements.'
    },
    {
      icon: Award,
      title: 'Expert Support',
      description: 'Dedicated investment advisors to guide you through deal evaluation and execution.'
    }
  ];

  const investmentProcess: ProcessStep[] = [
    {
      step: '01',
      title: 'Browse Vetted Deals',
      description: 'Explore curated investment opportunities with complete transparency on financials, growth metrics, and business models.'
    },
    {
      step: '02',
      title: 'Complete Due Diligence',
      description: 'Access detailed data rooms, financial statements, and third-party audit reports to make informed decisions.'
    },
    {
      step: '03',
      title: 'Secure Equity Purchase',
      description: 'Complete the equity transaction with legal documentation, shareholder agreements, and secure capital transfer through escrow.'
    },
    {
      step: '04',
      title: 'Monitor & Exit',
      description: 'Track performance in real-time and execute your exit strategy when targets are met or terms complete.'
    }
  ];

  const stats: Stat[] = [
    { value: '$48M+', label: 'Total Invested', icon: DollarSign },
    { value: '89', label: 'Equity Deals Closed', icon: TrendingUp },
    { value: '340+', label: 'Private Investors', icon: Users },
    { value: '8.5%', label: 'Avg. Equity Stake', icon: Target }
  ];

  const filteredDeals = activeTab === 'all' 
    ? investmentDeals 
    : investmentDeals.filter(deal => deal.category.toLowerCase() === activeTab.toLowerCase());

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}

      <Header/>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-32 pb-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/20 border border-teal-400/30 rounded-full mb-6">
              <Award className="w-4 h-4 text-teal-400" />
              <span className="text-sm font-medium text-teal-300">Accredited Investor Platform</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Invest in Proven, <span className="text-teal-400">Profitable Businesses</span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              Access exclusive equity investment opportunities in verified businesses. Direct equity stakes in high-growth companies seeking strategic investors.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group px-8 py-4 bg-teal-500 hover:bg-teal-600 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 shadow-lg shadow-teal-500/30">
                View Investment Deals
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl font-semibold transition-all backdrop-blur-sm">
                Download Prospectus
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => {
              const IconComponent = stat.icon;
              return (
                <div key={idx} className="text-center group cursor-pointer">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-teal-100 text-teal-600 rounded-xl mb-4 group-hover:bg-teal-500 group-hover:text-white transition-all">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Investment Deals Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full font-medium mb-4">
              Active Opportunities
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Exclusive Equity Deals
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Single-investor equity opportunities with verified financials and strong growth trajectories
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['all', 'SaaS', 'eCommerce', 'Mobile App', 'Content'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  activeTab === tab
                    ? 'bg-teal-500 text-white shadow-lg shadow-teal-500/30'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-teal-300'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Deals Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {filteredDeals.map((deal) => (
              <div
                key={deal.id}
                onMouseEnter={() => setHoveredCard(deal.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`bg-white rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                  hoveredCard === deal.id
                    ? 'border-teal-400 shadow-2xl shadow-teal-500/20 -translate-y-1'
                    : 'border-slate-200 shadow-md'
                }`}
              >
                {/* Card Header */}
                <div className="p-6 border-b border-slate-100">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 bg-teal-100 text-teal-700 text-sm font-semibold rounded-lg">
                        {deal.category}
                      </span>
                      {deal.verified && (
                        <div className="flex items-center gap-1 px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-semibold rounded-lg">
                          <Shield className="w-4 h-4" />
                          Verified
                        </div>
                      )}
                    </div>
                    {deal.featured && (
                      <div className="flex items-center gap-1 text-amber-500">
                        <Star className="w-5 h-5 fill-current" />
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{deal.title}</h3>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {deal.highlights.map((highlight, idx) => (
                      <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-lg">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-sm text-slate-500 mb-1">Monthly Revenue</div>
                      <div className="text-2xl font-bold text-slate-900">${deal.revenue.toLocaleString()}</div>
                      <div className="text-sm text-emerald-600 font-semibold">{deal.growth} YoY</div>
                    </div>
                    <div>
                      <div className="text-sm text-slate-500 mb-1">Equity Offered</div>
                      <div className="text-2xl font-bold text-teal-600">{deal.roi}</div>
                      <div className="text-sm text-slate-600">{deal.term}</div>
                    </div>
                  </div>

                  {/* Investment Status */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-semibold text-slate-700">Investment Status</span>
                      <div className="flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-semibold rounded-lg">
                        <CheckCircle className="w-4 h-4" />
                        Fully Funded
                      </div>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-slate-600">Investment Amount</span>
                        <span className="text-lg font-bold text-slate-900">
                          ${deal.minInvestment.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-600">Single Investor</span>
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            1
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-4">
                      <div className="text-sm">
                        <span className="text-slate-500">Deal Size:</span>
                        <span className="font-bold text-slate-900 ml-2">
                          ${deal.minInvestment.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 px-3 py-1 bg-amber-50 border border-amber-200 rounded-lg">
                        <Star className="w-4 h-4 text-amber-500 fill-current" />
                        <span className="text-sm font-semibold text-amber-700">Exclusive</span>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedDeal(deal)}
                      className="px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-semibold transition-all flex items-center gap-2"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full font-medium mb-4">
              Why Invest with Ellitess
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Built for Smart Investors
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive platform with everything you need to invest confidently
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={idx}
                  className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-teal-300 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-500 group-hover:text-white transition-all">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full font-medium mb-4">
              Simple Process
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              From discovery to exit, we've streamlined every step
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {investmentProcess.map((process, idx) => (
              <div key={idx} className="relative group">
                <div className="bg-gradient-to-br from-white to-slate-50 p-8 rounded-2xl border-2 border-slate-200 hover:border-teal-300 hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-500 text-white rounded-xl flex items-center justify-center text-2xl font-bold mb-6 shadow-lg">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{process.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{process.description}</p>
                </div>
                {idx < investmentProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-teal-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Investing?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join hundreds of investors taking equity stakes in verified businesses with proven track records
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-teal-500 hover:bg-teal-600 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 shadow-lg shadow-teal-500/30">
                Create Investor Account
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl font-semibold transition-all backdrop-blur-sm">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}