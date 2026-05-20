import { Star } from 'lucide-react'
import { Card, CardContent } from '../ui/card'

const testimonials = [
  {
    name: 'Martín R.',
    location: 'Jujuy',
    text: 'Un gin distinto. Muy equilibrado y con un aroma increíble.',
  },
  {
    name: 'Lucía G.',
    location: 'Salta',
    text: 'Se nota que es artesanal. Nada que ver con los gins comerciales.',
  },
  {
    name: 'Carlos M.',
    location: 'San Salvador',
    text: 'Lo probé por recomendación y ahora siempre tengo una botella.',
  },
]

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="bg-neutral-950 py-24 px-6 scroll-mt-60"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl text-white font-semibold">
          Lo que dicen nuestros clientes
        </h2>

        <p className="mt-4 text-neutral-400 max-w-xl mx-auto">
          {' '}
          Opiniones reales de quienes ya probaron Brújula Vikinga.
        </p>

        {/* Tarjetas */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Card
              key={i}
              className="bg-neutral-900 border-neutral-800 hover:border-amber-500/40 transition"
            >
              <CardContent className="p-6 text-left">
                {/* Usuario */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-full bg-neutral-700 flex items-center justify-center text-sm text-white">
                    {t.name[0]}
                  </div>

                  <div>
                    <p className="text-white font-medium">{t.name}</p>
                    <p className="text-sm text-neutral-500">{t.location}</p>
                  </div>
                </div>

                {/* Estrellas */}
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-amber-500 text-amber-500"
                    />
                  ))}
                </div>

                {/* Texto */}
                <p className="text-neutral-300 leading-relaxed">“{t.text}”</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
