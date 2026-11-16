import Hero from '../components/sections/Hero'
import TechMarquee from '../components/sections/TechMarquee'
import About from '../components/sections/About'
import Services from '../components/sections/Services'
import Projects from '../components/sections/Projects'
import Experience from '../components/sections/Experience'
import Education from '../components/sections/Education'
import Skills from '../components/sections/Skills'
import Research from '../components/sections/Research'
//import Certifications from '../components/sections/Certifications'
//import Achievements from '../components/sections/Achievements'
import Faq from '../components/sections/Faq'
import Resume from '../components/sections/Resume'
import Contact from '../components/sections/Contact'

/** Section order on the page. Reorder, add or remove sections here. */
export default function HomePage() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <About />
      <Services />
      <Projects />
      <Experience />
      <Education />
      <Skills />
      <Research />
      
      <Faq />
      <Resume />
      <Contact />
    </>
  )
}
