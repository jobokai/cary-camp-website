import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout title="Franklin L. Cary Camp">
      <section className="hero">
        <div className="container">
          <h1>Franklin L. Cary Camp</h1>
          <p className="hero__motto">Your Backyard Wilderness</p>
          <p className="hero__description">
            Franklin Levering Cary Camp is 125 wooded acres just east of Lafayette, Indiana. 
            Operated by the Sagamore Council, Boy Scouts of America, our camp offers Cub Scout programs, 
            camping facilities, and outdoor adventures for Scout groups and the general public.
          </p>
          <Link to="/facilities" className="cta-button">
            Explore Our Facilities
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Welcome to Cary Camp</h2>
          
          <div className="content-grid">
            <article className="card">
              <img 
                src="https://www.carycamp.com/facilities/index_council_ring.jpg" 
                alt="Evening campfire at the Council Ring with scouts gathered around"
                className="card__image"
              />
              <div className="card__content">
                <h3 className="card__title">Facilities & Accommodations</h3>
                <p className="card__description">
                  Our camp features campsites, cabins, shelters, and the McAllister Scouting Center. 
                  Most facilities are available for rent to both Scout groups and the general public.
                </p>
                <Link to="/facilities" className="card__link">View All Facilities</Link>
              </div>
            </article>
            
            <article className="card">
              <img 
                src="https://www.carycamp.com/small_bridge.jpg" 
                alt="Wooden footbridge crossing through wooded trails at Cary Camp"
                className="card__image"
              />
              <div className="card__content">
                <h3 className="card__title">Outdoor Adventures</h3>
                <p className="card__description">
                  Miles of trails, compass courses, recreational facilities, and the scenic Bloodgood Trail 
                  offer endless opportunities for outdoor exploration and learning.
                </p>
                <Link to="/facilities" className="card__link">Discover Activities</Link>
              </div>
            </article>
            
            <article className="card">
              <img 
                src="https://www.carycamp.com/weddings/bridge.jpg" 
                alt="Rustic wooden bridge in natural woodland setting perfect for events"
                className="card__image"
              />
              <div className="card__content">
                <h3 className="card__title">Events & Weddings</h3>
                <p className="card__description">
                  Host your special event in our beautiful outdoor setting. Rustic weddings, family reunions, 
                  and retreats find the perfect backdrop in our wooded acres.
                </p>
                <Link to="/contact" className="card__link">Plan Your Event</Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </Layout>
  )
}