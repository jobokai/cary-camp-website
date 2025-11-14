import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout title="Franklin L. Cary Camp">
      <section className="hero" aria-labelledby="hero-heading">
        <div className="container">
          <h1 id="hero-heading">Franklin L. Cary Camp</h1>
          <p className="motto">Your Backyard Wilderness</p>
          <p className="hero-description">
            Franklin Levering Cary Camp is 125 wooded acres just east of Lafayette, Indiana. 
            Operated by the Sagamore Council, Boy Scouts of America, our camp offers Cub Scout programs, 
            camping facilities, and outdoor adventures for Scout groups and the general public.
          </p>
          <Link to="/facilities" className="cta-button" role="button">
            Explore Our Facilities
          </Link>
        </div>
      </section>

      <section className="page-content" aria-labelledby="welcome-heading">
        <div className="container">
          <h2 id="welcome-heading">Welcome to Cary Camp</h2>
          
          <div className="content-grid">
            <article className="content-card">
              <h3>Facilities & Accommodations</h3>
              <img src="https://www.carycamp.com/facilities/index_council_ring.jpg" alt="Evening campfire at the Council Ring with scouts gathered around" />
              <p>Our camp features campsites, cabins, shelters, and the McAllister Scouting Center. Most facilities are available for rent to both Scout groups and the general public.</p>
              <Link to="/facilities">View All Facilities</Link>
            </article>
            
            <article className="content-card">
              <h3>Outdoor Adventures</h3>
              <img src="https://www.carycamp.com/small_bridge.jpg" alt="Wooden footbridge crossing through wooded trails at Cary Camp" />
              <p>Miles of trails, compass courses, recreational facilities, and the scenic Bloodgood Trail offer endless opportunities for outdoor exploration and learning.</p>
              <Link to="/facilities/recreational">Discover Activities</Link>
            </article>
            
            <article className="content-card">
              <h3>Events & Weddings</h3>
              <img src="https://www.carycamp.com/weddings/bridge.jpg" alt="Rustic wooden bridge in natural woodland setting perfect for events" />
              <p>Host your special event in our beautiful outdoor setting. Rustic weddings, family reunions, and retreats find the perfect backdrop in our wooded acres.</p>
              <Link to="/weddings">Plan Your Event</Link>
            </article>
          </div>
        </div>
      </section>
    </Layout>
  )
}