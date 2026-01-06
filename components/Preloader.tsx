'use client'

import { useEffect } from 'react'
import '../app/preloader.css'

export default function Preloader() {
  useEffect(() => {
    // Fallback: Hide preloader after a maximum time if scripts don't load
    const fallbackTimer = setTimeout(() => {
      const preloader = document.querySelector('.preloader') as HTMLElement;
      if (preloader && preloader.style.display !== 'none') {
        // Simple fade out and hide
        preloader.style.transition = 'opacity 0.5s ease-out';
        preloader.style.opacity = '0';
        setTimeout(() => {
          preloader.style.display = 'none';
          preloader.style.zIndex = '-1';
        }, 500);
      }
    }, 4000); // 4 second fallback

    // Also check periodically if preloader should be hidden
    const checkInterval = setInterval(() => {
      const preloader = document.querySelector('.preloader') as HTMLElement;
      if (preloader && preloader.style.display === 'none') {
        clearInterval(checkInterval);
      } else if (preloader && window.preloaderComplete) {
        clearInterval(checkInterval);
      }
    }, 200);

    return () => {
      clearTimeout(fallbackTimer);
      clearInterval(checkInterval);
    };
  }, [])

  return (
    <div className="preloader">
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
      </svg>
      <h5 className="preloader-text">HN DESIGNS</h5>
    </div>
  )
}
