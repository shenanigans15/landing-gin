import { BrandButton } from '../ui/BrandButton'
import { GlowBackground } from '../ui/GlowBackground'
import { container, sectionLabel } from '@/lib/styles'
import { cn } from '@/lib/utils'

export const Hero = () => {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[calc(100svh-3.5rem)] items-center overflow-hidden bg-black px-4 pb-20 pt-24 sm:min-h-[calc(100svh-4rem)] sm:px-6 sm:pb-24 sm:pt-28 md:min-h-[92vh] md:pb-28 md:pt-32"
    >
      <GlowBackground position="right" />

      <div
        className={cn(
          container,
          'relative z-10 grid items-center gap-12 sm:gap-14 md:grid-cols-2 md:gap-20 lg:gap-28',
        )}
      >
        <div className="order-2 text-center md:order-1 md:text-left">
          <div className="flex items-center justify-center gap-4 md:justify-start">
            <span className="hidden h-px w-10 bg-gradient-to-r from-transparent to-amber-500/30 md:block" />
            <p className={sectionLabel}>Handcrafted Gin</p>
          </div>

          <h1
            id="hero-heading"
            className="mt-5 font-viking text-4xl leading-[1.08] text-neutral-50 sm:mt-6 sm:text-5xl md:text-6xl lg:text-[3.75rem]"
          >
            Brújula Vikinga
          </h1>

          <p className="mx-auto mt-6 max-w-md text-base font-light leading-[1.75] text-neutral-400 sm:mt-7 md:mx-0 md:max-w-lg md:text-lg">
            Destilado en el norte argentino en pequeños lotes. Un gin con
            carácter, pensado para quienes buscan algo distinto.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:mt-12 md:items-start md:justify-start">
            <BrandButton emphasized size="lg" className="w-full sm:w-auto">
              Comprar
            </BrandButton>
            <BrandButton
              brandVariant="outline"
              size="lg"
              className="w-full px-8 py-5 sm:w-auto"
            >
              Ver productos
            </BrandButton>
          </div>
        </div>

        <div className="order-1 flex justify-center md:order-2">
          <div className="relative">
            <div
              className="absolute inset-0 -z-10 scale-75 rounded-full bg-amber-500/5 blur-3xl"
              aria-hidden="true"
            />
            <img
              src="/gin-bottle.png"
              alt="Botella de gin Brújula Vikinga"
              width={360}
              height={720}
              decoding="async"
              fetchPriority="high"
              className="relative w-[min(240px,68vw)] brightness-[0.97] contrast-[1.05] drop-shadow-[0_40px_100px_rgba(0,0,0,0.85)] motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-luxury sm:w-[280px] md:w-[320px] lg:w-[360px] md:motion-safe:hover:scale-[1.015]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
