import { Link, useLocation } from 'react-router-dom'

import { useState } from 'react'

export default function Layout({ children, title, description }) {
  const [navOpen, setNavOpen] = useState(false)
  const [facilitiesOpen, setFacilitiesOpen] = useState(false)
  const location = useLocation()
  
  const isActive = (path) => location.pathname === path || location.pathname === path + '.html'
  
  return (
    <div className="page-wrapper">
      <a href="#main-content" className="sr-only">Skip to main content</a>
      
      <header className="header" role="banner">
        <div className="container">
          <Link to="/" className="logo" aria-label="Cary Camp Home">
            <img src="/images/CaryCampPatch_transparent.png" alt="Cary Camp Logo" className="logo__image" />
            <div className="logo__text">
              <span className="logo__title">Franklin L. Cary Camp</span>
              <span className="logo__tagline">Your Backyard Wilderness</span>
            </div>
          </Link>
          
          <nav className="nav" role="navigation" aria-label="Main navigation">
            <Link 
              to="/" 
              className={`nav__link ${isActive('/') ? 'nav__link--active' : ''}`}
              {...(isActive('/') && {'aria-current': 'page'})}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`nav__link ${isActive('/about') ? 'nav__link--active' : ''}`}
              {...(isActive('/about') && {'aria-current': 'page'})}
            >
              About Us
            </Link>
            <div 
              className="nav__dropdown"
              onMouseEnter={() => setFacilitiesOpen(true)}
              onMouseLeave={() => setFacilitiesOpen(false)}
            >
              <Link 
                to="/facilities" 
                className={`nav__link nav__link--dropdown ${location.pathname.startsWith('/facilities') ? 'nav__link--active' : ''}`}
                {...(location.pathname.startsWith('/facilities') && {'aria-current': 'page'})}
              >
                What We Offer
                <svg className="nav__dropdown-icon" width="12" height="8" viewBox="0 0 12 8" fill="none">
                  <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <div className={`nav__dropdown-menu ${facilitiesOpen ? 'nav__dropdown-menu--open' : ''}`}>
                <Link to="/facilities" className="nav__dropdown-link">All Facilities</Link>
                <Link to="/facilities/campsites" className="nav__dropdown-link">Campsites</Link>
                <Link to="/facilities/cabins" className="nav__dropdown-link">Cabins & Lodging</Link>
                <Link to="/facilities/mcallister" className="nav__dropdown-link">Meeting Spaces</Link>
                <Link to="/facilities/recreational" className="nav__dropdown-link">Activities</Link>
              </div>
            </div>
            <Link 
              to="/contact" 
              className={`nav__link ${isActive('/contact') ? 'nav__link--active' : ''}`}
              {...(isActive('/contact') && {'aria-current': 'page'})}
            >
              Contact
            </Link>
            <Link to="/facilities" className="nav__cta">
              Plan Your Visit
            </Link>
          </nav>
          
          <div className="mobile-nav">
            <button 
              className="mobile-nav__toggle" 
              aria-expanded={navOpen} 
              aria-controls="mobile-menu" 
              aria-label="Toggle navigation menu"
              onClick={() => setNavOpen(!navOpen)}
            >
              <span className="mobile-nav__bar"></span>
              <span className="mobile-nav__bar"></span>
              <span className="mobile-nav__bar"></span>
            </button>
            
            <div id="mobile-menu" className={`mobile-nav__menu ${navOpen ? 'mobile-nav__menu--open' : ''}`}>
              <Link 
                to="/" 
                className={`mobile-nav__link ${isActive('/') ? 'mobile-nav__link--active' : ''}`}
                onClick={() => setNavOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`mobile-nav__link ${isActive('/about') ? 'mobile-nav__link--active' : ''}`}
                onClick={() => setNavOpen(false)}
              >
                About Us
              </Link>
              <details className="mobile-nav__dropdown">
                <summary className="mobile-nav__dropdown-toggle">What We Offer</summary>
                <div className="mobile-nav__dropdown-menu">
                  <Link 
                    to="/facilities" 
                    className={`mobile-nav__link ${location.pathname.startsWith('/facilities') ? 'mobile-nav__link--active' : ''}`}
                    onClick={() => setNavOpen(false)}
                  >
                    All Facilities
                  </Link>
                  <Link 
                    to="/facilities/campsites" 
                    className="mobile-nav__link"
                    onClick={() => setNavOpen(false)}
                  >
                    Campsites
                  </Link>
                  <Link 
                    to="/facilities/cabins" 
                    className="mobile-nav__link"
                    onClick={() => setNavOpen(false)}
                  >
                    Cabins & Lodging
                  </Link>
                  <Link 
                    to="/facilities/mcallister" 
                    className="mobile-nav__link"
                    onClick={() => setNavOpen(false)}
                  >
                    Meeting Spaces
                  </Link>
                  <Link 
                    to="/facilities/recreational" 
                    className="mobile-nav__link"
                    onClick={() => setNavOpen(false)}
                  >
                    Activities
                  </Link>
                </div>
              </details>
              <Link 
                to="/contact" 
                className={`mobile-nav__link ${isActive('/contact') ? 'mobile-nav__link--active' : ''}`}
                onClick={() => setNavOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/facilities" 
                className="mobile-nav__cta"
                onClick={() => setNavOpen(false)}
              >
                Plan Your Visit
              </Link>
            </div>
          </div>
        </div>
      </header>
      
      <main id="main-content" className="main-content" role="main">
        {children}
      </main>
      
      <footer className="footer texture-tree-rings texture-bg texture-bg-overlay--standard" role="contentinfo">
        <div className="container">
          <div className="footer__section">
            <h3>Franklin L. Cary Camp</h3>
            <p>Your Backyard Wilderness - 125 wooded acres of outdoor adventure just east of Lafayette, Indiana.</p>
          </div>
          
          <div className="footer__section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/about">About Camp</Link></li>
              <li><Link to="/facilities">Facilities</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer__section contact-info">
            <h3>Contact Info</h3>
            <address>
              <strong>Franklin L. Cary Camp</strong>
              6286 State Road 26 East<br />
              Lafayette, IN 47905<br />
              Phone: <a href="tel:765-447-1990">(765) 447-1990</a><br />
              Email: <a href="mailto:ranger@carycamp.com">ranger@carycamp.com</a>
            </address>
          </div>
        </div>
        
        <div className="footer__bottom">
          <div className="container">
            <p>&copy; {new Date().getFullYear()} Franklin L. Cary Camp. Operated by Sagamore Council, Boy Scouts of America.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}