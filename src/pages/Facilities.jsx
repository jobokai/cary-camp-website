import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

export default function Facilities() {
  return (
    <Layout title="Facilities - Cary Camp">
      <div className="page-content">
        <h1>Facilities</h1>
        <p>Cary Camp has a wide variety of facilities available for rental: campsites, cabins, shelters, McAllister Scouting Center, a trading post, health lodge, recreational facilities and an outdoor chapel.</p>
        
        <div className="facilities-grid">
          <article className="facility-card">
            <h3><Link to="/facilities/campsites">Campsites</Link></h3>
            <p>Five campsites with running water, sanitary facilities, and picnic tables under permanent shelter roofs.</p>
          </article>
          
          <article className="facility-card">
            <h3><Link to="/facilities/cabins">Cabins</Link></h3>
            <p>Three cabins: Tecumseh Lodge, Shawnee Cabin, and Sioux Cabin with varying capacities and amenities.</p>
          </article>
          
          <article className="facility-card">
            <h3><Link to="/facilities/shelters">Shelters</Link></h3>
            <p>Six shelter houses, all wired for electricity with various amenities for groups and events.</p>
          </article>
          
          <article className="facility-card">
            <h3><Link to="/facilities/mcallister">McAllister Scouting Center</Link></h3>
            <p>Large and small meeting rooms, commercial kitchen, and training rooms with audiovisual capabilities.</p>
          </article>
          
          <article className="facility-card">
            <h3><Link to="/facilities/trade">Trading Post</Link></h3>
            <p>Scout shop with rank advancement emblems, insignia, camping gear, and summer camp merchandise.</p>
          </article>
          
          <article className="facility-card">
            <h3><Link to="/facilities/recreational">Recreational Facilities</Link></h3>
            <p>Swimming pool, rifle/archery ranges, trails, canoes, and various outdoor activity equipment.</p>
          </article>
        </div>
        
        <figure>
          <img src="https://www.carycamp.com/facilities/index_council_ring.jpg" alt="Council ring" />
          <figcaption>Evening campfire in the Council Ring</figcaption>
        </figure>
      </div>
    </Layout>
  )
}