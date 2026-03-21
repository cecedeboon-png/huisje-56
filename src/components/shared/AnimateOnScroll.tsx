'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Animation = 'fade-up' | 'fade-in' | 'fade-left' | 'fade-right' | 'scale-in'

interface AnimateOnScrollProps {
  children: ReactNode
  animation?: Animation
  delay?: number
  duration?: number
  className?: string
  once?: boolean
  threshold?: number
}

export function AnimateOnScroll({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 600,
  className,
  once = true,
  threshold = 0.15,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) observer.unobserve(el)
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [once, threshold])

  const animationStyles: Record<Animation, { from: string; to: string }> = {
    'fade-up': {
      from: 'opacity-0 translate-y-8',
      to: 'opacity-100 translate-y-0',
    },
    'fade-in': {
      from: 'opacity-0',
      to: 'opacity-100',
    },
    'fade-left': {
      from: 'opacity-0 -translate-x-8',
      to: 'opacity-100 translate-x-0',
    },
    'fade-right': {
      from: 'opacity-0 translate-x-8',
      to: 'opacity-100 translate-x-0',
    },
    'scale-in': {
      from: 'opacity-0 scale-95',
      to: 'opacity-100 scale-100',
    },
  }

  const { from, to } = animationStyles[animation]

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all ease-out',
        isVisible ? to : from,
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

interface StaggerChildrenProps {
  children: ReactNode
  staggerDelay?: number
  animation?: Animation
  duration?: number
  className?: string
  childClassName?: string
  threshold?: number
}

export function StaggerChildren({
  children,
  staggerDelay = 100,
  animation = 'fade-up',
  duration = 500,
  className,
  childClassName,
  threshold = 0.1,
}: StaggerChildrenProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  const animationStyles: Record<Animation, { from: string; to: string }> = {
    'fade-up': {
      from: 'opacity-0 translate-y-6',
      to: 'opacity-100 translate-y-0',
    },
    'fade-in': {
      from: 'opacity-0',
      to: 'opacity-100',
    },
    'fade-left': {
      from: 'opacity-0 -translate-x-6',
      to: 'opacity-100 translate-x-0',
    },
    'fade-right': {
      from: 'opacity-0 translate-x-6',
      to: 'opacity-100 translate-x-0',
    },
    'scale-in': {
      from: 'opacity-0 scale-95',
      to: 'opacity-100 scale-100',
    },
  }

  const { from, to } = animationStyles[animation]

  const items = Array.isArray(children) ? children : [children]

  return (
    <div ref={ref} className={className}>
      {items.map((child, i) => (
        <div
          key={i}
          className={cn(
            'transition-all ease-out',
            isVisible ? to : from,
            childClassName
          )}
          style={{
            transitionDuration: `${duration}ms`,
            transitionDelay: isVisible ? `${i * staggerDelay}ms` : '0ms',
          }}
        >
          {child}
        </div>
      ))}
    </div>
  )
}
