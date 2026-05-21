import { socials } from '@/data/socials'
import { SocialIcons } from '../ui/socialicons'

export const Footer = () => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 px-6 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Marca */}
        <div>
          <h3 className="font-viking text-2xl text-white">Brújula Vikinga</h3>

          <p className="mt-4 text-neutral-400 max-w-xs">
            Gin artesanal del norte argentino, elaborado en pequeños lotes con
            identidad propia.
          </p>
        </div>

        {/* Navegación */}
        <div>
          <h4 className="text-white font-medium mb-4">Navegación</h4>

          <ul className="space-y-2 text-neutral-400">
            <li>
              <a href="#hero" className="hover:text-white transition">
                Inicio
              </a>
            </li>
            <li>
              <a href="#features" className="hover:text-white transition">
                Características
              </a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-white transition">
                Opiniones
              </a>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="text-white font-medium mb-4">Contacto</h4>

          <ul className=" text-neutral-400">
            <li>San Pedro de Jujuy 📍</li>
            <li>Argentina 🇦🇷</li>
          </ul>

          {/* Redes Sociales */}
          <div className="flex gap-4 mt-4 text-amber-600">
            {socials.map(({ name, href }) => (
              <a
                key={name}
                href={href}
                aria-label={name}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-900 transition flex items-center justify-center"
              >
                {SocialIcons[name]}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Línea final */}
      <div className="mt-12 border-t border-neutral-800 pt-6 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Brújula Vikinga. Todos los derechos
        reservados.
      </div>
    </footer>
  )
}
