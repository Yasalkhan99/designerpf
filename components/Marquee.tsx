import Image from 'next/image'

export default function Marquee() {
  const marqueeItems = Array(6).fill(null).map((_, i) => (
    <div key={i} className="marquee-text">
      <Image src="/assets/img/home-1/hero/star.png" alt="img" width={30} height={30} />
      <h3>THE BEST SOLUTION</h3>
    </div>
  ))

  return (
    <section className="marquee-section fix">
      <div className="marquee-container">
        <div className="marquee-wrapper">
          <div className="marquee-content">
            {marqueeItems}
          </div>
          <div className="marquee-content">
            {marqueeItems}
          </div>
          <div className="marquee-content">
            {marqueeItems}
          </div>
        </div>
      </div>
    </section>
  )
}

