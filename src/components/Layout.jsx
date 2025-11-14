import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Layout({ children, title, description }) {
  const [navOpen, setNavOpen] = useState(false)
  const location = useLocation()
  
  const isActive = (path) => location.pathname === path || location.pathname === path + '.html'
  
  return (
    <div className="page-wrapper">
      <a href="#main-content" className="sr-only">Skip to main content</a>
      
      <header className="header" role="banner">
        <div className="container">
          <Link to="/" className="logo" aria-label="Cary Camp Home">
            🏕️ Franklin L. Cary Camp
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
              About
            </Link>
            <Link 
              to="/facilities" 
              className={`nav__link ${location.pathname.startsWith('/facilities') ? 'nav__link--active' : ''}`}
              {...(location.pathname.startsWith('/facilities') && {'aria-current': 'page'})}
            >
              Facilities
            </Link>
            <Link 
              to="/contact" 
              className={`nav__link ${isActive('/contact') ? 'nav__link--active' : ''}`}
              {...(isActive('/contact') && {'aria-current': 'page'})}
            >
              Contact
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
              ☰
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
                About
              </Link>
              <Link 
                to="/facilities" 
                className={`mobile-nav__link ${location.pathname.startsWith('/facilities') ? 'mobile-nav__link--active' : ''}`}
                onClick={() => setNavOpen(false)}
              >
                Facilities
              </Link>
              <Link 
                to="/contact" 
                className={`mobile-nav__link ${isActive('/contact') ? 'mobile-nav__link--active' : ''}`}
                onClick={() => setNavOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </header>
      
      <main id="main-content" className="main-content" role="main">
        {children}
      </main>
      
      <footer className="footer" role="contentinfo">
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