import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Services from './components/Service'
import GoogleAds from './components/GoogleAds'
import WhyGoogleAds from './components/WhyGoogleAds'
import ParallaxSection from './components/ParallaxSection'
import PricingPlans from './components/PricingPlans'
import HowWeHelp from './components/HowWeHelp'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Carousel from './components/Carousel'
import Portfolio from './components/Portfolio'
import Team from './components/Team'

function App() {

  return (
    <>
    <header>
   <Navbar/>
    </header>
    <div>
    <Hero/>
    </div>
    <div>
      <About/>
    </div>
    <div>
      <Services/>
    </div>
    <div>
      <GoogleAds/>
      <WhyGoogleAds/>
      <ParallaxSection/>
      <PricingPlans/>
      <Portfolio/>
      <Team/>
    </div>
    <div>
      <HowWeHelp/>
      <Carousel/>
    </div>
    <div>
    <Contact/>
    </div>
    <footer>
      <Footer/>
    </footer>
    </>
  )
}

export default App
