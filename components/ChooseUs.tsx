import Link from 'next/link'
import Image from 'next/image'

export default function ChooseUs() {
  const services = [
    { title: 'Moblie App Design', href: '/service-details' },
    { title: 'ux/ui Design', href: '/service-details' },
    { title: 'Web Design', href: '/service-details' },
    { title: 'Visual Design', href: '/service-details' },
  ]

  return (
    <section className="choose-us-section fix section-padding">
      <div className="container">
        <div className="section-title-area">
          <div className="section-title">
            <h6>what i do?</h6>
            <h2 className="hero_title tv_hero_title hero_title_1">Delivering Value <span>Through My Skills</span></h2>
          </div>
          <p className="wow fadeInUp" data-wow-delay=".3s">
            I offer a range of professional services <br /> designed to meet your business needs <br /> with precision and creativity
          </p>
        </div>
        <div className="choose-us-wrapper">
          <div className="row g-4">
            <div className="col-lg-6">
              <ul className="choose-us-box-list">
                {services.map((service, index) => (
                  <li key={index} className="wow fadeInUp" data-wow-delay={`${0.3 + index * 0.2}s`}>
                    <div className="content">
                      <h2><Link href={service.href}>{service.title}</Link></h2>
                      <p>
                        I offer a range of professional services designed to meet your business needs with precision and creativity
                      </p>
                    </div>
                    <Link href={service.href} className="arrow-icon">
                      <i className="fa-solid fa-arrow-up-right"></i>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="choose-us-image fix">
                <Image data-speed=".7" src="/assets/img/home-1/choose-us.png" alt="img" width={600} height={600} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

