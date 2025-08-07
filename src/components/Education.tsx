import React, { useEffect, useRef, useState } from 'react'

const Education: React.FC = () => {
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

  const awards = [
    { prize: "First Prize", year: "2018", icon: "fas fa-trophy text-warning" },
    { prize: "Second Prize", year: "2022", icon: "fas fa-medal text-secondary" },
    { prize: "Third Prize", year: "", icon: "fas fa-award text-warning" }
  ]

  return (
    <section id="education" className="education-section py-5" ref={sectionRef}>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="section-title">Education & Achievements</h2>
          </div>
        </div>
        
        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className={`education-card ${isVisible ? 'animate-in' : ''}`}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title mb-4">
                    <i className="fas fa-graduation-cap text-primary me-2"></i>
                    Education
                  </h5>
                  
                  <div className="education-item mb-4">
                    <div className="education-border">
                      <h6 className="fw-semibold">Software Engineer</h6>
                      <p className="text-muted mb-1">FPT University Da Nang</p>
                      <small className="text-secondary">2022 - Present</small>
                    </div>
                  </div>
                  
                  <div className="education-item">
                    <div className="education-border-secondary">
                      <h6 className="fw-semibold">High School</h6>
                      <p className="text-muted mb-1">Luong The Vinh High School</p>
                      <small className="text-secondary">2019 - 2022</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6 mb-4">
            <div className={`achievements-card ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: '0.2s' }}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title mb-4">
                    <i className="fas fa-award text-primary me-2"></i>
                    Awards & Activities
                  </h5>
                  
                  <div className="awards-list mb-4">
                    {awards.map((award, index) => (
                      <div key={index} className="award-item d-flex align-items-center mb-3">
                        <i className={`${award.icon} me-3`}></i>
                        <span>{award.prize} in IT, Quang Binh Province {award.year && `(${award.year})`}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="activities">
                    <div className="activity-item mb-3">
                      <h6 className="fw-semibold mb-1">Leadership</h6>
                      <p className="small text-muted mb-0">
                        Leader of FPT-ICPC Club - Managing 50+ members and organizing technical events
                      </p>
                    </div>
                    
                    <div className="activity-item">
                      <h6 className="fw-semibold mb-1">Competition</h6>
                      <p className="small text-muted mb-0">
                        ICPC Central Vietnam Regional Contest - Top 6 teams from FPT University
                      </p>
                    </div>
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

export default Education
