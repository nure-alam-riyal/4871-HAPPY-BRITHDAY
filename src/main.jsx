import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import ZNH from './ZN/ZNH'
import ProveYou from './ZN/ProveYou'
import NextLevel from './ZN/NextLevel'
import { Toaster } from 'react-hot-toast'
import AuthProvider from './AuthProvider/AuthProvider'
import LevelsRolus from './ZN/LevelsRolus'
import Level1 from './ZN/L1/Level1'
import Level2 from './ZN/L2/Level2'
import Level3 from './ZN/L3/Level3'
import Level4 from './ZN/L4/Level4'
import Level5 from './ZN/L5/Level5'
import Level6 from './ZN/L6/Level6'
import Level7 from './ZN/L7/Level7'
import Level8 from './ZN/L8/Level8'
import Level9 from './ZN/L9/Level9'
import Level10 from './ZN/L10/Level10'

const ACCESS_TIME = new Date(2026, 9, 12, 0, 20, 0).getTime()

function TimeAccessGate({ children }) {
  const [now, setNow] = useState(() => Date.now())
  const secondsRemaining = Math.max(0, Math.ceil((ACCESS_TIME - now) / 1000))

  useEffect(() => {
    if (now >= ACCESS_TIME) return undefined

    const intervalId = window.setInterval(() => setNow(Date.now()), 1000)
    return () => window.clearInterval(intervalId)
  }, [now])

  if (secondsRemaining === 0) return children

  const hours = Math.floor(secondsRemaining / 3600)
  const minutes = Math.floor((secondsRemaining % 3600) / 60)
  const seconds = secondsRemaining % 60

  return (
    <main className="grid min-h-screen place-items-center bg-[#fbf6ef] px-5 text-[#312c36]">
      <section className="w-full max-w-md rounded-3xl border border-[#eadfd7] bg-white/90 p-8 text-center shadow-[0_24px_70px_rgba(71,49,54,0.12)] sm:p-10">
        <span className="mb-5 inline-grid h-14 w-14 place-items-center rounded-full bg-[#f7e9e4] text-2xl text-[#c77871]" aria-hidden="true">✿</span>
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#a1807e]">A little more anticipation</p>
        <h1 className="mt-4 font-display text-3xl sm:text-4xl">The journey begins at 12:20 AM</h1>
        <div aria-label={`${hours} hours, ${minutes} minutes, ${seconds} seconds remaining`} className="mt-7 grid grid-cols-3 gap-3" role="timer">
          {[
            { label: 'Hours', value: hours },
            { label: 'Minutes', value: minutes },
            { label: 'Seconds', value: seconds },
          ].map(({ label, value }) => (
            <div key={label} className="rounded-2xl border border-[#f0dfd9] bg-[#fff7f3] px-2 py-4">
              <p className="text-4xl font-black tabular-nums text-[#c77871]">{String(value).padStart(2, '0')}</p>
              <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#8d7a7c]">{label}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-[#8d7a7c]">Every part of the journey will unlock when the countdown ends.</p>
      </section>
    </main>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProveYou />,
  },
  {
    path: '/welcome',
    element: <ZNH />,
  },
  {
    path: '/next-level',
    element: <NextLevel />,
  },
  {
    path: '/rules',
    element: <LevelsRolus />,
  },
  { path: '/l1', element: <Level1 /> },
  { path: '/l2', element: <Level2 /> },
  { path: '/l3', element: <Level3 /> },
  { path: '/l4', element: <Level4 /> },
  { path: '/l5', element: <Level5 /> },
  { path: '/l6', element: <Level6 /> },
  { path: '/l7', element: <Level7 /> },
  { path: '/l8', element: <Level8 /> },
  { path: '/l9', element: <Level9 /> },
  { path: '/l10', element: <Level10 /> },
])

const rootElement = document.getElementById('root')

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <AuthProvider>
      <TimeAccessGate>
        <RouterProvider router={router} />
        <Toaster />
      </TimeAccessGate>
    </AuthProvider>
  </React.StrictMode>
)