import Masthead from './components/Masthead'
import Hero from './components/Hero'
import QuoteFeature from './components/QuoteFeature'
import Services from './components/Services'
import Work from './components/Work'
import About from './components/About'
import Experience from './components/Experience'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Colophon from './components/Colophon'

export default function App() {
  return (
    <>
      <Masthead />
      <main>
        <Hero />
        <QuoteFeature />
        <Services />
        <Work />
        <About />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Colophon />
    </>
  )
}
