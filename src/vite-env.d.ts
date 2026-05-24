/// <reference types="vite/client" />

declare module '*.avif';
declare module '*.bmp';
declare module '*.gif';
declare module '*.ico';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.webp';
declare module '*.svg' {
  import type { ComponentType, SVGProps } from 'react';
  const src: string;
  export default src;
  export const ReactComponent: ComponentType<SVGProps<SVGSVGElement>>;
}
