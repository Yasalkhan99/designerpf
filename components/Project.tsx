import Link from 'next/link'
import Image from 'next/image'

export default function Project() {
  const projects = [
    { image: '/assets/img/home-1/project/project-01.jpg', category: 'App / Development', title: 'Online Learning Platform' },
    { image: '/assets/img/home-1/project/project-02.jpg', category: 'App / Development', title: 'Online Learning Platform' },
    { image: '/assets/img/home-1/project/project-03.jpg', category: 'App / Development', title: 'Online Learning Platform' },
    { image: '/assets/img/home-1/project/project-04.jpg', category: 'App / Development', title: 'Online Learning Platform' },
    { image: '/assets/img/home-1/project/project-05.jpg', category: 'App / Development', title: 'Online Learning Platform' },
  ]

  return (
    <section className="project-section tp-project-5-2-area fix section-padding">
      <div className="container">
        <div className="section-title tp-project-5-2-title">
          <h6>my featured projects</h6>
          <h2 className="">works</h2>
        </div>
        <div className="design-choose-item-wrap">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="project-box-items design-choose-item-1">
                <div className="thumb">
                  <Image src={projects[0].image} alt="img" width={600} height={400} />
                  <div className="content">
                    <p>{projects[0].category}</p>
                    <h3><Link href="/project-details">{projects[0].title}</Link></h3>
                  </div>
                  <Link href="/project-details" className="circle-icon">
                    <i className="fa-solid fa-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="project-box-items design-choose-item-2">
                <div className="thumb">
                  <Image src={projects[1].image} alt="img" width={600} height={400} />
                  <div className="content">
                    <p>{projects[1].category}</p>
                    <h3><Link href="/project-details">{projects[1].title}</Link></h3>
                  </div>
                  <Link href="/project-details" className="circle-icon">
                    <i className="fa-solid fa-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="project-box-items top_view">
              <div className="thumb fix">
                <Image src={projects[2].image} alt="img" width={1200} height={600} />
                <div className="content">
                  <p>{projects[2].category}</p>
                  <h3><Link href="/project-details">{projects[2].title}</Link></h3>
                </div>
                <Link href="/project-details" className="circle-icon">
                  <i className="fa-solid fa-arrow-up-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="design-choose-item-wrap">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="project-box-items design-choose-item-1">
                <div className="thumb">
                  <Image src={projects[3].image} alt="img" width={600} height={400} />
                  <div className="content">
                    <p>{projects[3].category}</p>
                    <h3><Link href="/project-details">{projects[3].title}</Link></h3>
                  </div>
                  <Link href="/project-details" className="circle-icon">
                    <i className="fa-solid fa-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="project-box-items design-choose-item-2">
                <div className="thumb">
                  <Image src={projects[4].image} alt="img" width={600} height={400} />
                  <div className="content">
                    <p>{projects[4].category}</p>
                    <h3><Link href="/project-details">{projects[4].title}</Link></h3>
                  </div>
                  <Link href="/project-details" className="circle-icon">
                    <i className="fa-solid fa-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project-btn-all wow fadeInUp" data-wow-delay=".3s">
          <Link href="/project" className="theme-btn">view all works <i className="fa-solid fa-arrow-up-right"></i></Link>
          <Link href="/contact" className="theme-btn">contact with me  <i className="fa-solid fa-arrow-up-right"></i></Link>
        </div>
      </div>
    </section>
  )
}

