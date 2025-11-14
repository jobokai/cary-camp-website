import Layout from '../components/Layout'

export default function About() {
  return (
    <Layout title="About Cary Camp">
      <div className="page-content">
        <div className="container">
          <article>
            <h1>About Cary Camp</h1>
            
            <section>
              <h2>Our History</h2>
              <p>The original Cary Camp tract was purchased in April 1927 for use as a camp site. On behalf of the "Tippecanoe Council", Mr. Frank M. Cary, a Lafayette manufacturer and philanthropist, purchased the 44.14 acres under lease on December 29, 1927, for $4,414.00.</p>
              
              <p>He promptly deeded the tract over to the Boy Scouts of America, "…in hope that the present and future generations of boys will, by use of said real estate as Boy Scouts, become useful and honored citizens…". The deed required that the camp be forever known as Franklin Levering Cary Camp in memory of Mr. Cary's only son.</p>
              
              <figure>
                <img src="https://www.carycamp.com/about/original_camp.jpg" alt="Hand-drawn sketch map showing the layout of the original Cary Camp with buildings, paths, and natural features like Wildcat Creek" />
                <figcaption>Sketch of the original Cary Camp layout from 1927</figcaption>
              </figure>
            </section>
            
            <section>
              <h2>Cary Camp Today</h2>
              <p>Today, Franklin L. Cary Camp encompasses more than 125 beautiful wooded acres bordering Wildcat Creek. The camp teems with wildlife including birds and various animals, and offers excellent canoeing and fishing opportunities along Wildcat Creek.</p>
              
              <p>Our facilities include a swimming pool, cabins, dining hall, and numerous other amenities available to youth groups virtually year-round, with the exception of summer months when the camp is devoted to Scout camping programs.</p>
              
              <figure>
                <img src="https://www.carycamp.com/about/current_camp.jpg" alt="Aerial photograph showing the current expanded Cary Camp with red boundary lines marking the original tract within the larger property" />
                <figcaption>Current Cary Camp boundaries (red border shows original 1927 tract)</figcaption>
              </figure>
            </section>
          </article>
        </div>
      </div>
    </Layout>
  )
}