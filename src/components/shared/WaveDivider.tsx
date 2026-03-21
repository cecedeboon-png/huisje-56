interface WaveDividerProps {
  from?: string
  to?: string
  flip?: boolean
  className?: string
}

export function WaveDivider({
  from = '#F8F6F2',
  to = '#FFFFFF',
  flip = false,
  className = '',
}: WaveDividerProps) {
  return (
    <div
      className={`relative w-full overflow-hidden leading-[0] ${flip ? 'rotate-180' : ''} ${className}`}
      style={{ backgroundColor: to }}
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="relative block w-full h-[40px] md:h-[60px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,0 L0,0 Z"
          fill={from}
        />
      </svg>
    </div>
  )
}
