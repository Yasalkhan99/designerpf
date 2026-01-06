// Wrapper to prevent main.js preloader from running if already handled
(function() {
  'use strict';
  
  // Override the preloader function in main.js context
  // This will be called after main.js loads
  if (typeof window !== 'undefined') {
    // Store original preloader if it exists
    const originalPreloader = window.preloaderFunction;
    
    // Create a safe preloader wrapper
    window.safePreloader = function() {
      // If preloader already completed, don't run again
      if (window.preloaderComplete) {
        return;
      }
      
      // If jQuery is available, use original logic
      if (typeof jQuery !== 'undefined') {
        const $ = jQuery;
        $(window).on("load", function () {
          // Check again if preloader was already handled
          if (window.preloaderComplete) {
            return;
          }
          
          const svg = document.getElementById("svg");
          if (!svg) return;
          
          const preloader = document.querySelector('.preloader');
          if (preloader && preloader.style.display === 'none') {
            return; // Already hidden
          }
          
          // Run original preloader logic if needed
          if (originalPreloader) {
            originalPreloader();
          }
        });
      }
    };
  }
})();

