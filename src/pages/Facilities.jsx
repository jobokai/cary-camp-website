import Hero from '../components/Hero'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'

export default function Facilities() {
  return (
    <Layout title="Facilities - Cary Camp">
      <section className="seamless-bottom page-hero">
        <div className="page-hero__image blue">
          <img src="/images/hero/camping.jpg" alt="camping at cary camp" />
        </div>
        <div className="page-hero__overlay">
          <div className="page-hero__content">
            <h1>Camp Facilities</h1>
            <p>Explore the wide variety of facilities available for rental at Cary Camp.</p>
          </div>
        </div>
      </section>
      <div className="facility-locations">
        <div className="facility-location facility-location--left">
          <div className="facility-location__image">
            <img src="/images/council-ring.jpg" alt="Council ring" />
          </div>
          <div className="facility-location__content">
            <h2>Council Ring</h2>
            <p>The Council Ring is an outdoor amphitheater used for campfires, ceremonies, and group gatherings. It features tiered seating arranged in a semicircle around a central fire pit, providing an ideal setting for storytelling, skits, and songs under the stars.</p>
            <Link to="/facilities/council-ring">Learn more</Link>
          </div>
        </div>
        <div className="facility-location facility-location--right">
          <div className="facility-location__image">
            <img src="/images/mcallister.jpg" alt="McAllister Scouting Center" />
          </div>
          <div className="facility-location__content">
            <h2>McAllister Scouting Center</h2>
            <p>The McAllister Scouting Center serves as the main hub for administrative activities, meetings, and indoor events at Cary Camp. It is equipped with meeting rooms, a kitchen, and dining facilities to accommodate various group needs.</p>
            <Link to="/facilities/mcallister">Learn more</Link>
          </div>
        </div>
        <div className="facility-location facility-location--left">
          <div className="facility-location__image">
            <img src="/images/bunk-room.jpg" alt="Cabins at Cary Camp" />
          </div>
          <div className="facility-location__content">
            <h2>Cabins & Lodging</h2>
            <p>Cary Camp offers several cabins for lodging, including Tecumseh Lodge, Shawnee Cabin, and Sioux Cabin. These cabins provide comfortable accommodations with bunk beds, heating, and electricity, making them ideal for overnight stays.</p>
            <Link to="/facilities/cabins">Learn more</Link>
          </div>
        </div>
        <div className="facility-location facility-location--right">
          <div className="facility-location__image">
            <img src="/images/camping-tents.jpg" alt="Campsites at Cary Camp" />
          </div>
          <div className="facility-location__content">
            <h2>Campsites</h2>
            <p>Cary Camp features five well-equipped campsites, each with shelters, fire rings, picnic tables, and access to water and sanitation facilities. These campsites are perfect for Scout troops and outdoor groups looking to experience camping in a natural setting.</p>
            <Link to="/facilities/campsites">Learn more</Link>
          </div>
        </div>
        <div className="facility-location facility-location--left">
          <div className="facility-location__image">
            <img src="/images/shelter.jpg" alt="Shelter houses at Cary Camp" />
          </div>
          <div className="facility-location__content">
            <h2>Shelter Houses</h2>
            <p>Cary Camp has six shelter houses available for group use. These shelters provide covered spaces for picnics, meetings, and activities, offering protection from the elements while allowing groups to enjoy the outdoors.</p>
            <Link to="/facilities/shelters">Learn more</Link>
          </div>
        </div>
        <div className="facility-location facility-location--right">
          <div className="facility-location__image">
            <img src="/images/black-hole.jpg" alt="Recreational facilities at Cary Camp" />
          </div>
          <div className="facility-location__content">
            <h2>Recreational Facilities</h2>
            <p>Cary Camp offers a variety of recreational facilities, including an Olympic-sized swimming pool, sports fields, and access to Wildcat Creek for canoeing and fishing. These amenities provide ample opportunities for outdoor fun and physical activity.</p>
            <Link to="/facilities/recreational">Learn more</Link>
          </div>
        </div>
        <div className="facility-location facility-location--left">
          <div className="facility-location__image">
            <img src="/images/placeholder.jpg" alt="Outdoor chapel at Cary Camp" />
          </div>
          <div className="facility-location__content">
            <h2>Outdoor Chapel</h2>
            <p>The Outdoor Chapel at Cary Camp is a serene space for worship, reflection, and ceremonies. Surrounded by nature, it provides a peaceful setting for spiritual gatherings and special events.</p>
            <Link to="/facilities/chapel">Learn more</Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}