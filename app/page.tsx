import Navbar from "../components/navbar"
import Hero from "../components/hero"
import About from "../components/about";
import Footer from "../components/footer";
import ProjectShowcase from "@/components/projects";
import Services from "@/components/services";
import PricingPlans from "@/components/pricing-plans";
import Team from "../components/team";
import Reviews from "../components/reviews";
import GoogleAds from "../components/google-ads";
import Contact from "../components/contact";
export default function Page() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <GoogleAds/>
      <ProjectShowcase/>
      <PricingPlans/>
      <Team/>
      <Reviews/>
      <Contact/>
      <Footer/>
    </div>
  );
}
