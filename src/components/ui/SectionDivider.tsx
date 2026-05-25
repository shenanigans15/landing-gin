import { sectionDivider } from '@/lib/styles'
import { cn } from '@/lib/utils'

interface SectionDividerProps {
  className?: string
}

export const SectionDivider = ({ className }: SectionDividerProps) => {
  return (
    <div className={cn('px-4 sm:px-6', className)} aria-hidden="true">
      <div className={sectionDivider} />
    </div>
  )
}
