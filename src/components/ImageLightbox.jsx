import { useEffect, useState } from 'react'

export default function ImageLightbox({ src, alt, caption, isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }
    
    return () => {
      document.body.style.overflow = 'unset'
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])
  
  if (!isOpen) return null
  
  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose} aria-label="Close lightbox">
          ×
        </button>
        <img src={src} alt={alt} className="lightbox-image" />
        {caption && (
          <div className="lightbox-caption">
            <span>{caption}</span>
          </div>
        )}
      </div>
    </div>
  )
}