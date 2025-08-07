import React, { useEffect, useRef, useState } from 'react'

const Experience: React.FC = () => {
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

  const experiences = [
    {
      title: "Full-Stack Web Developer",
      company: "FPT Software Da Nang - Internship",
      period: "05/2025 - 09/2025",
      responsibilities: [
        "Participated in the development of RESTful APIs and implemented Role-Based Access Control (RBAC)",
        "Designed project database schema and API specifications for scalable backend services",
        "Created UI mockups and contributed to frontend development using Vue.js 3",
        "Supported Business Analyst in clarifying requirements and validating with clients",
        "Used Azure DevOps for task management and participated in Agile/Scrum ceremonies"
      ],
      technologies: ["C#", "ASP.NET Core 8", "Vue.js 3", "SQL Server", "SignalR", "Azure DevOps"]
    },
    {
      title: "Team Lead / Full Stack Developer",
      company: "Artwork Trading and Management System",
      period: "01/2025 - 05/2025",
      responsibilities: [
        "Designed and implemented backend using Java Spring Boot and frontend using ReactJS",
        "Integrated real-time chat/notification functionality using WebSocket",
        "Developed secure payment system via bank transactions",
        "Optimized database queries resulting in 35% reduction in query response time",
        "Managed a team of 5 members, planned project timelines, and monitored progress"
      ],
      technologies: ["Java", "ReactJS", "Spring Boot", "SQL Server", "WebSocket", "TypeScript"]
    }
  ]

  return (
    <section id="experience" className="experience-section py-5" ref={sectionRef}>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="section-title">Work Experience</h2>
          </div>
        </div>
        
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`experience-card mb-4 ${isVisible ? 'animate-in' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div>
                        <h5 className="card-title mb-1">{exp.title}</h5>
                        <h6 className="card-subtitle text-primary">{exp.company}</h6>
                      </div>
                      <span className="badge bg-secondary">
                        <i className="fas fa-calendar me-1"></i>
                        {exp.period}
                      </span>
                    </div>
                    
                    <ul className="list-unstyled mb-3">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="mb-2">
                          <i className="fas fa-check-circle text-primary me-2"></i>
                          {resp}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="technologies">
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className="badge bg-light text-dark me-2 mb-2">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
