import Link from 'next/link'
import Image from 'next/image'

export default function CTA() {
  return (
    <section className="cta-section section-padding fix pt-0">
      <div className="shape-1">
        <Image src="/assets/img/home-1/cta/cta-shape-1.png" alt="img" width={200} height={200} />
      </div>
      <div className="shape-2">
        <Image src="/assets/img/home-1/cta/shape-1.png" alt="img" width={100} height={100} />
      </div>
      <div className="shape-3">
        <Image src="/assets/img/home-1/cta/shape-2.png" alt="img" width={100} height={100} />
      </div>
      <div className="shape-4">
        <Image src="/assets/img/home-1/cta/shape-3.png" alt="img" width={100} height={100} />
      </div>
      <div className="shape-5">
        <Image src="/assets/img/home-1/cta/shape-4.png" alt="img" width={100} height={100} />
      </div>
      <div className="shape-6">
        <Image src="/assets/img/home-1/cta/shape-5.png" alt="img" width={100} height={100} />
      </div>
      <div className="row">
        <div className="col-xl-12">
          <div className="cta-text-items text-center">
            <div className="icon">
              <Image src="/assets/img/home-1/cta/cta-icon.svg" alt="img" width={100} height={100} />
            </div>
            <h2 className="text_invert-2">have a PROJECT in mind?</h2>
            <h3 className="footer-big-text wt-about-title2"><Link href="/contact">let's talk</Link></h3>
            <p className="wow fadeInUp" data-wow-delay=".3s">
              Then you're in the right place. Get the best designs you're <br /> looking for. Just reach out and let me know!
            </p>
            <div className="cta-btn wow fadeInUp" data-wow-delay=".5s">
              <a href="tel:01626479559" className="theme-btn">chat on whatsapp <i className="fa-solid fa-arrow-up-right"></i></a>
              <Link href="/contact" className="theme-btn">hire me <i className="fa-solid fa-arrow-up-right"></i></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

