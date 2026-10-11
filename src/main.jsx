import React from 'react'
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
      <RouterProvider router={router} />
    <Toaster></Toaster>
    </AuthProvider>
  </React.StrictMode>
)