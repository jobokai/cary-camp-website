import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import Hero from '../components/Hero'

export default function Facilities() {
  return (
    <Layout title="Facilities - Cary Camp">
      <Hero
        title="Camp Facilities"
        motto="Adventure Awaits"
        description="Cary Camp has a wide variety of facilities available for rental: campsites, cabins, shelters, McAllister Scouting Center, a trading post, health lodge, recreational facilities and an outdoor chapel."
        ctaText="Plan Your Stay"
        ctaLink="#facilities-grid"
        image="/images/hero/camping.jpg"
        imageAlt="Camping facilities at Cary Camp showing cabins and outdoor areas"
        variant="diagonal"
        theme="tan"
        direction="left"
      />
      
      <div className="page-content">
        <div className="container">
          <div id="facilities-grid" className="facilities-grid">
            <article className="facility-card">
              <div className="card__content">
                <h3><Link to="/facilities/campsites">Campsites</Link></h3>
                <p>Five campsites with running water, sanitary facilities, and picnic tables under permanent shelter roofs.</p>
              </div>
            </article>
            
            <article className="facility-card">
              <div className="card__content">
                <h3><Link to="/facilities/cabins">Cabins</Link></h3>
                <p>Three cabins: Tecumseh Lodge, Shawnee Cabin, and Sioux Cabin with varying capacities and amenities.</p>
              </div>
            </article>
            
            <article className="facility-card">
              <div className="card__content">
                <h3><Link to="/facilities/shelters">Shelters</Link></h3>
                <p>Six shelter houses, all wired for electricity with various amenities for groups and events.</p>
              </div>
            </article>
            
            <article className="facility-card">
              <div className="card__content">
                <h3><Link to="/facilities/mcallister">McAllister Scouting Center</Link></h3>
                <p>Large and small meeting rooms, commercial kitchen, and training rooms with audiovisual capabilities.</p>
              </div>
            </article>
            
            <article className="facility-card">
              <div className="card__content">
                <h3><Link to="/facilities/trade">Trading Post</Link></h3>
                <p>Scout shop with rank advancement emblems, insignia, camping gear, and summer camp merchandise.</p>
              </div>
            </article>
            
            <article className="facility-card">
              <div className="card__content">
                <h3><Link to="/facilities/recreational">Recreational Facilities</Link></h3>
                <p>Swimming pool, rifle/archery ranges, trails, canoes, and various outdoor activity equipment.</p>
              </div>
            </article>
          </div>
          
          <figure>
            <img src="https://www.carycamp.com/facilities/index_council_ring.jpg" alt="Council ring" />
            <figcaption>Evening campfire in the Council Ring</figcaption>
          </figure>
        </div>
      </div>
    </Layout>
  )
}