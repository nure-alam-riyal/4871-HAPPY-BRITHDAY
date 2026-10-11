import { useEffect, useState } from 'react'

const getJourneyStatus = (now) => {
  const journeyTime = new Date(now)
  journeyTime.setHours(24, 0, 0, 0)

  const remainingSeconds = Math.max(0, Math.ceil((journeyTime.getTime() - now.getTime()) / 1000))
  const hours = Math.floor(remainingSeconds / 3600)
  const minutes = Math.floor((remainingSeconds % 3600) / 60)
  const seconds = remainingSeconds % 60

  return {
    isJourneyTime: remainingSeconds === 0,
    countdown: [hours, minutes, seconds].map((value) => String(value).padStart(2, '0')).join(':'),
    countdownParts: [
      { label: 'Hours', value: hours },
      { label: 'Minutes', value: minutes },
      { label: 'Seconds', value: seconds },
    ],
  }
}

export default function useJourneyClock() {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const intervalId = window.setInterval(() => setNow(new Date()), 1000)
    return () => window.clearInterval(intervalId)
  }, [])

  return { now, ...getJourneyStatus(now) }
}
