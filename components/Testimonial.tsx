import Image from 'next/image'

export default function Testimonial() {
  const testimonials = [
    { name: 'Shikhon Islam', role: 'founder & CEO', image: '/assets/img/home-1/testimonial-image.jpg' },
    { name: 'Caroline caldwell', role: 'founder & CEO', image: '/assets/img/home-1/testimonial-image-2.jpg' },
    { name: 'Caroline caldwell', role: 'founder & CEO', image: '/assets/img/home-1/testimonial-image.jpg' },
  ]

  return (
    <section className="testimonial-section fix section-padding pt-0">
      <div className="container">
        <div className="testimonial-wrapper">
          <div className="array-button">
            <button className="array-prev"><i className="fa-solid fa-arrow-up-left"></i></button>
            <button className="array-next"><i className="fa-solid fa-arrow-down-right"></i></button>
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper testimonial-slider">
            <div className="swiper-wrapper">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="swiper-slide">
                  <div className="testimonial-box-items">
                    <div className="thumb">
                      <Image src={testimonial.image} alt="img" width={100} height={100} />
                      <div className="info-title">
                        <h4>{testimonial.name}</h4>
                        <span>{testimonial.role}</span>
                      </div>
                    </div>
                    <div className="content">
                      <div className="quote-icon">
                        <Image src="/assets/img/home-1/quote-icon.png" alt="img" width={50} height={50} />
                      </div>
                      <p>
                        Pixelr Creative Agency did an amazing job on our project. Their team is highly professional, creative, and always delivers on time. I'm really impressed with the quality of their design work. and the results were beyond expectations. They truly understand client needs and bring fresh modern ideas to the table.
                      </p>
                      <div className="clutech-image">
                        <Image src="/assets/img/home-1/clutech.png" alt="img" width={150} height={50} />
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

