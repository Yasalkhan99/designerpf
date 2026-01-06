// Preloader initialization for Next.js
// This ensures the preloader works even if window.load already fired

(function() {
  'use strict';
  
  // Prevent multiple initializations
  if (window.preloaderInitialized) {
    return;
  }
  window.preloaderInitialized = true;
  
  let initAttempts = 0;
  const maxAttempts = 50; // Try for 5 seconds (50 * 100ms)
  
  function initPreloader() {
    initAttempts++;
    
    // Check if GSAP is loaded (required for animation)
    if (typeof gsap === 'undefined') {
      if (initAttempts < maxAttempts) {
        setTimeout(initPreloader, 100);
        return;
      } else {
        // Fallback: Just hide preloader if GSAP never loads
        const preloader = document.querySelector('.preloader');
        if (preloader) {
          preloader.style.display = 'none';
          preloader.style.zIndex = '-1';
        }
        return;
      }
    }

    const svg = document.getElementById("svg");
    if (!svg) {
      // Hide preloader if SVG not found
      const preloader = document.querySelector('.preloader');
      if (preloader) {
        preloader.style.display = 'none';
        preloader.style.zIndex = '-1';
      }
      return;
    }

    const tl = gsap.timeline();
    const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
    const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

    // Animate preloader text (if exists)
    const preloaderText = document.querySelector(".preloader-text");
    if (preloaderText) {
      tl.to(".preloader-text", {
        delay: 0.3,
        y: -100,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    }

    // Animate SVG wave
    tl.to(svg, {
      duration: 0.3,
      attr: { d: curve },
      ease: "power2.in",
    }).to(svg, {
      duration: 0.5,
      attr: { d: flat },
      ease: "power2.out",
    });

    // Slide preloader up and hide
    tl.to(".preloader", {
      y: -1500,
      duration: 0.8,
      ease: "power2.inOut",
    })
      .set(".preloader", { display: "none", zIndex: -1 })
      .call(() => {
        // Mark that preloader is complete
        window.preloaderComplete = true;
      });

    // Animate main hero image
    const animatedImage = document.querySelector(".animated-image");
    if (animatedImage) {
      tl.fromTo(
        ".animated-image",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.3"
      );
    }
  }

  // Start initialization
  // If page already loaded, start immediately
  if (document.readyState === 'complete') {
    setTimeout(initPreloader, 300);
  } else {
    // Wait for window load
    window.addEventListener('load', function() {
      setTimeout(initPreloader, 300);
    });
  }

  // Fallback: Initialize after a delay regardless
  setTimeout(function() {
    const preloader = document.querySelector('.preloader');
    if (preloader && preloader.style.display !== 'none') {
      initPreloader();
    }
  }, 2000);
})();

