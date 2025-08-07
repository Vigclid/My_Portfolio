import React, { useEffect, useRef, useState } from 'react'

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" className="contact-section py-5" ref={sectionRef}>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="section-title mb-4">Get In Touch</h2>
            <p className="lead">
              I'm always open to discussing new opportunities and interesting projects. 
              Let's connect and see how we can work together!
            </p>
          </div>
        </div>
        
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className={`contact-card ${isVisible ? 'animate-in' : ''}`}>
              <div className="card">
                <div className="card-body p-5">
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="contact-item d-flex align-items-center mb-4">
                        <i className="fas fa-envelope text-primary me-3 fs-5"></i>
                        <div>
                          <h6 className="fw-semibold mb-1">Email</h6>
                          <a 
                            href="mailto:limbo04112004@gmail.com" 
                            className="text-decoration-none"
                          >
                            limbo04112004@gmail.com
                          </a>
                        </div>
                      </div>
                      
                      <div className="contact-item d-flex align-items-center">
                        <i className="fas fa-phone text-primary me-3 fs-5"></i>
                        <div>
                          <h6 className="fw-semibold mb-1">Phone</h6>
                          <a 
                            href="tel:+84356759177" 
                            className="text-decoration-none"
                          >
                            +84 356759177
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-md-6 mb-4">
                      <div className="contact-item d-flex align-items-center mb-4">
                        <i className="fas fa-map-marker-alt text-primary me-3 fs-5"></i>
                        <div>
                          <h6 className="fw-semibold mb-1">Location</h6>
                          <span>Da Nang, Vietnam</span>
                        </div>
                      </div>
                      
                      <div className="contact-item d-flex align-items-center">
                        <i className="fab fa-linkedin text-primary me-3 fs-5"></i>
                        <div>
                          <h6 className="fw-semibold mb-1">LinkedIn</h6>
                          <a 
                            href="https://linkedin.com/in/doanxuanson" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-decoration-none"
                          >
                            linkedin.com/in/doanxuanson
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center mt-4">
                    <a 
                      href="mailto:limbo04112004@gmail.com"
                      className="btn btn-primary btn-lg"
                    >
                      <i className="fas fa-envelope me-2"></i>
                      Send Message
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
