import CampMap from '../components/CampMap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ImageLightbox from '../components/ImageLightbox'
import Layout from '../components/Layout'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export default function About() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImage, setLightboxImage] = useState({ src: '', alt: '', caption: '' })
  
  const openLightbox = (src, alt, caption) => {
    setLightboxImage({ src, alt, caption })
    setLightboxOpen(true)
  }
  
  const closeLightbox = () => {
    setLightboxOpen(false)
  }
  
  return (
    <Layout title="About Cary Camp">
      <div className="page-content seamless-bottom">
        <div className="container">
          <article>
            <h1>About Cary Camp</h1>
            
            <section className="about-intro">
              <div className="about-text">
                <h2>Our History</h2>
                <p>The original Cary Camp tract was purchased in April 1927 for use as a camp site. On behalf of the "Tippecanoe Council", Mr. Frank M. Cary, a Lafayette manufacturer and philanthropist, purchased the 44.14 acres under lease on December 29, 1927, for $4,414.00.</p>
                
                <p>He promptly deeded the tract over to the Boy Scouts of America, "…in hope that the present and future generations of boys will, by use of said real estate as Boy Scouts, become useful and honored citizens…". The deed required that the camp be forever known as Franklin Levering Cary Camp in memory of Mr. Cary's only son.</p>
              </div>
              
              <div className="about-image">
                <figure>
                  <img 
                    src="https://www.carycamp.com/about/original_camp.jpg" 
                    alt="Hand-drawn sketch map showing the layout of the original Cary Camp with buildings, paths, and natural features like Wildcat Creek" 
                    onClick={() => openLightbox(
                      'https://www.carycamp.com/about/original_camp.jpg',
                      'Hand-drawn sketch map showing the layout of the original Cary Camp with buildings, paths, and natural features like Wildcat Creek',
                      'Sketch of the original Cary Camp layout from 1927'
                    )}
                    className="clickable-image"
                  />
                  <figcaption><span>Sketch of the original Cary Camp layout from 1927</span></figcaption>
                </figure>
              </div>
            </section>
            
            <section className="about-current">
              <div className="about-image">
                <figure>
                  <img 
                    src="https://www.carycamp.com/about/current_camp.jpg" 
                    alt="Aerial photograph showing the current expanded Cary Camp with red boundary lines marking the original tract within the larger property" 
                    onClick={() => openLightbox(
                      'https://www.carycamp.com/about/current_camp.jpg',
                      'Aerial photograph showing the current expanded Cary Camp with red boundary lines marking the original tract within the larger property',
                      'Current Cary Camp boundaries (red border shows original 1927 tract)'
                    )}
                    className="clickable-image"
                  />
                  <figcaption><span>Current Cary Camp boundaries (red border shows original 1927 tract)</span></figcaption>
                </figure>
              </div>
              
              <div className="about-text">
                <h2>Cary Camp Today</h2>
                <p>Today, Franklin L. Cary Camp encompasses more than 125 beautiful wooded acres bordering Wildcat Creek. The camp teems with wildlife including birds and various animals, and offers excellent canoeing and fishing opportunities along Wildcat Creek.</p>
                
                <p>Our facilities include a swimming pool, cabins, dining hall, and numerous other amenities available to youth groups virtually year-round, with the exception of summer months when the camp is devoted to Scout camping programs.</p>
                
                <div className="cta-button-group">
                  <a href="/documents/camp_map_color.pdf" className="cta-button cta-button--secondary">
                    <FontAwesomeIcon icon={faFilePdf} className="cta-button__icon cta-button__icon--left" aria-hidden="true" />
                    View Color Map
                    <span className="sr-only">(PDF)</span>
                  </a>
                  <a href="/documents/camp_map.pdf" className="cta-button cta-button--secondary">
                    <FontAwesomeIcon icon={faFilePdf} className="cta-button__icon cta-button__icon--left" aria-hidden="true" />
                    View Black & White Map
                    <span className="sr-only">(PDF)</span>
                  </a>
                </div>
              </div>
            </section>
            
            <section className="svg-map-section" style={{borderTop: '15px solid #fdc116'}}>
              <div className="svg-map-container">
                <img src="/images/CaryCampMap.svg" alt="Detailed map of Cary Camp showing all facilities, trails, and natural features" className="camp-svg-map" />
              </div>
            </section>
            
          </article>
        </div>
      </div>
      
      <ImageLightbox 
        src={lightboxImage.src}
        alt={lightboxImage.alt}
        caption={lightboxImage.caption}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
      />
    </Layout>
  )
}