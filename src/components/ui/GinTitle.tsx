import { Link } from 'react-router'

import { focusRing } from '@/lib/styles'
import { cn } from '@/lib/utils'

export const GinTitle = () => {
  return (
    <div>
      <Link
        className={cn(
          'group flex min-w-0 items-center gap-3 rounded-lg sm:gap-4',
          focusRing,
        )}
        aria-label="Brújula Vikinga — inicio"
        to={'/'}
      >
        <img
          src="/logo_invicible.png"
          alt=""
          width={64}
          height={64}
          decoding="async"
          className="h-12 w-12 shrink-0 object-contain brightness-200 opacity-95 motion-safe:transition-[transform,opacity] motion-safe:duration-500 motion-safe:ease-luxury motion-safe:group-hover:scale-[1.03] motion-safe:group-hover:opacity-100 sm:h-14 sm:w-14"
        />
        <div className="min-w-0 flex flex-col leading-none">
          <span className="truncate font-viking text-base tracking-wide text-neutral-50 sm:text-lg">
            Brújula Vikinga
          </span>
          <span className="mt-1 text-[9px] uppercase tracking-[0.32em] text-neutral-500 sm:text-[10px]">
            Handcrafted Gin
          </span>
        </div>
      </Link>
    </div>
  )
}
