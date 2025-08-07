'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, Mail, Linkedin, Github, MapPin, Phone, Award, Briefcase, GraduationCap, Code, Users, Trophy, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero')
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'skills', 'projects', 'education', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-800"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div 
              className="text-xl font-bold text-white"
              whileHover={{ scale: 1.05 }}
            >
              Doan Xuan Son
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Experience', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.toLowerCase() 
                      ? 'text-emerald-400' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"
          style={{ y }}
        />
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Doan Xuan Son
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Full-Stack Web Developer
            </motion.p>
            <motion.div 
              className="flex justify-center space-x-6 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center text-gray-400">
                <MapPin className="w-5 h-5 mr-2" />
                Da Nang, Vietnam
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="w-5 h-5 mr-2" />
                +84 356759177
              </div>
            </motion.div>
            <motion.div 
              className="flex justify-center space-x-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-emerald-600 hover:bg-emerald-700"
              >
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
              <Button variant="outline" asChild>
                <a href="https://linkedin.com/in/doanxuanson" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-gray-500" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-300 leading-relaxed">
                Aspiring Full-Stack Web Developer with hands-on experience in building scalable 
                web applications using ASP.NET Core, Vue.js, Spring Boot, and ReactJS. Looking to 
                join a professional environment where I can contribute my technical skills, learn from 
                real-world challenges, and grow into a high-impact software engineer.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Work Experience</h2>
          </motion.div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300 bg-gray-800 border-gray-700">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-white">Full-Stack Web Developer</CardTitle>
                      <CardDescription className="text-emerald-400 font-medium">FPT Software Da Nang - Internship</CardDescription>
                    </div>
                    <Badge variant="outline" className="text-gray-300 border-gray-600">
                      <Calendar className="w-3 h-3 mr-1" />
                      05/2025 - 09/2025
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Participated in the development of RESTful APIs and implemented Role-Based Access Control (RBAC)</li>
                    <li>• Designed project database schema and API specifications for scalable backend services</li>
                    <li>• Created UI mockups and contributed to frontend development using Vue.js 3</li>
                    <li>• Supported Business Analyst in clarifying requirements and validating with clients</li>
                    <li>• Used Azure DevOps for task management and participated in Agile/Scrum ceremonies</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {['C#', 'ASP.NET Core 8', 'Vue.js 3', 'SQL Server', 'SignalR', 'Azure DevOps'].map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300 bg-gray-800 border-gray-700">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-white">Team Lead / Full Stack Developer</CardTitle>
                      <CardDescription className="text-emerald-400 font-medium">Artwork Trading and Management System</CardDescription>
                    </div>
                    <Badge variant="outline" className="text-gray-300 border-gray-600">
                      <Calendar className="w-3 h-3 mr-1" />
                      01/2025 - 05/2025
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Designed and implemented backend using Java Spring Boot and frontend using ReactJS</li>
                    <li>• Integrated real-time chat/notification functionality using WebSocket</li>
                    <li>• Developed secure payment system via bank transactions</li>
                    <li>• Optimized database queries resulting in 35% reduction in query response time</li>
                    <li>• Managed a team of 5 members, planned project timelines, and monitored progress</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {['Java', 'ReactJS', 'Spring Boot', 'SQL Server', 'WebSocket', 'TypeScript'].map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Technical Skills</h2>
          </motion.div>
          
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <Code className="w-5 h-5 mr-2 text-emerald-600" />
                    Technical Skills
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-200 mb-2">Programming Languages</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Java', 'JavaScript', 'TypeScript', 'C++', 'C#', 'C'].map((skill) => (
                        <Badge key={skill} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-200 mb-2">Frontend Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {['ReactJS', 'Vue.js 3', 'HTML', 'CSS'].map((skill) => (
                        <Badge key={skill} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-200 mb-2">Backend Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Java Spring Boot', 'ASP.NET Core 8'].map((skill) => (
                        <Badge key={skill} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-200 mb-2">Tools & Utilities</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Git', 'GitHub', 'GitLab', 'Postman', 'Cloudinary', 'Azure DevOps'].map((skill) => (
                        <Badge key={skill} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <Users className="w-5 h-5 mr-2 text-emerald-600" />
                    Soft Skills
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { skill: 'Communication', desc: 'Clear, concise, effective' },
                    { skill: 'Teamwork', desc: 'Collaborative, supportive, reliable' },
                    { skill: 'Problem-solving', desc: 'Analytical, creative, proactive' },
                    { skill: 'Adaptability', desc: 'Flexible, agile, quick learner' },
                    { skill: 'Leadership', desc: 'Inspiring, decisive, motivating' }
                  ].map((item) => (
                    <div key={item.skill} className="border-l-4 border-emerald-500 pl-4">
                      <h4 className="font-semibold text-gray-200">{item.skill}</h4>
                      <p className="text-sm text-gray-300">{item.desc}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Featured Projects</h2>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300 bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-xl text-white">Artwork Trading and Management System</CardTitle>
                  <CardDescription>Full-stack web application for artwork trading with real-time features</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    A comprehensive platform for artwork trading featuring real-time chat, secure payment processing, 
                    and optimized database performance. Led a team of 5 developers to deliver this scalable solution.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['Java', 'Spring Boot', 'ReactJS', 'SQL Server', 'WebSocket', 'TypeScript'].map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://github.com/Ty142/ArtHub-SWP" target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Backend
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://github.com/Vigclid/Frontend-SWP301" target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Frontend
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
        <div className="container mx-auto px-6 mt-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300 bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-xl text-white">A GAME RENTAL, TRADING SYSTEM</CardTitle>
                  <CardDescription>Full-stack web application for game selling with renting features</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                     A full-stack web application for game selling and rental. The platform enables users to browse, 
                     rent, and purchase games seamlessly. The system was optimized for database performance 
                     and includes secure transaction handling and 
                     dynamic content rendering with JSP and JSTL.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['Java', 'Servlet', 'JSP', 'JSTL', 'SQL Server', 'HTML', 'CSS', 'JavaScript', 'Git'].map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://github.com/Vigclid/SteamKarimasu" target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education & Awards Section */}
      <section id="education" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Education & Achievements</h2>
          </motion.div>
          
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <GraduationCap className="w-5 h-5 mr-2 text-emerald-600" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <h4 className="font-semibold text-gray-200">Software Engineer</h4>
                    <p className="text-gray-300">FPT University Da Nang</p>
                    <p className="text-sm text-gray-500">2022 - Present</p>
                  </div>
                  <div className="border-l-4 border-slate-300 pl-4">
                    <h4 className="font-semibold text-gray-200">High School</h4>
                    <p className="text-gray-300">Luong The Vinh High School</p>
                    <p className="text-sm text-gray-500">2019 - 2022</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <Award className="w-5 h-5 mr-2 text-emerald-600" />
                    Awards & Activities
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Trophy className="w-4 h-4 mr-2 text-yellow-500" />
                      <span className="text-gray-200">First Prize in IT, Quang Binh Province (2018)</span>
                    </div>
                    <div className="flex items-center">
                      <Trophy className="w-4 h-4 mr-2 text-gray-400" />
                      <span className="text-gray-200">Second Prize in IT, Quang Binh Province (2022)</span>
                    </div>
                    <div className="flex items-center">
                      <Trophy className="w-4 h-4 mr-2 text-amber-600" />
                      <span className="text-gray-200">Third Prize in IT, Quang Binh Province</span>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-200 mb-2">Leadership</h4>
                    <p className="text-gray-300 text-sm">Leader of FPT-ICPC Club - Managing 50+ members and organizing technical events</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-200 mb-2">Competition</h4>
                    <p className="text-gray-300 text-sm">ICPC Central Vietnam Regional Contest - Top 6 teams from FPT University</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Get In Touch</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and interesting projects. 
              Let's connect and see how we can work together!
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 mr-3 text-emerald-600" />
                      <div>
                        <p className="font-medium text-gray-200">Email</p>
                        <a href="mailto:limbo04112004@gmail.com" className="text-gray-300 hover:text-emerald-600 transition-colors">
                          limbo04112004@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 mr-3 text-emerald-600" />
                      <div>
                        <p className="font-medium text-gray-200">Phone</p>
                        <a href="tel:+84356759177" className="text-gray-300 hover:text-emerald-600 transition-colors">
                          +84 356759177
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 mr-3 text-emerald-600" />
                      <div>
                        <p className="font-medium text-gray-200">Location</p>
                        <p className="text-gray-300">Da Nang, Vietnam</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Linkedin className="w-5 h-5 mr-3 text-emerald-600" />
                      <div>
                        <p className="font-medium text-gray-200">LinkedIn</p>
                        <a 
                          href="https://linkedin.com/in/doanxuanson" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-emerald-600 transition-colors"
                        >
                          linkedin.com/in/doanxuanson
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <Button 
                    size="lg" 
                    className="bg-emerald-600 hover:bg-emerald-700"
                    asChild
                  >
                    <a href="mailto:limbo04112004@gmail.com">
                      <Mail className="w-4 h-4 mr-2" />
                      Send Message
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-8 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Doan Xuan Son. Built with React and Next.js.
          </p>
        </div>
      </footer>
    </div>
  )
}
