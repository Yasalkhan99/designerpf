import Image from 'next/image'

export default function WorkExperience() {
  const experiences = [
    { company: 'ABC Tech Ltd', period: 'Jan 2022 – Present', image: '/assets/img/home-1/work-experience/info-1.png', preview: '/assets/img/home-1/work-experience/c1.png' },
    { company: 'ABC2 Tech Ltd', period: 'Jan 2022 – Present', image: '/assets/img/home-1/work-experience/info-2.png', preview: '/assets/img/home-1/work-experience/c2.png' },
    { company: 'ABC3 Tech Ltd', period: 'Jan 2022 – Present', image: '/assets/img/home-1/work-experience/info-3.png', preview: '/assets/img/home-1/work-experience/c3.png' },
    { company: 'ABC4 Tech Ltd', period: 'Jan 2022 – Present', image: '/assets/img/home-1/work-experience/info-4.png', preview: '/assets/img/home-1/work-experience/c4.png' },
    { company: 'ABC49 Tech Ltd', period: 'Jan 2022 – Present', image: '/assets/img/home-1/work-experience/info-5.png', preview: '/assets/img/home-1/work-experience/c5.png' },
    { company: 'ABC48 Tech Ltd', period: 'Jan 2022 – Present', image: '/assets/img/home-1/work-experience/info-6.png', preview: '/assets/img/home-1/work-experience/c6.png' },
    { company: 'ABC47 Tech Ltd', period: 'Jan 2022 – Present', image: '/assets/img/home-1/work-experience/info-7.png', preview: '/assets/img/home-1/work-experience/c7.png' },
  ]

  return (
    <section className="work-experience-section-1 fix section-padding pb-0">
      <div className="line-shape">
        <Image src="/assets/img/home-1/work-experience/line-shape.png" alt="img" width={200} height={200} />
      </div>
      <div className="container">
        <div className="section-title text-center">
          <h6 className="before-none">Work Experience</h6>
          <h2 className="hero_title tv_hero_title hero_title_1">
            A proven UI/UX Designer <span>with over 8 <br /> years </span>of expertise
          </h2>
        </div>
        <div className="feature-work-experience-wrap fix">
          <div className="feature-work-experience-preview">
            <div className="feature-work-experience-preview-slider fw_preview_slider_active">
              <div className="swiper-wrapper">
                {experiences.map((exp, index) => (
                  <div key={index} className="swiper-slide">
                    <div className="feature-work-experience-preview-slider-item wa-fix wa-img-cover">
                      <Image src={exp.preview} alt="img" width={200} height={200} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="feature-work-experience-main-slider fw_main_slider_active wa-fix">
            <div className="swiper-wrapper">
              {experiences.map((exp, index) => (
                <div key={index} className="swiper-slide">
                  <div className="feature-work-experience-main-slider-single">
                    <div className="client-info-items">
                      <div className="client-img">
                        <Image src={exp.image} alt="img" width={80} height={80} />
                      </div>
                      <div className="info-content">
                        <h3>{exp.company}</h3>
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <div className="info-item">
                      <h5>UI/UX Designer</h5>
                      <div className="text-cont">
                        <p className="mb-4">
                          Designed 20+ mobile and web app interfaces using Figma & Adobe XD.
                        </p>
                        <p>
                          Increased client conversion rates by up to 40% with improved design systems.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

