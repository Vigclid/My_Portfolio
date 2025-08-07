import React, { useEffect, useRef, useState } from 'react'

const Projects: React.FC = () => {
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
    <section id="projects" className="projects-section py-5" ref={sectionRef}>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="section-title">Featured Projects</h2>
          </div>
        </div>
        
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className={`project-card ${isVisible ? 'animate-in' : ''}`}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title mb-2">Artwork Trading and Management System</h5>
                  <p className="card-subtitle text-muted mb-3">
                    Full-stack web application for artwork trading with real-time features
                  </p>
                  
                  <p className="card-text mb-4">
                    A comprehensive platform for artwork trading featuring real-time chat, secure payment processing, 
                    and optimized database performance. Led a team of 5 developers to deliver this scalable solution.
                  </p>
                  
                  <div className="technologies mb-4">
                    {['Java', 'Spring Boot', 'ReactJS', 'SQL Server', 'WebSocket', 'TypeScript'].map((tech, idx) => (
                      <span key={idx} className="badge bg-light text-dark me-2 mb-2">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="project-links">
                    <a 
                      href="https://github.com/Ty142/ArtHub-SWP" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary btn-sm me-2"
                    >
                      <i className="fab fa-github me-1"></i>
                      Backend
                    </a>
                    <a 
                      href="https://github.com/Vigclid/Frontend-SWP301" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary btn-sm"
                    >
                      <i className="fab fa-github me-1"></i>
                      Frontend
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

export default Projects
