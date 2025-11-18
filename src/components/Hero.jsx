import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function Hero({ 
  title, 
  motto, 
  description, 
  ctaText, 
  ctaLink, 
  image, 
  imageAlt,
  variant = 'diagonal',
  theme = '',
  direction = 'right'
}) {
  // Build CSS classes based on props
  const heroClasses = [
    'hero',
    variant ? `hero--${variant}` : '',
    theme ? `hero--${theme}-theme` : '',
    direction === 'left' ? 'hero--diagonal-left' : ''
  ].filter(Boolean).join(' ')

  const heroStyle = variant === 'diagonal' && image ? {
    backgroundImage: `url(${image})`
  } : !image || variant === 'diagonal' ? {} : {
    backgroundImage: `url(${image})`
  }

  return (
    <section className={heroClasses} style={heroStyle}>
      {variant === 'diagonal' ? (
        <>
          <div className="hero__content">
            <h1>{title}</h1>
            {motto && <p className="hero__motto">{motto}</p>}
            {description && <p className="hero__description">{description}</p>}
            {ctaText && ctaLink && (
              <Link to={ctaLink} className="hero__cta">
                {ctaText}
                <FontAwesomeIcon icon={faArrowRight} className="hero__cta-icon" />
              </Link>
            )}
          </div>
          <div className="hero__image" />
        </>
      ) : (
        <div className="container">
          <h1>{title}</h1>
          {motto && <p className="hero__motto">{motto}</p>}
          {description && <p className="hero__description">{description}</p>}
          {ctaText && ctaLink && (
            <Link to={ctaLink} className="hero__cta">
              {ctaText}
              <FontAwesomeIcon icon={faArrowRight} className="hero__cta-icon" />
            </Link>
          )}
        </div>
      )}
    </section>
  )
}