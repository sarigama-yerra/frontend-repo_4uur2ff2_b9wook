import React from 'react'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <section className="relative w-full h-[70vh] sm:h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/80 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto h-full px-4 flex items-center">
        <div className="backdrop-blur-sm bg-white/40 rounded-2xl p-6 sm:p-10 border border-white/60 shadow-xl">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-600/10 text-indigo-700 border border-indigo-500/20 mb-4">
            Fintech UI • Glassmorphic • 3D
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            Modern Pricing for Your Next Product
          </h1>
          <p className="mt-4 text-slate-600 max-w-2xl">
            Clean, minimalist pricing components designed to fit fintech vibes. Plug-and-play tiers, responsive, and accessible.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#pricing" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-slate-900 text-white font-semibold shadow-md hover:shadow-lg hover:bg-slate-800 transition">
              Explore Pricing
            </a>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold border border-slate-200/80 hover:bg-white/90 transition">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
