import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { Menu, ShoppingCart, User, X } from 'lucide-react'

import { navLinks } from '@/data/navigation'

import { focusRing, navLink } from '@/lib/styles'
import { cn } from '@/lib/utils'

import { BrandButton } from '../ui/BrandButton'
import { GinTitle } from '../ui/GinTitle'

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const navigate = useNavigate()
  const { pathname } = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  const isProductsPage = pathname.startsWith('/products')

  return (
    <header
      className={cn(
        'fixed top-0 left-0 z-50 w-full transition-[background-color,border-color,backdrop-filter] duration-500 ease-luxury',
        scrolled
          ? 'border-b border-neutral-800/50 bg-black/75 backdrop-blur-xl'
          : 'bg-black/80 backdrop-blur-md',
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <GinTitle />

        {!isProductsPage && (
          <nav
            className="hidden items-center gap-10 lg:flex"
            aria-label="Principal"
          >
            {navLinks.map(({ href, label }) => (
              <a key={href} href={href} className={navLink}>
                {label}
              </a>
            ))}
          </nav>
        )}

        <div className="flex shrink-0 items-center gap-1">
          <BrandButton
            size="sm"
            className="hidden px-2 py-2 text-sm md:inline-flex"
          >
            <User />
          </BrandButton>
          <BrandButton
            size="sm"
            className="hidden px-2 py-2 text-sm md:inline-flex"
          >
            <ShoppingCart />
          </BrandButton>
          {!menuOpen && (
            <BrandButton
              size="sm"
              className="hidden px-4 py-3 text-sm md:inline-flex"
              onClick={() => navigate(isProductsPage ? '/' : '/products')}
            >
              {isProductsPage ? 'Volver al inicio' : 'Ver productos'}
            </BrandButton>
          )}

          {!isProductsPage && (
            <button
              type="button"
              className={cn(
                'inline-flex ml-3 h-10 w-10 items-center justify-center rounded-full border border-amber-500 text-amber-500 transition-[border-color,background-color,color] duration-500 ease-luxury hover:border-neutral-600 hover:bg-neutral-900/80 hover:text-neutral-100 lg:hidden',
                focusRing,
              )}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? (
                <X className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
              ) : (
                <Menu
                  className="h-5 w-5"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              )}
            </button>
          )}
        </div>
      </div>

      {!isProductsPage && (
        <nav
          id="mobile-nav"
          className={cn(
            'overflow-hidden border-t border-neutral-800/50 bg-black/95 backdrop-blur-xl transition-[max-height,opacity] duration-500 ease-luxury lg:hidden',
            menuOpen
              ? 'max-h-[min(24rem,calc(100dvh-4rem))] opacity-100'
              : 'max-h-0 opacity-0',
          )}
          aria-label="Menú móvil y tablet"
          hidden={!menuOpen}
        >
          <ul className="flex flex-col gap-0.5 overflow-y-auto px-4 py-5 sm:px-6">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className={cn(
                    'block rounded-lg px-4 py-3.5 text-sm tracking-wide text-neutral-400 transition-colors duration-500 ease-luxury hover:bg-neutral-900/60 hover:text-neutral-100',
                    focusRing,
                  )}
                  onClick={closeMenu}
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <BrandButton
                emphasized
                className="w-full"
                onClick={() => navigate('/products')}
              >
                Ver productos
              </BrandButton>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
