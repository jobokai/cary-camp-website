import Layout from '../components/Layout'

export default function Contact() {
  return (
    <Layout title="Contact - Cary Camp">
      <div className="page-content">
        <article>
          <h1>Camp Ranger</h1>
          
          <section aria-labelledby="current-ranger">
            <h2 id="current-ranger">Current Ranger</h2>
            <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <img 
                src="https://www.carycamp.com/ranger/wellner.jpg" 
                alt="Becky Wellner, Cary Camp Ranger" 
                style={{ borderRadius: '8px', maxWidth: '200px' }}
              />
              <div>
                <h3>Becky Wellner</h3>
                <p>Becky Wellner is the ranger at Cary Camp. To contact Becky, send email to <a href="mailto:ranger@carycamp.com">ranger@carycamp.com</a> or call <a href="tel:765-447-1990">(765) 447-1990</a>.</p>
              </div>
            </div>
          </section>
          
          <section aria-labelledby="contact-info">
            <h2 id="contact-info">Contact Information</h2>
            <address>
              <strong>Franklin L. Cary Camp</strong><br />
              6286 State Road 26 East<br />
              Lafayette, IN 47905<br />
              Phone: <a href="tel:765-447-1990">(765) 447-1990</a><br />
              Email: <a href="mailto:ranger@carycamp.com">ranger@carycamp.com</a>
            </address>
          </section>
          
          <section aria-labelledby="previous-rangers">
            <h2 id="previous-rangers">Previous Rangers</h2>
            <ul>
              <li>Charles "Chuck" Turner (2010-2014)</li>
              <li>George Nelson (1999-2010)</li>
              <li>Clavis Isley (1988-1998)</li>
              <li>Bill Easterbrook (1965-1988)</li>
              <li>Henry "Hank" Boze (1954-1965)</li>
              <li>Marshall Leming (?-1954)</li>
              <li>Frank Meyers</li>
            </ul>
            <img 
              src="https://www.carycamp.com/ranger/rangers.png" 
              alt="Ranger Recognition Plaque showing the history of Cary Camp Rangers" 
              style={{ marginTop: '1rem' }}
            />
          </section>
        </article>
      </div>
    </Layout>
  )
}