import { Leaf, FlaskConical, Mountain } from 'lucide-react'
import { FeatureCard } from '../ui/FeatureCard'
import { PageSection } from '../ui/PageSection'
import { SectionHeader } from '../ui/SectionHeader'
import { container, sectionGrid } from '@/lib/styles'
import { cn } from '@/lib/utils'

const features = [
  {
    icon: Leaf,
    title: 'Ingredientes naturales',
    description:
      'Botánicos seleccionados cuidadosamente para lograr un perfil único.',
  },
  {
    icon: FlaskConical,
    title: 'Producción artesanal',
    description:
      'Destilado en pequeños lotes para mantener calidad y carácter.',
  },
  {
    icon: Mountain,
    title: 'Origen del norte',
    description: 'Inspirado en el entorno natural del norte argentino.',
  },
] as const

export const Features = () => {
  return (
    <PageSection
      id="features"
      labelledBy="features-heading"
      className="relative isolate overflow-hidden"
    >
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute inset-0 scale-105 bg-[url('/yungas.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      <div className={cn(container, 'relative z-10')}>
        <SectionHeader
          label="Características"
          title="Un gin con identidad propia"
          titleId="features-heading"
          lead="Cada botella refleja el origen, el proceso y el carácter de un destilado artesanal pensado para destacar."
        />

        <ul className={sectionGrid}>
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </ul>
      </div>
    </PageSection>
  )
}
