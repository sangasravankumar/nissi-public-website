import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Estimator from './components/Estimator.jsx'
import Locations from './components/Locations.jsx'
import WhyChooseUs from './components/WhyChooseUs.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import FinalCTA from './components/FinalCTA.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import MobileActionBar from './components/MobileActionBar.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Services />
        <WhyChooseUs />
        <Estimator />
        <Locations />
        <About />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
      <MobileActionBar />
    </>
  )
}
