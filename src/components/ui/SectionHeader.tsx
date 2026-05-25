import { sectionLabel, sectionLead, sectionTitle } from '@/lib/styles'
import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  label?: string
  title: string
  titleId: string
  lead?: string
  className?: string
}

export const SectionHeader = ({
  label,
  title,
  titleId,
  lead,
  className,
}: SectionHeaderProps) => {
  return (
    <header className={cn('mx-auto max-w-3xl text-center', className)}>
      {label && (
        <div className="flex items-center justify-center gap-4">
          <span className="hidden h-px w-8 bg-gradient-to-r from-transparent to-amber-500/30 sm:block" />
          <p className={sectionLabel}>{label}</p>
          <span className="hidden h-px w-8 bg-gradient-to-l from-transparent to-amber-500/30 sm:block" />
        </div>
      )}
      <h2
        id={titleId}
        className={cn(sectionTitle, label ? 'mt-5 md:mt-6' : undefined)}
      >
        {title}
      </h2>
      {lead && (
        <p className={cn(sectionLead, 'mx-auto max-w-xl')}>{lead}</p>
      )}
    </header>
  )
}
