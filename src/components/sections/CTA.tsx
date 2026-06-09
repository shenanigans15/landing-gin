import { useNavigate } from 'react-router'

import { container, sectionLabel } from '@/lib/styles'
import { cn } from '@/lib/utils'

import { BrandButton } from '../ui/BrandButton'
import { GlowBackground } from '../ui/GlowBackground'
import { PageSection } from '../ui/PageSection'
import { SectionHeader } from '../ui/SectionHeader'

export const CTA = () => {
  const navigate = useNavigate()

  return (
    <PageSection
      id="cta"
      labelledBy="cta-heading"
      className="relative isolate overflow-hidden bg-black !pb-24 !pt-20 sm:!pb-28 sm:!pt-24 md:!pb-36 md:!pt-28"
    >
      <GlowBackground intensity="strong" />

      <div className={cn(container, 'relative z-10')}>
        <div
          className={cn(
            'mx-auto max-w-2xl rounded-3xl border border-neutral-800/50',
            'bg-neutral-950/40 px-6 py-12 text-center backdrop-blur-sm',
            'sm:px-10 sm:py-14 md:px-14 md:py-16',
            'shadow-[0_0_80px_-20px_rgba(245,158,11,0.08)]',
          )}
        >
          <p className={sectionLabel}>Edición limitada</p>

          <SectionHeader
            title="Descubrí un gin distinto"
            titleId="cta-heading"
            className="mt-5 max-w-none [&_h2]:mt-4 [&_h2]:text-3xl sm:[&_h2]:text-4xl md:[&_h2]:text-[2.75rem]"
          />

          <p className="mx-auto mt-6 max-w-md text-base font-light leading-[1.75] text-neutral-400 md:text-lg">
            Producción limitada. Cada botella es única. Sólo 7 botellas por
            lote. No esperes a que se agote.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:mt-12 sm:flex-row sm:justify-center">
            <BrandButton
              emphasized
              size="lg"
              className="w-full sm:w-auto"
              onClick={() => navigate('/products')}
            >
              Ver productos
            </BrandButton>
          </div>

          <p className="mt-8 text-[11px] uppercase tracking-[0.25em] text-neutral-600">
            Envíos disponibles a todo el país
          </p>
        </div>
      </div>
    </PageSection>
  )
}
