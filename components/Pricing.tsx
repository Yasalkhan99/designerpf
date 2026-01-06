import Link from 'next/link'
import Image from 'next/image'

export default function Pricing() {
  return (
    <section className="pricing-section section-padding fix">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-xl-4 col-lg-6 col-md-6 order-2 order-xl-1 wow fadeInUp" data-wow-delay=".3s">
            <div className="pricing-box-items active">
              <div className="pricing-header">
                <h2>$2500</h2>
                <p>monthly</p>
              </div>
              <Link href="/pricing" className="circle-icon">
                <i className="fa-solid fa-arrow-up-right"></i>
              </Link>
              <ul>
                <li><i className="fa-solid fa-circle-arrow-right"></i> UI UX Design</li>
                <li><i className="fa-solid fa-circle-arrow-right"></i> Design Customization</li>
                <li><i className="fa-solid fa-circle-arrow-right"></i> Design with Figma</li>
                <li><i className="fa-solid fa-circle-arrow-right"></i> Multipage Design</li>
                <li><i className="fa-solid fa-circle-arrow-right"></i> Support 6 months</li>
              </ul>
              <h2>Standard Plan</h2>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 order-2 order-xl-1 wow fadeInUp" data-wow-delay=".5s">
            <div className="pricing-box-items style-2">
              <div className="pricing-header">
                <div className="pricing-top">
                  <h2>$3500</h2>
                  <p>yearly</p>
                </div>
                <span>popular plan</span>
              </div>
              <Link href="/pricing" className="circle-icon">
                <i className="fa-solid fa-arrow-up-right"></i>
              </Link>
              <ul>
                <li><i className="fa-solid fa-circle-arrow-right"></i> UI UX Design</li>
                <li><i className="fa-solid fa-circle-arrow-right"></i> Design Customization</li>
                <li><i className="fa-solid fa-circle-arrow-right"></i> Design with Figma</li>
                <li><i className="fa-solid fa-circle-arrow-right"></i> Multipage Design</li>
                <li><i className="fa-solid fa-circle-arrow-right"></i> Support 6 months</li>
              </ul>
              <h2>premium Plan</h2>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 order-1 order-xl-2">
            <div className="pricing-content">
              <div className="section-title">
                <h6>pricing plan</h6>
                <h2 className="hero_title tv_hero_title hero_title_1">best pricing plan <span>for</span><span className="no-break">your next project</span></h2>
              </div>
              <div className="shape-1">
                <Image src="/assets/img/home-1/pricing-shape.png" alt="img" width={200} height={200} />
              </div>
              <div className="client-info">
                <div className="client-image">
                  <Image src="/assets/img/home-1/pricing-client.png" alt="img" width={100} height={100} />
                </div>
                <p>trusted clients <br />world wide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

