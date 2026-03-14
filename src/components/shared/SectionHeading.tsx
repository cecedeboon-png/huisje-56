import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  heading: string
  subheading?: string
  centered?: boolean
  light?: boolean
  className?: string
}

export function SectionHeading({
  heading,
  subheading,
  centered = false,
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('mb-10 md:mb-14', centered && 'text-center', className)}>
      <h2
        className={cn(
          'font-display text-3xl md:text-4xl lg:text-5xl font-normal leading-tight',
          light ? 'text-white' : 'text-navy'
        )}
      >
        {heading}
      </h2>
      {subheading && (
        <p
          className={cn(
            'mt-3 text-base md:text-lg leading-relaxed max-w-2xl',
            centered && 'mx-auto',
            light ? 'text-white/80' : 'text-stone-500'
          )}
        >
          {subheading}
        </p>
      )}
    </div>
  )
}
