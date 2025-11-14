import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Layout({ children, title, description }) {
  const [navOpen, setNavOpen] = useState(false)
  const location = useLocation()
  
  const isActive = (path) => location.pathname === path || location.pathname === path + '.html'
  
  return (
    <div>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      
      <header role="banner" className="site-header">
        <div className="container">
          <div className="header-brand">
            <h1 className="site-title">
              <Link to="/" aria-label="Cary Camp Home">
                Franklin L. Cary Camp
              </Link>
            </h1>
            <p className="site-tagline">Your Backyard Wilderness</p>
          </div>
          
          <nav role="navigation" aria-label="Main navigation" className="main-nav">
            <button 
              className="nav-toggle" 
              aria-expanded={navOpen} 
              aria-controls="nav-menu" 
              aria-label="Toggle navigation menu"
              onClick={() => setNavOpen(!navOpen)}
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
            
            <ul id="nav-menu" className={`nav-menu ${navOpen ? 'is-open' : ''}`}>
              <li>
                <Link to="/" {...(isActive('/') && {'aria-current': 'page'})}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" {...(isActive('/about') && {'aria-current': 'page'})}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/facilities" {...(location.pathname.startsWith('/facilities') && {'aria-current': 'page'})}>
                  Facilities
                </Link>
                <ul className="sub-menu">
                  <li><Link to="/facilities/campsites">Campsites</Link></li>
                  <li><Link to="/facilities/cabins">Cabins</Link></li>
                  <li><Link to="/facilities/shelters">Shelters</Link></li>
                  <li><Link to="/facilities/recreational">Recreation</Link></li>
                </ul>
              </li>
              <li>
                <Link to="/weddings" {...(isActive('/weddings') && {'aria-current': 'page'})}>
                  Events & Weddings
                </Link>
              </li>
              <li>
                <Link to="/policies" {...(isActive('/policies') && {'aria-current': 'page'})}>
                  Policies
                </Link>
              </li>
              <li>
                <Link to="/contact" {...(isActive('/contact') && {'aria-current': 'page'})}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content" role="main" className="main-content">
        {children}
      </main>

      <footer role="contentinfo" className="site-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Franklin L. Cary Camp</h3>
              <address>
                6286 State Road 26 East<br />
                Lafayette, IN 47905<br />
                <a href="tel:765-447-1990">(765) 447-1990</a><br />
                <a href="mailto:ranger@carycamp.com">ranger@carycamp.com</a>
              </address>
            </div>
            
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul>
                <li><Link to="/about/directions">Directions</Link></li>
                <li><Link to="/facilities">Facilities</Link></li>
                <li><Link to="/policies">Policies</Link></li>
                <li><Link to="/weddings">Events</Link></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h3>Activities</h3>
              <ul>
                <li><Link to="/compass-course">Compass Course</Link></li>
                <li><Link to="/bloodgood-trail">Bloodgood Trail</Link></li>
                <li><Link to="/facilities/recreational">Recreation</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2011-2025 <a href="http://www.sagamorebsa.org/">Sagamore Council</a>, <a href="http://www.scouting.org/">Boy Scouts of America</a></p>
            <p><small>Website content adapted from carycamp.com</small></p>
          </div>
        </div>
      </footer>
    </div>
  )
}