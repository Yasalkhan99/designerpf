import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="hero-section hero-1 hero-section1 fix">
      <div className="line-shape">
        <Image src="/assets/img/home-1/hero/line-shape.png" alt="img" width={200} height={200} />
      </div>
      <div className="hero-info">
        <Image src="/assets/img/home-1/hero/info.png" alt="img" width={100} height={100} />
        <span>
          trusted clients <br />
          world wide
        </span>
      </div>
      <div className="vec-shape float-bob-x">
        <Image src="/assets/img/home-1/hero/vec-shape.png" alt="img" width={100} height={100} />
      </div>
      <div className="container">
        <div className="row g-0 align-items-center">
          <div className="col-xl-5">
            <div className="hero-content">
              <p className="wow fadeInUp">welcome to my profile</p>
              <h1 className="wow fadeInUp" data-wow-delay=".3s">
                <b> I'm</b> HAMMAD NOOR <br />
                <strong id="typing-text"></strong><span>.</span>
              </h1>
              <Link href="/project" className="theme-btn wow fadeInUp" data-wow-delay=".5s">
                view portfolio <i className="fa-solid fa-arrow-up-right"></i>
              </Link>
              <div className="social-link wow fadeInUp" data-wow-delay=".7s">
                <a href="#">Facebook</a>
                <a href="#">Twitter</a>
                <a href="#">Linkedin</a>
                <a href="#">Dribbble</a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 order-2 order-xl-1">
            <div className="hero-image image-wrapper">
              <Image className="animated-image" src="/assets/img/home-1/hero/hero-image.png" alt="img" width={600} height={800} />
            </div>
          </div>
          <div className="col-xl-3 order-1 order-xl-2">
            <div className="content wow fadeInUp" data-wow-delay=".3s">
              <p>
                We're a team of strategic working globally with largest brands, We believe that progress only you to play things safe.
              </p>
              <a href="https://www.youtube.com/watch?v=-sAOWhvheK8" className="video-btn video-popup">
                <span className="icon"><i className="fa-solid fa-play"></i></span>
                <span className="text">Show Reel</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

