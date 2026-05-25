import { cn } from '@/lib/utils'

interface GlowBackgroundProps {
  className?: string
  position?: 'center' | 'right'
  intensity?: 'soft' | 'strong'
}

export const GlowBackground = ({
  className,
  position = 'center',
  intensity = 'soft',
}: GlowBackgroundProps) => {
  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-0 z-0',
        position === 'center' && 'flex items-center justify-center',
        className,
      )}
      aria-hidden="true"
    >
      <div
        className={cn(
          'rounded-full blur-[100px] transition-opacity duration-700 ease-luxury',
          intensity === 'strong'
            ? 'bg-amber-500/15 h-80 w-80 sm:h-96 sm:w-96'
            : 'bg-amber-500/8 h-64 w-64 sm:h-80 sm:w-80',
          position === 'right' &&
            'absolute right-[15%] top-1/2 -translate-y-1/2 md:right-[20%]',
        )}
      />
    </div>
  )
}
