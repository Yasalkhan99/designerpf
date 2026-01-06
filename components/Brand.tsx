import Image from 'next/image'

export default function Brand() {
  const brands = Array.from({ length: 8 }, (_, i) => `/assets/img/home-1/brand/brand-${i + 1}.png`)

  return (
    <div className="brand-section section-padding">
      <div className="container">
        <div className="brand-text">
          <p>worldwide <b>valuable clients</b></p>
        </div>
        <div className="row g-3 g-xl-5">
          {brands.map((brand, index) => (
            <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="brand-box">
                <Image src={brand} alt="img" width={150} height={80} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

