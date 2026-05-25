import { Star } from 'lucide-react'

import { Card, CardContent } from '../ui/card'
import { PageSection } from '../ui/PageSection'
import { SectionHeader } from '../ui/SectionHeader'

import { testimonials } from '@/data/testimonials'

import { cardHover, container, sectionGrid } from '@/lib/styles'
import { cn } from '@/lib/utils'

const StarRating = () => {
  return (
    <div className="mb-4 flex gap-1" role="img" aria-label="5 de 5 estrellas">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className="h-3.5 w-3.5 fill-amber-500/90 text-amber-500/90"
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

export const Testimonials = () => {
  return (
    <PageSection
      id="testimonials"
      labelledBy="testimonials-heading"
      className="bg-neutral-950/80"
    >
      <div className={container}>
        <SectionHeader
          label="Opiniones"
          title="Lo que dicen nuestros clientes"
          titleId="testimonials-heading"
          lead="Opiniones reales de quienes ya probaron Brújula Vikinga."
        />

        <ul className={sectionGrid}>
          {testimonials.map((t) => (
            <li key={t.name}>
              <Card
                className={cn(
                  'h-full rounded-2xl border-neutral-800/60 bg-neutral-900/40 ring-0 transition-[border-color,box-shadow,transform] duration-500 ease-luxury',

                  cardHover,
                )}
              >
                <CardContent className="p-7 text-left sm:p-8">
                  <figure className="mb-5 flex items-center gap-4">
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-neutral-700/80 bg-neutral-800/80 text-sm font-medium text-neutral-200"
                      aria-hidden="true"
                    >
                      {t.name[0]}
                    </div>

                    <figcaption>
                      <p className="font-medium tracking-tight text-neutral-100">
                        {t.name}
                      </p>

                      <p className="mt-0.5 text-xs tracking-wide text-neutral-500">
                        {t.location}
                      </p>
                    </figcaption>
                  </figure>

                  <StarRating />

                  <blockquote className="text-sm font-light leading-[1.75] text-neutral-400 md:text-[15px]">
                    <p>“{t.text}”</p>
                  </blockquote>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </PageSection>
  )
}
