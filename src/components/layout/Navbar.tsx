import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { BrandButton } from '../ui/BrandButton'
import { navLinks } from '@/data/navigation'
import { focusRing, navLink } from '@/lib/styles'
import { cn } from '@/lib/utils'

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

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
        <a
          href="#hero"
          className={cn(
            'group flex min-w-0 items-center gap-3 rounded-lg sm:gap-4',
            focusRing,
          )}
          aria-label="Brújula Vikinga — inicio"
        >
          <img
            src="/logo_invicible.png"
            alt=""
            width={64}
            height={64}
            decoding="async"
            className="h-12 w-12 shrink-0 object-contain brightness-200 opacity-95 motion-safe:transition-[transform,opacity] motion-safe:duration-500 motion-safe:ease-luxury motion-safe:group-hover:scale-[1.03] motion-safe:group-hover:opacity-100 sm:h-14 sm:w-14"
          />
          <div className="min-w-0 flex flex-col leading-none">
            <span className="truncate font-viking text-base tracking-wide text-neutral-50 sm:text-lg">
              Brújula Vikinga
            </span>
            <span className="mt-1 text-[9px] uppercase tracking-[0.32em] text-neutral-500 sm:text-[10px]">
              Handcrafted Gin
            </span>
          </div>
        </a>

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

        <div className="flex shrink-0 items-center gap-3">
          <BrandButton
            size="sm"
            className="hidden px-6 py-2.5 text-sm md:inline-flex"
          >
            Comprar
          </BrandButton>

          <button
            type="button"
            className={cn(
              'inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-800/80 text-neutral-400 transition-[border-color,background-color,color] duration-500 ease-luxury hover:border-neutral-600 hover:bg-neutral-900/80 hover:text-neutral-100 lg:hidden',
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
              <Menu className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        className={cn(
          'overflow-hidden border-t border-neutral-800/50 bg-black/95 backdrop-blur-xl transition-[max-height,opacity] duration-500 ease-luxury lg:hidden',
          menuOpen ? 'max-h-[min(24rem,calc(100dvh-4rem))] opacity-100' : 'max-h-0 opacity-0',
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
            <BrandButton emphasized className="w-full" onClick={closeMenu}>
              Comprar
            </BrandButton>
          </li>
        </ul>
      </nav>
    </header>
  )
}
