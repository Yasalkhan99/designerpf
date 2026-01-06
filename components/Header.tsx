'use client'

import Link from 'next/link'
import Image from 'next/image'
import '../app/navbar-override.css'

export default function Header() {
  return (
    <header id="header-sticky" className="header-1">
      <div className="container">
        <div className="mega-menu-wrapper">
          <div className="header-main">
            <Link href="/" className="offcanvas__logo" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
              <div style={{ width: '40px', height: '40px', background: 'var(--theme, #BFF747)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontWeight: '800', fontSize: '18px' }}>HN</div>
              <span style={{ color: '#fff', fontSize: '20px', fontWeight: '700', letterSpacing: '2px' }}>DESIGNS</span>
            </Link>
            <div className="header-right justify-content-end align-items-center">
              <div className="mean__menu-wrapper d-none">
                <div className="main-menu">
                  <nav id="mobile-menus">
                    <ul>
                      <li className="active">
                        <Link href="/" className="border-none">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link href="/about">about me</Link>
                      </li>
                      <li className="has-dropdown">
                        <a href="javascript:void(0)">
                          Pages
                        </a>
                        <ul className="submenu">
                          <li className="has-dropdown">
                            <a href="javascript:void(0)">
                              Service
                              <i className="fas fa-angle-right"></i>
                            </a>
                            <ul className="submenu">
                              <li><Link href="/service">Services</Link></li>
                              <li><Link href="/service-details">Service Details</Link></li>
                            </ul>
                          </li>
                          <li><Link href="/faq">Our Faq</Link></li>
                          <li><Link href="/404">404 Page</Link></li>
                        </ul>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          Portfolio
                        </a>
                        <ul className="submenu">
                          <li><Link href="/project">Portfolio Page</Link></li>
                          <li><Link href="/project-grid">Portfolio Grid</Link></li>
                          <li><Link href="/project-details">Portfolio Details</Link></li>
                        </ul>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          Blog
                        </a>
                        <ul className="submenu">
                          <li><Link href="/news-grid">Blog Grid</Link></li>
                          <li><Link href="/news">Blog Standard</Link></li>
                          <li><Link href="/news-details">Blog Details</Link></li>
                        </ul>
                      </li>
                      <li>
                        <Link href="/contact">Contact Us</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <Link href="/contact" className="theme-btn">Hire Me <i className="fa-solid fa-arrow-up-right"></i></Link>
              <div className="header__hamburger my-auto">
                <div className="sidebar__toggle">
                  <Image src="/assets/img/bar.svg" alt="img" width={30} height={30} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

