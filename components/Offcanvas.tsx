import Link from 'next/link'
import Image from 'next/image'

export default function Offcanvas() {
  return (
    <>
      <div className="fix-area style-offcanvas-2">
        <div className="header-offcanvas-border">
          <div className="offcanvas__info">
            <Link href="/" className="offcanvas__logo" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
              <div style={{ width: '40px', height: '40px', background: 'var(--theme, #BFF747)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontWeight: '800', fontSize: '18px' }}>HN</div>
              <span style={{ color: '#fff', fontSize: '20px', fontWeight: '700', letterSpacing: '2px' }}>DESIGNS</span>
            </Link>
            <div className="offcanvas__close">
              <button>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="contact-information">
              <h3>Get In Touch</h3>
              <ul className="contact-list">
                <li>
                  <span>Phone</span>
                  <a href="tel:+01626479559">01626479559</a>
                </li>
                <li>
                  <span>Email</span>
                  <a href="mailto:hi.hndesigns@gmail.com">hi.hndesigns@gmail.com</a>
                </li>
                <li>
                  <span>Address</span>
                  Based on honululu city, USA
                </li>
                <li>
                  <span>Follow us</span>
                  <div className="social-icon">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="offcanvas__wrapper">
              <div className="offcanvas__content">
                <div className="mobile-menus fix"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="offcanvas__overlay"></div>
    </>
  )
}

