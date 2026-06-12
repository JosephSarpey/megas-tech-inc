/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";

const AnimatedBackground = ({ children }: { children: React.ReactNode }) => {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x10b981, // Emerald green accent
          backgroundColor: 0x050505, // Deep sleek black for contrast
          points: 10.00, // Reduced for minimalism
          maxDistance: 22.00, // Longer connecting lines
          spacing: 20.00, // More spaced out, less cluttered
          showDots: true,
        }),
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} style={{ minHeight: "100vh", width: "100%" }}>
      {/* Ensure your content inside sits above the 3D canvas. */}
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
};

export default AnimatedBackground;
