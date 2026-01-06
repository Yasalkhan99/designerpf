// Global type declarations for window object extensions

interface Window {
  jQuery?: typeof jQuery;
  gsap?: typeof gsap;
  preloaderInitialized?: boolean;
  preloaderComplete?: boolean;
}

declare var jQuery: any;
declare var gsap: any;

