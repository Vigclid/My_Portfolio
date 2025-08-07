import React, { useEffect, useRef, useState } from 'react'

const Skills: React.FC = () => {
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

  const technicalSkills = {
    "Programming Languages": ["Java", "JavaScript", "TypeScript", "C++", "C#", "C"],
    "Frontend Technologies": ["ReactJS", "Vue.js 3", "HTML", "CSS"],
    "Backend Technologies": ["Java Spring Boot", "ASP.NET Core 8"],
    "Database": ["SQL Server"],
    "Tools & Utilities": ["Git", "GitHub", "GitLab", "Postman", "Cloudinary", "Azure DevOps"]
  }

  const softSkills = [
    { skill: 'Communication', desc: 'Clear, concise, effective' },
    { skill: 'Teamwork', desc: 'Collaborative, supportive, reliable' },
    { skill: 'Problem-solving', desc: 'Analytical, creative, proactive' },
    { skill: 'Adaptability', desc: 'Flexible, agile, quick learner' },
    { skill: 'Leadership', desc: 'Inspiring, decisive, motivating' }
  ]

  return (
    <section id="skills" className="skills-section py-5" ref={sectionRef}>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="section-title">Technical Skills</h2>
          </div>
        </div>
        
        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className={`skills-card ${isVisible ? 'animate-in' : ''}`}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title mb-4">
                    <i className="fas fa-code text-primary me-2"></i>
                    Technical Skills
                  </h5>
                  
                  {Object.entries(technicalSkills).map(([category, skills], index) => (
                    <div key={category} className="skill-category mb-4">
                      <h6 className="fw-semibold mb-2">{category}</h6>
                      <div className="skills-tags">
                        {skills.map((skill, idx) => (
                          <span key={idx} className="badge bg-outline-primary me-2 mb-2">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6 mb-4">
            <div className={`skills-card ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: '0.2s' }}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title mb-4">
                    <i className="fas fa-users text-primary me-2"></i>
                    Soft Skills
                  </h5>
                  
                  {softSkills.map((item, index) => (
                    <div key={item.skill} className="soft-skill-item mb-3">
                      <div className="skill-border">
                        <h6 className="fw-semibold mb-1">{item.skill}</h6>
                        <p className="text-muted small mb-0">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
