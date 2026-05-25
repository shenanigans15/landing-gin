import type { ReactNode } from 'react'
import { section } from '@/lib/styles'
import { cn } from '@/lib/utils'

interface PageSectionProps {
  id: string
  labelledBy: string
  className?: string
  children: ReactNode
}

export const PageSection = ({
  id,
  labelledBy,
  className,
  children,
}: PageSectionProps) => {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(section, className)}
    >
      {children}
    </section>
  )
}
