import Layout from '../components/Layout'

export default function TradingPost() {
  return (
    <Layout title="Trading Post - Cary Camp">
      <section className="seamless-bottom page-hero">
        <div className="page-hero__image gray">
          <img src="/images/trade_main.jpg" alt="Trading Post main sales floor at Cary Camp" />
        </div>
        <div className="page-hero__overlay">
          <div className="page-hero__content">
            <h1>Trading Post / Scout Shop</h1>
            <p>Your one-stop shop for Scout advancement, camping gear, and Cary Camp merchandise.</p>
          </div>
        </div>
      </section>

      <section className="trading-post-hours-banner">
        <div className="container">
          <div className="hours-banner">
            <h2>Store Hours</h2>
            <div className="hours-grid-banner">
              <div className="hours-day">
                <span className="day">Monday</span>
                <span className="time">6:30-8:30 PM</span>
              </div>
              <div className="hours-day hours-day--closed">
                <span className="day">Tuesday</span>
                <span className="time">CLOSED</span>
              </div>
              <div className="hours-day">
                <span className="day">Wednesday</span>
                <span className="time">6:30-8:30 PM</span>
              </div>
              <div className="hours-day hours-day--closed">
                <span className="day">Thursday</span>
                <span className="time">CLOSED</span>
              </div>
              <div className="hours-day">
                <span className="day">Friday</span>
                <span className="time">6:30-8:30 PM</span>
              </div>
              <div className="hours-day hours-day--weekend">
                <span className="day">Saturday</span>
                <span className="time">9 AM - Noon</span>
              </div>
              <div className="hours-day hours-day--closed">
                <span className="day">Sunday</span>
                <span className="time">CLOSED</span>
              </div>
            </div>
            
            <div className="contact-banner">
              <div className="contact-item">
                <strong>Email:</strong> <a href="mailto:tradingpost@carycamp.com">tradingpost@carycamp.com</a>
              </div>
              <div className="contact-item">
                <strong>Appointments:</strong> Available by request
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <div className="container">
          <article>
            <section className="trading-post-info">
              <h2>About the Trading Post</h2>
              <p>The Trading Post/Scout Shop is located in the northwest corner of the McAllister Scouting Center, with its own entrance. Please check the <a href="https://m.facebook.com/CaryCampBSA/" target="_blank" rel="noopener noreferrer">Cary Camp Facebook page</a> for the most up-to-date hours.</p>
              
              <p>The Trading Post is closed on holidays, and is often open longer hours during Scouting events at Cary Camp. You are welcome to send questions or large orders to the Trading Post email in advance and we will prep it ahead to save you time.</p>
              
              <p>Please be aware that our trading post is staffed by a student that has class during the day; emails will be answered promptly after class.</p>
            </section>

            <section className="trading-post-services">
              <h2>Services & Products</h2>
              
              <div className="services-grid">
                <div className="service-card">
                  <h3>Rank Advancement</h3>
                  <p>The Trading Post carries rank advancement emblems and insignia. Large advancement orders can be accommodated with prior notice.</p>
                </div>
                
                <div className="service-card">
                  <h3>Unit Credit</h3>
                  <p>Pay with unit credit on account at Kokomo with prior arrangement. Contact Elizabeth Douglass for details.</p>
                </div>
                
                <div className="service-card">
                  <h3>Large Orders</h3>
                  <p>For bulk orders, contact <a href="mailto:Elizabeth.Douglass@scouting.org">Elizabeth.Douglass@scouting.org</a> or call Sagamore Council at 765-452-8253.</p>
                </div>
              </div>
            </section>

            <section className="trading-post-gallery">
              <h2>Trading Post Gallery</h2>
              
              <div className="gallery-grid">
                <figure className="gallery-item">
                  <img src="/images/trade_entrance.jpg" alt="Trading Post entrance" />
                  <figcaption><span>Entrance to the Trading Post</span></figcaption>
                </figure>
                
                <figure className="gallery-item">
                  <img src="/images/trade_counter.jpg" alt="Trading Post sales counter" />
                  <figcaption><span>The sales counter</span></figcaption>
                </figure>
                
                <figure className="gallery-item">
                  <img src="/images/trade_racks.jpg" alt="Ranks and insignia display" />
                  <figcaption><span>Ranks and insignia are available</span></figcaption>
                </figure>
                
                <figure className="gallery-item">
                  <img src="/images/trade_table.jpg" alt="Summer Camp T-shirts" />
                  <figcaption><span>Summer Camp T-shirts</span></figcaption>
                </figure>
                
                <figure className="gallery-item">
                  <img src="/images/trade_gear.jpg" alt="Camping gear display" />
                  <figcaption><span>Camping gear is also available</span></figcaption>
                </figure>
              </div>
            </section>
          </article>
        </div>
      </div>
    </Layout>
  )
}