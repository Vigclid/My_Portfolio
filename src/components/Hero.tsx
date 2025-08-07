import React, { useEffect, useState } from 'react'

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            <div className={`hero-content ${isVisible ? 'animate-in' : ''}`}>
              <h1 className="hero-title mb-4">Doan Xuan Son</h1>
              <p className="hero-subtitle mb-4">Full-Stack Web Developer</p>
              
              <div className="hero-info mb-5">
                <div className="info-item">
                  <i className="fas fa-map-marker-alt me-2"></i>
                  Da Nang, Vietnam
                </div>
                <div className="info-item">
                  <i className="fas fa-phone me-2"></i>
                  +84 356759177
                </div>
              </div>
              
              <div className="hero-buttons">
                <button 
                  className="btn btn-primary btn-lg me-3"
                  onClick={() => scrollToSection('contact')}
                >
                  <i className="fas fa-envelope me-2"></i>
                  Get In Touch
                </button>
                <a 
                  href="https://linkedin.com/in/doanxuanson" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline-light btn-lg"
                >
                  <i className="fab fa-linkedin me-2"></i>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
    </section>
  )
}

export default Hero
