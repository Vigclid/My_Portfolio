import React, { useEffect, useRef, useState } from 'react'

const About: React.FC = () => {
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
    <section id="about" className="about-section py-5" ref={sectionRef}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className={`section-content ${isVisible ? 'animate-in' : ''}`}>
              <h2 className="section-title mb-5">About Me</h2>
              <p className="lead">
                Aspiring Full-Stack Web Developer with hands-on experience in building scalable 
                web applications using ASP.NET Core, Vue.js, Spring Boot, and ReactJS. Looking to 
                join a professional environment where I can contribute my technical skills, learn from 
                real-world challenges, and grow into a high-impact software engineer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
