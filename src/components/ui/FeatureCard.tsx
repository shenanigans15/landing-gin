import type { LucideIcon } from 'lucide-react'
import { cardHover, cardSurface } from '@/lib/styles'
import { cn } from '@/lib/utils'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export const FeatureCard = ({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) => {
  return (
    <li className={cn(cardSurface, cardHover, 'group p-7 text-left sm:p-8')}>
      <Icon
        className="mb-5 h-5 w-5 text-amber-500/90 transition-colors duration-500 ease-luxury group-hover:text-amber-400"
        aria-hidden="true"
        strokeWidth={1.5}
      />
      <h3 className="text-lg font-medium tracking-tight text-neutral-50">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-[1.7] text-neutral-500 md:text-[15px]">
        {description}
      </p>
    </li>
  )
}
