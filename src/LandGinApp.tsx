import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { CTA } from './components/sections/CTA'
import { Features } from './components/sections/Features'
import { Hero } from './components/sections/Hero'
import { Testimonials } from './components/sections/Testimonials'

export const LandGinApp = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
