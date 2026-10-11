import { useEffect, useState } from 'react'

const INITIAL_DECORATION_COUNT = 16
const MAX_DECORATION_COUNT = 72

const symbols = ['✦', '★', '🌹', '🌷', '⚜️']

export default function FallingDecorations() {
  const [decorationCount, setDecorationCount] = useState(INITIAL_DECORATION_COUNT)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setDecorationCount((count) => Math.min(count + 1, MAX_DECORATION_COUNT))
    }, 1200)

    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: decorationCount }, (_, index) => {
        const duration = 6 + (index % 5) * 0.9

        return (
          <span
            key={index}
            className="falling-decoration"
            style={{
              left: `${(index * 47 + 7) % 100}%`,
              animationDuration: `${duration}s`,
              animationDelay: `-${(index * 1.3) % duration}s`,
              fontSize: `${30 + (index % 4) * 14}px`,
            }}
          >
            {symbols[index % symbols.length]}
          </span>
        )
      })}
    </div>
  )
}
