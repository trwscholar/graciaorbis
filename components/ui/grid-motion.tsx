import { useEffect, useRef, ReactNode } from 'react'
import { gsap } from 'gsap'
import { cn } from "@/lib/utils"

interface GridMotionProps {
  items?: (string | ReactNode)[]
  gradientColor?: string
  className?: string
}

export function GridMotion({
  items = [],
  gradientColor = 'black',
  className
}: GridMotionProps) {
  const gridRef = useRef<HTMLDivElement>(null)
  const rowRefs = useRef<(HTMLDivElement | null)[]>([])
  const mouseXRef = useRef(window.innerWidth / 2)

  const totalItems = 28
  // Repeat items so all slots are filled
  const defaultItems = Array.from({ length: totalItems }, (_, i) => `Item ${i + 1}`)
  const filledItems =
    items.length > 0
      ? Array.from({ length: totalItems }, (_, i) => items[i % items.length])
      : defaultItems

  useEffect(() => {
    gsap.ticker.lagSmoothing(0)

    const handleMouseMove = (e: MouseEvent) => {
      mouseXRef.current = e.clientX
    }

    const updateMotion = () => {
      const maxMoveAmount = 300
      const baseDuration = 0.8
      const inertiaFactors = [0.6, 0.4, 0.3, 0.2]

      rowRefs.current.forEach((row, index) => {
        if (row) {
          const direction = index % 2 === 0 ? 1 : -1

          // Add base oscillation so it moves even without mouse
          const time = performance.now() / 2000
          const drift = Math.sin(time + index) * 50

          const moveAmount =
            ((mouseXRef.current / window.innerWidth) * maxMoveAmount - maxMoveAmount / 2) *
              direction +
            drift

          gsap.to(row, {
            x: moveAmount,
            duration: baseDuration + inertiaFactors[index % inertiaFactors.length],
            ease: 'power3.out',
            overwrite: 'auto',
          })
        }
      })
    }

    const removeAnimationLoop = gsap.ticker.add(updateMotion)
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      removeAnimationLoop()
    }
  }, [])

  return (
    <div className={cn("h-full w-full overflow-hidden", className)} ref={gridRef}>
      <section
        className="relative flex h-screen w-full items-center justify-center overflow-hidden"
        style={{
          background: `radial-gradient(circle, ${gradientColor} 0%, transparent 100%)`,
        }}
      >
        <div className="relative z-2 flex-none grid h-[150vh] w-[150vw] gap-4 grid-rows-[repeat(4,1fr)] grid-cols-[100%] -rotate-12 origin-center">
          {[...Array(4)].map((_, rowIndex) => (
            <div
              key={rowIndex}
              className="grid gap-4 grid-cols-[repeat(7,1fr)] will-change-transform"
              ref={(el) => (rowRefs.current[rowIndex] = el)}
            >
              {[...Array(7)].map((_, itemIndex) => {
                const content = filledItems[rowIndex * 7 + itemIndex]
                return (
                  <div key={itemIndex} className="relative">
                    <div className="relative h-full w-full overflow-hidden rounded-lg bg-muted flex items-center justify-center text-foreground text-xl">
                    {typeof content === 'string' &&
                    (content.startsWith('http') || content.startsWith('/')) ? (
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${content})` }}
                      />
                    ) : (
                      <div className="p-4 text-center z-1">{content}</div>
                    )}
                    </div>
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
