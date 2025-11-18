import Layout from '../components/Layout'

export default function Contact() {
  return (
    <Layout title="Contact - Cary Camp">
      <div className="page-content">
        <div className="container">
          <article>
            <h1>Contact Cary Camp</h1>
            
            <section>
              <h2>Ranger</h2>
              <div className="ranger-info">
                <img 
                  src="https://www.carycamp.com/ranger/wellner.jpg" 
                  alt="Becky Wellner, Cary Camp Ranger"
                />
                <div className="ranger-details">
                  <h3>Becky Wellner</h3>
                  <p>Becky Wellner is the ranger at Cary Camp. To contact Becky, send email to <a href="mailto:ranger@carycamp.com">ranger@carycamp.com</a> or call <a href="tel:765-447-1990">(765) 447-1990</a>.</p>
                </div>
              </div>
            </section>
            
            <section>
              <h2>Contact Information</h2>
              <address>
                <strong>Franklin L. Cary Camp</strong><br />
                6286 State Road 26 East<br />
                Lafayette, IN 47905<br />
                Phone: <a href="tel:765-447-1990">(765) 447-1990</a><br />
                Email: <a href="mailto:ranger@carycamp.com">ranger@carycamp.com</a>
              </address>
            </section>
            
            <section>
              <h2>Previous Rangers</h2>
              <div className="rangers-list">
                
                <img 
                  src="https://www.carycamp.com/ranger/rangers.png" 
                  alt="Ranger Recognition Plaque showing the history of Cary Camp Rangers"
                />
                <ul>
                  <li>Charles "Chuck" Turner (2010-2014)</li>
                  <li>George Nelson (1999-2010)</li>
                  <li>Clavis Isley (1988-1998)</li>
                  <li>Bill Easterbrook (1965-1988)</li>
                  <li>Henry "Hank" Boze (1954-1965)</li>
                  <li>Marshall Leming (?-1954)</li>
                  <li>Frank Meyers</li>
                </ul>
              </div>
            </section>
          </article>
        </div>
      </div>
    </Layout>
  )
}