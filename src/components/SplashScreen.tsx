"use client";

import React, { useEffect, useState } from "react";

export default function SplashScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 2000); // Show for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#FDFBF7] transition-opacity duration-700 ease-out"
         style={{ opacity: show ? 1 : 0 }}>
      <div className="relative flex flex-col items-center gap-4">
        <div className="relative flex items-center justify-center">
          {/* Animated Ripples - Using Primary Dark for better contrast on light bg */}
          <div className="absolute w-20 h-20 rounded-full border border-[#1a1a1a]/10 animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
          <div className="absolute w-20 h-20 rounded-full border border-[#1a1a1a]/5 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] delay-150"></div>
          
          {/* Center Monogram */}
          <div className="relative z-10 w-16 h-16 bg-[#1a1a1a] text-[#C5A059] rounded-full flex items-center justify-center font-serif text-2xl font-bold shadow-xl border-2 border-[#C5A059]">
            GM
          </div>
        </div>
        
        {/* Loading Text */}
        <p className="mt-8 font-serif text-[#1a1a1a]/80 text-sm tracking-[0.2em] animate-pulse">
            LOADING
        </p>
      </div>
    </div>
  );
}
