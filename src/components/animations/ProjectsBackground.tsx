/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import HALO from "vanta/dist/vanta.halo.min";

const ProjectsBackground = ({ children }: { children: React.ReactNode }) => {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        HALO({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          baseColor: 0x059669, // Slightly darker emerald
          backgroundColor: 0x0a0a0b, // Deep obsidian to match site primary bg
          amplitudeFactor: 1.0, // Reduced for subtlety
          size: 0.8, // Reduced size
          xOffset: 0.1,
          yOffset: 0.1,
        }),
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} style={{ width: "100%", position: "relative" }}>
      {/* Dark overlay to ensure text contrast */}
      <div className="absolute inset-0 bg-[#0a0a0b]/75 z-[1] pointer-events-none" />
      
      {/* Content wrapper */}
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
};

export default ProjectsBackground;
