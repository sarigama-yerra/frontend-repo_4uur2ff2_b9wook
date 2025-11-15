import React from 'react'
import PriceCard from './PriceCard'

const PricingSection = () => {
  return (
    <section id="pricing" className="relative py-16 sm:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-50/80 via-white to-white pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-600">Choose a plan that scales with your needs. No hidden fees, cancel anytime.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <PriceCard
            title="Starter"
            price={9}
            features={['Up to 3 projects', 'Basic analytics', 'Community support']}
            cta="Start free"
          />

          <PriceCard
            title="Pro"
            price={29}
            highlighted
            badge="Most Popular"
            features={['Unlimited projects', 'Advanced analytics', 'Priority support', 'Team collaboration']}
            cta="Upgrade to Pro"
          />

          <PriceCard
            title="Enterprise"
            price={99}
            features={['Custom SLA', 'Dedicated success manager', 'SSO & advanced security', 'Onboarding & training']}
            cta="Contact sales"
          />
        </div>

        <p className="mt-8 text-center text-xs text-slate-500">Prices in USD. Taxes may apply.</p>
      </div>
    </section>
  )
}

export default PricingSection
