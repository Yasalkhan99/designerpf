import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'HN DESIGNS – Modern Personal Portfolio',
  description: 'HN DESIGNS – Modern Personal Portfolio by Hammad Noor',
  authors: [{ name: 'Hammad Noor' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/assets/img/favicon.svg" />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/all.min.css" />
        <link rel="stylesheet" href="/assets/css/animate.css" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/meanmenu.css" />
        <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/assets/css/nice-select.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />
      </head>
      <body>
        {children}
        
        {/* Scripts - Load in correct order */}
        <Script src="/assets/js/jquery-3.7.1.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/gsap.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/preloader-init.js" strategy="afterInteractive" />
        <Script src="/assets/js/main-wrapper.js" strategy="afterInteractive" />
        <Script src="/assets/js/ScrollTrigger.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/ScrollSmoother.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/ScrollToPlugin.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/SplitText.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/TextPlugin.js" strategy="afterInteractive" />
        <Script src="/assets/js/viewport.jquery.js" strategy="afterInteractive" />
        <Script src="/assets/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/chroma.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery.nice-select.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery.waypoints.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery.counterup.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/swiper-bundle.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery.meanmenu.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/parallaxie.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery.magnific-popup.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/wow.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}

