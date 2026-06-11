import { navLinks } from '@/data/navigation'
import { socials } from '@/data/socials'
import { SocialIcons } from '../ui/socialicons'
import { container, focusRing, navLink, sectionDivider } from '@/lib/styles'
import { cn } from '@/lib/utils'

export const Footer = () => {
  return (
    <footer className="bg-neutral-950 px-4 pb-10 pt-16 sm:px-6 sm:pb-12 sm:pt-20 lg:px-8">
      <div className={cn(sectionDivider, 'mb-14 sm:mb-16')} />

      <div
        className={cn(
          container,
          'grid gap-12 sm:grid-cols-2 sm:gap-14 lg:grid-cols-3 lg:gap-20',
        )}
      >
        <div className="sm:col-span-2 lg:col-span-1">
          <p className="font-viking text-2xl text-neutral-50 md:text-[1.75rem]">
            Brújula Vikinga
          </p>
          <p className="mt-5 max-w-sm text-sm font-light leading-[1.75] text-neutral-500 md:text-base">
            Gin artesanal del norte argentino, elaborado en pequeños lotes con
            identidad propia.
          </p>
        </div>

        <nav aria-label="Pie de página">
          <h2 className="mb-5 text-[11px] font-medium uppercase tracking-[0.35em] text-neutral-400">
            Navegación
          </h2>
          <ul className="space-y-3">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className={cn(
                    navLink,
                    'inline-block text-sm text-neutral-500 after:hidden hover:text-neutral-200',
                    focusRing,
                  )}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-5 text-[11px] font-medium uppercase tracking-[0.35em] text-neutral-400">
            Contacto
          </h2>
          <address className="space-y-1 text-sm font-light not-italic leading-[1.75] text-neutral-500">
            <p>San Pedro de Jujuy</p>
            <p>Argentina</p>
          </address>

          <ul className="mt-6 flex gap-3" aria-label="Redes sociales">
            {socials.map(({ name, href }) => (
              <li key={name}>
                <a
                  href={href}
                  aria-label={name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'flex h-10 w-10 items-center justify-center rounded-full border border-neutral-800/80 text-amber-500/90 transition-[border-color,background-color,color,transform] duration-500 ease-luxury hover:border-amber-500/30 hover:bg-neutral-900/80 hover:text-amber-400 motion-safe:hover:scale-105',
                    focusRing,
                    'focus-visible:ring-offset-neutral-950',
                  )}
                >
                  {SocialIcons[name]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-6xl border-t border-neutral-800/50 pt-8 text-center text-xs tracking-wide text-neutral-600 sm:mt-16">
        © {new Date().getFullYear()} Brújula Vikinga Gin. Todos los derechos
        reservados.
      </div>
    </footer>
  )
}
