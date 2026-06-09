import { Footer } from '../components/layout/Footer'
import { Navbar } from '../components/layout/Navbar'

import { CTA } from '../components/sections/CTA'
import { Features } from '../components/sections/Features'
import { Hero } from '../components/sections/Hero'
import { Testimonials } from '../components/sections/Testimonials'
import { SectionDivider } from '../components/ui/SectionDivider'

import { focusRing } from '../lib/styles'
import { cn } from '../lib/utils'

export const Home = () => {
  return (
    <>
      <a
        href="#main-content"
        className={cn(
          'sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-amber-500 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-black',

          focusRing,
        )}
      >
        Saltar al contenido
      </a>

      <Navbar />

      <main id="main-content" className="min-h-screen bg-black font-sans">
        <Hero />

        <SectionDivider />

        <Features />

        <SectionDivider />

        <Testimonials />

        <SectionDivider />

        <CTA />
      </main>

      <Footer />
    </>
  )
}
