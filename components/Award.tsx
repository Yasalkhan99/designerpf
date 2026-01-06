import Image from 'next/image'

export default function Award() {
  const awards = [
    { year: '2010', description: 'Recognized for outstanding creativity' },
    { year: '2015', description: 'Celebrated for business innovation' },
    { year: '2020', description: 'Honored for customer-centric excellence' },
    { year: '2025', description: 'Creative solutions with lasting impact' },
  ]

  return (
    <section className="award-section section-padding fix section-bg approach-area">
      <div className="container">
        <div className="award-wrapper">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="section-title">
                <h6>award winning</h6>
                <h2 className="hero_title tv_hero_title hero_title_1">previous Work <span>& Achievements</span></h2>
              </div>
              <div className="award-content approach-wrapper-box fix">
                {awards.map((award, index) => (
                  <div key={index} className="award-list-items approach-box">
                    <p>{award.year}</p>
                    <span>{award.description}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6 text-end wow fadeInUp" data-wow-delay=".5s">
              <div className="award-image text-end">
                <Image src="/assets/img/home-1/award.png" alt="img" width={500} height={500} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

