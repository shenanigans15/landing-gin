import type { ComponentProps } from 'react'
import { Button } from './button'
import { btnOutline, btnPrimary, btnPrimaryEmphasis } from '@/lib/styles'
import { cn } from '@/lib/utils'

interface BrandButtonProps extends ComponentProps<typeof Button> {
  brandVariant?: 'primary' | 'outline'
  emphasized?: boolean
}

export const BrandButton = ({
  brandVariant = 'primary',
  emphasized = false,
  className,
  ...props
}: BrandButtonProps) => {
  const isPrimary = brandVariant === 'primary'
  const styles = isPrimary ? btnPrimary : btnOutline

  return (
    <Button
      variant={isPrimary ? 'default' : 'outline'}
      className={cn(
        styles,
        isPrimary && emphasized && btnPrimaryEmphasis,
        className,
      )}
      {...props}
    />
  )
}
