'use client'

import { useEffect } from 'react'
import Preloader from '@/components/Preloader'
import BackToTop from '@/components/BackToTop'
import MouseCursor from '@/components/MouseCursor'
import Offcanvas from '@/components/Offcanvas'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import About from '@/components/About'
import ChooseUs from '@/components/ChooseUs'
import WorkExperience from '@/components/WorkExperience'
import Project from '@/components/Project'
import Award from '@/components/Award'
import Pricing from '@/components/Pricing'
import Testimonial from '@/components/Testimonial'
import Video from '@/components/Video'
import News from '@/components/News'
import Brand from '@/components/Brand'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  useEffect(() => {
    // Ensure scripts initialize after mount
    if (typeof window !== 'undefined') {
      // Trigger window load event if it hasn't fired yet
      if (document.readyState === 'complete') {
        // If page already loaded, manually trigger the preloader hide
        const checkPreloader = setInterval(() => {
          if (typeof window.jQuery !== 'undefined' && typeof window.gsap !== 'undefined') {
            // Scripts are loaded, clear interval
            clearInterval(checkPreloader);
          }
        }, 100);

        return () => clearInterval(checkPreloader);
      }
    }
  }, [])

  return (
    <>
      <Preloader />
      <BackToTop />
      <MouseCursor />
      <Offcanvas />
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Hero />
          <Marquee />
          <About />
          <ChooseUs />
          <WorkExperience />
          <Project />
          <Award />
          <Pricing />
          <Testimonial />
          <Video />
          <News />
          <Brand />
          <CTA />
          <Footer />
        </div>
      </div>
    </>
  )
}
