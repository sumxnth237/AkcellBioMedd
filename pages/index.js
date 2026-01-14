import Navbar from '../components/Navbar'
import HeroCarousel from '../components/HeroCarousel'
import AboutSection from '../components/AboutSection'
import ProductsSection from '../components/ProductsSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <HeroCarousel />
      <AboutSection />
      <ProductsSection />
      <Footer />
    </div>
  )
}