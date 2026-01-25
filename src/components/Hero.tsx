"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const [yearsExp, setYearsExp] = useState(0);

  useEffect(() => {
    const duration = 1500; // 1.5 seconds total
    const steps = 6;
    const intervalTime = duration / steps;
    
    const timer = setInterval(() => {
      setYearsExp((prev) => {
        if (prev >= 6) {
          clearInterval(timer);
          return 6;
        }
        return prev + 1;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-color-bg-cream">
      <div className="container mx-auto px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <span className="text-accent-gold font-bold tracking-widest uppercase text-sm animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Grace Mithamo
            </span>
            <h1 className="text-4xl lg:text-6xl font-serif font-bold leading-tight text-primary-dark animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Polished Public Relations & <span className="italic">Executive Support.</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-xl leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              From editorial writing to complex project management—I handle the details so you can focus on the big picture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <button className="bg-primary-dark text-white px-8 py-4 text-sm font-medium rounded hover:bg-black transition-colors flex items-center justify-center gap-2">
                Start Your Project <ArrowRight size={16} />
              </button>
              <button className="border border-gray-300 text-primary-dark px-8 py-4 text-sm font-medium rounded hover:border-primary-dark transition-colors">
                View Portfolio
              </button>
            </div>
            
            <div className="pt-8 space-y-4">
              <p className="text-sm text-gray-400 uppercase tracking-widest font-medium">Trusted by</p>
              <div className="flex flex-wrap items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Logo 1: Nexus */}
                <div className="flex items-center gap-2 group cursor-default">
                  <div className="w-8 h-8 rounded bg-primary-dark/10 flex items-center justify-center text-primary-dark">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                  </div>
                  <span className="font-bold text-lg text-primary-dark tracking-tight">NexusGlobal</span>
                </div>
                
                {/* Logo 2: Apex */}
                <div className="flex items-center gap-2 group cursor-default">
                  <div className="w-8 h-8 rounded bg-primary-dark/10 flex items-center justify-center text-primary-dark">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                  </div>
                  <span className="font-bold text-lg text-primary-dark tracking-tight">ApexMedia</span>
                </div>

                {/* Logo 3: Orbit */}
                <div className="flex items-center gap-2 group cursor-default">
                  <div className="w-8 h-8 rounded bg-primary-dark/10 flex items-center justify-center text-primary-dark">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
                  </div>
                  <span className="font-bold text-lg text-primary-dark tracking-tight">OrbitCorp</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual/Image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-[4/5] bg-gray-200 rounded-2xl overflow-hidden relative shadow-lg group">
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-300/20 to-transparent z-10"></div>
              
              {/* Image Component - Expecting 'headshot.png' in public/assets/ */}
              {/* Image Component - Expecting 'headshot.png' in public/assets/ */}
              <div className="relative w-full h-full"> 
                <Image 
                  src="/assets/headshot.png" 
                  alt="Grace Mithamo" 
                  fill
                  className="object-cover object-top"
                  priority // Load priority for LCP
                  sizes="(max-width: 768px) 100vw, 50vw"
                  onError={(e) => {
                    // Note: Next/Image onError is different, usually handled by checking naturalWidth or loading state.
                    // For simplicity, we trust the file exists now.
                    const target = document.getElementById('image-fallback');
                    if (target) target.classList.remove('hidden');
                  }}
                />
              </div>
              
              {/* Fallback Placeholder (shown if image is missing) */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 bg-gray-200 hidden">
                <div className="text-center p-6">
                  <span className="font-medium text-lg tracking-widest uppercase block mb-2">Grace Mithamo</span>
                  <p className="text-xs">Image not found at /assets/headshot.png</p>
                </div>
              </div>
              
              {/* Floating Card */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-md border border-white/50 z-20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Expertise</p>
                    <p className="font-medium text-primary-dark flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent-gold rounded-full animate-pulse"></span>
                      PR & Administration
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-serif font-bold transition-all tabular-nums">{yearsExp}+</p>
                    <p className="text-xs text-gray-500">Years Exp.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
