import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="footer-section fix pb-0">
      <div className="container">
        <div className="footer-wrapper wow fadeInUp" data-wow-delay=".3s">
          <ul className="footer-menu-list">
            <li><Link href="/">home</Link></li>
            <li><Link href="/about">ABOUT ME</Link></li>
            <li><Link href="/service">SERVICES</Link></li>
            <li><Link href="/project">PORTFOLIO</Link></li>
            <li><Link href="/news">news & blog</Link></li>
            <li><Link href="/contact">CONTACT US</Link></li>
          </ul>
          <div className="icon-items-area">
            <div className="icon-items">
              <a href="#" className="icon">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#">Facebook</a>
            </div>
            <div className="icon-items">
              <a href="#" className="icon">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#">Twitter</a>
            </div>
            <div className="icon-items">
              <a href="#" className="icon">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="#">Linkedin</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom wow fadeInUp" data-wow-delay=".3s">
          <p>Copyright © <span>HN DESIGNS</span></p>
          <Link href="/" className="footer-logo" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <div style={{ width: '35px', height: '35px', background: 'var(--theme, #BFF747)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontWeight: '800', fontSize: '16px' }}>HN</div>
            <span style={{ color: '#fff', fontSize: '18px', fontWeight: '700', letterSpacing: '2px' }}>DESIGNS</span>
          </Link>
          <ul>
            <li><Link href="/contact">Terms & Conditions</Link></li>
            <li><Link href="/contact">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

