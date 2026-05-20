import { useEffect, useState } from 'react'
import { Button } from '../ui/button'

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-black/60 backdrop-blur border-b border-neutral-800'
          : 'bg-black backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo + Marca */}
        <div className="flex items-center gap-4">
          <img
            src="/logo_invicible.png"
            className="h-20 w-20 object-contain brightness-200"
          />

          <div className="flex flex-col leading-none items-center">
            <h1 className="font-viking text-xl tracking-wide text-white">
              Brújula Vikinga
            </h1>

            <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mt-1">
              Handcrafted Gin
            </span>
          </div>
        </div>

        {/* Links */}
        <nav className="hidden md:flex gap-10 text-sm font-medium tracking-wide">
          <a
            href="#hero"
            className="relative text-neutral-400 hover:text-white transition
              after:absolute after:left-1/2 after:-bottom-1 after:h-[2px]
              after:w-0 after:bg-amber-700 after:transition-all
              after:-translate-x-1/2 hover:after:w-1/2"
          >
            Inicio
          </a>
          <a
            href="#features"
            className="relative text-neutral-400 hover:text-white transition
              after:absolute after:left-1/2 after:-bottom-1 after:h-[2px]
              after:w-0 after:bg-amber-700 after:transition-all
              after:-translate-x-1/2 hover:after:w-1/2"
          >
            Características
          </a>
          <a
            href="#testimonials"
            className="relative text-neutral-400 hover:text-white transition
              after:absolute after:left-1/2 after:-bottom-1 after:h-[2px]
              after:w-0 after:bg-amber-700 after:transition-all
              after:-translate-x-1/2 hover:after:w-1/2"
          >
            Opiniones
          </a>
        </nav>
        {/* CTA */}
        <Button className="bg-amber-500 hover:bg-amber-600 text-black px-6 py-2.5 text-sm font-medium rounded-md shadow-lg shadow-amber-500/20">
          Comprar
        </Button>
      </div>
    </header>
  )
}
