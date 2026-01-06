import Link from 'next/link'
import Image from 'next/image'

export default function About() {
  return (
    <section className="about-section section-padding">
      <div className="circle-shape">
        <Image src="/assets/img/home-1/circle-shape.png" alt="img" width={200} height={200} />
      </div>
      <div className="container">
        <div className="about-wrapper">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="about-left-items">
                <div className="section-title mb-0 wow fadeInUp" data-wow-delay=".3s">
                  <h6>about myself</h6>
                </div>
                <ul className="top-text wow fadeInUp" data-wow-delay=".5s">
                  <li>
                    <span>10+ years of</span> experience
                  </li>
                  <li>
                    <span>2.5K+ successfully</span> projects done
                  </li>
                </ul>
                <div className="row g-4 wow fadeInUp" data-wow-delay=".7s">
                  <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-6">
                    <div className="skill-counter pl-none">
                      <Image src="/assets/img/home-1/about/figma.png" alt="img" width={50} height={50} />
                      <div className="content">
                        <h2>
                          <span className="count">98</span>%
                        </h2>
                        <p>Figma </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-6">
                    <div className="skill-counter">
                      <Image src="/assets/img/home-1/about/ps.png" alt="img" width={50} height={50} />
                      <div className="content">
                        <h2>
                          <span className="count">90</span>%
                        </h2>
                        <p>Photoshop </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-6">
                    <div className="skill-counter">
                      <Image src="/assets/img/home-1/about/ai.png" alt="img" width={50} height={50} />
                      <div className="content">
                        <h2>
                          <span className="count">79</span>%
                        </h2>
                        <p>Illustrator </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12 d-none d-xxl-block">
                    <div className="middle-line"></div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-6">
                    <div className="skill-counter pl-none">
                      <Image src="/assets/img/home-1/about/sketch.png" alt="img" width={50} height={50} />
                      <div className="content">
                        <h2>
                          <span className="count">88</span>%
                        </h2>
                        <p>Sketch </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-6">
                    <div className="skill-counter">
                      <Image src="/assets/img/home-1/about/xd.png" alt="img" width={50} height={50} />
                      <div className="content">
                        <h2>
                          <span className="count">93</span>%
                        </h2>
                        <p>Adobe_Xd </p>
                      </div>
                    </div>
                  </div>
                </div>
                <h4 className="title"><span>My</span> Favorite Tools</h4>
                <div className="vec-shape">
                  <Image src="/assets/img/home-1/about/vec-shape.png" alt="img" width={100} height={100} />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-title mb-4">
                  <h2 className="hero_title tv_hero_title hero_title_1">
                    A Professional Overview of <span>My</span> <span className="no-break"> Background</span> and Expertise
                  </h2>
                </div>
                <p className="wow fadeInUp" data-wow-delay=".3s">
                  A Senior UX & UI Designer based in Kuala Lumpur with over 5 years of experience, crafting user-centric fintech and web experiences. Blending product thinking with visual design.
                </p>
                <p className="mt-3 wow fadeInUp" data-wow-delay=".5s">
                  I bring both technical expertise and a collaborative mindset to every project. My work is driven by a commitment to deliver.
                </p>
                <div className="about-btn wow fadeInUp" data-wow-delay=".7s">
                  <Link href="/about" className="theme-btn">get to know me <i className="fa-solid fa-arrow-up-right"></i></Link>
                  <Link href="/contact" className="theme-btn">download cv <i className="fa-solid fa-arrow-up-right"></i></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

