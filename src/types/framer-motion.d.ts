/* eslint-disable @typescript-eslint/no-explicit-any */
// src/types/framer-motion.d.ts
declare module 'framer-motion' {
  import { ComponentType } from 'react';
  
  export interface MotionProps {
    [key: string]: any;
  }

  export interface Variant {
    [key: string]: any;
  }

  export interface Variants {
    [key: string]: Variant;
  }

  export const motion: {
    [key: string]: ComponentType<MotionProps>;
  };

  export const AnimatePresence: ComponentType<{
    children?: React.ReactNode;
    [key: string]: any;
  }>;

  export * from 'framer-motion/dist/types';
}