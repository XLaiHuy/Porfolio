import { useEffect, useMemo, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Evaluation from './components/Evaluation'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'evaluation', label: 'AI Evaluation' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const sectionIds = useMemo(() => sections.map((section) => section.id), [])

  useEffect(() => {
    const observers = []

    const revealElements = document.querySelectorAll('[data-reveal]')
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.16, rootMargin: '0px 0px -60px 0px' },
    )

    revealElements.forEach((element) => revealObserver.observe(element))
    observers.push(revealObserver)

    const sectionElements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleSection?.target?.id) {
          setActiveSection(visibleSection.target.id)
        }
      },
      {
        threshold: [0.2, 0.35, 0.5, 0.7],
        rootMargin: '-20% 0px -55% 0px',
      },
    )

    sectionElements.forEach((element) => sectionObserver.observe(element))
    observers.push(sectionObserver)

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [sectionIds])

  return (
    <div className="app-shell">
      <Header
        sections={sections}
        activeSection={activeSection}
        onNavigate={setActiveSection}
      />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Evaluation />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
