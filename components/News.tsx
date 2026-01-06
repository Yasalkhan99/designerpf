import Link from 'next/link'
import Image from 'next/image'

export default function News() {
  const newsItems = [
    { image: '/assets/img/home-1/news/news-01.jpg', category: 'web design', date: 'Aug 27, 5' },
    { image: '/assets/img/home-1/news/news-02.jpg', category: 'Marketing', date: 'Aug 27, 5' },
    { image: '/assets/img/home-1/news/news-03.jpg', category: 'ux/ui design', date: 'Aug 27, 5' },
  ]

  return (
    <section className="news-section section-padding fix">
      <div className="container">
        <div className="section-title-area">
          <div className="section-title">
            <h6>news & blog</h6>
            <h2 className="hero_title tv_hero_title hero_title_1">latest news <span> & article</span></h2>
          </div>
          <Link href="/news-grid" className="theme-btn">view all news <i className="fa-solid fa-arrow-up-right"></i></Link>
        </div>
        <div className="tp-service-pin">
          <div className="row">
            {newsItems.map((item, index) => (
              <div key={index} className="col-xl-12">
                <div className="news-main-box-items tp-service-panel">
                  <div className="news-content">
                    <h3>
                      <Link className="tp_text_invert" href="/news-details">
                        Unlocking the future of business how smart innovation <br />
                        creates lasting impact
                      </Link>
                    </h3>
                    <ul>
                      <li>
                        <div className="client-info">
                          <div className="client-image">
                            <Image src="/assets/img/home-1/news/client-01.png" alt="img" width={50} height={50} />
                          </div>
                          <div className="client-content">
                            <p className="name">Pixelone</p>
                            <p>Composed by</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <span>{item.category}</span>
                        <span className="color-2">{item.date}</span>
                      </li>
                    </ul>
                  </div>
                  <div className="news-image">
                    <Image src={item.image} alt="img" width={600} height={400} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

