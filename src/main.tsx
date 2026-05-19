import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { LandGinApp } from './LandGinApp'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LandGinApp />
  </StrictMode>,
)
