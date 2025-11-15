import React from 'react'
import { Check, Zap } from 'lucide-react'

const Feature = ({ text }) => (
  <li className="flex items-start gap-3">
    <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
    <span className="text-slate-600">{text}</span>
  </li>
)

const PriceCard = ({ title, price, period = 'mo', features = [], cta = 'Get started', highlighted = false, badge }) => {
  return (
    <div className={`relative rounded-2xl p-6 sm:p-8 border transition shadow-sm ${
      highlighted
        ? 'bg-white/70 backdrop-blur-lg border-slate-200 shadow-xl ring-2 ring-indigo-500/30'
        : 'bg-white/60 backdrop-blur-md border-slate-200/80 hover:shadow-md'
    }`}>
      {badge && (
        <div className="absolute -top-3 left-6">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-600 text-white shadow-md">
            <Zap className="w-3.5 h-3.5" /> {badge}
          </span>
        </div>
      )}

      <div>
        <h3 className="text-xl font-bold text-slate-900">{title}</h3>
        <div className="mt-3 flex items-end gap-1">
          <span className="text-4xl font-extrabold tracking-tight text-slate-900">${price}</span>
          <span className="text-sm text-slate-500 mb-1">/{period}</span>
        </div>
      </div>

      <ul className="mt-6 space-y-3">
        {features.map((f, i) => (
          <Feature key={i} text={f} />
        ))}
      </ul>

      <button className={`mt-8 w-full inline-flex items-center justify-center rounded-xl px-4 py-2.5 font-semibold transition ${
        highlighted
          ? 'bg-slate-900 text-white hover:bg-slate-800'
          : 'bg-white text-slate-900 border border-slate-200 hover:bg-white/90'
      }`}>
        {cta}
      </button>
    </div>
  )
}

export default PriceCard
