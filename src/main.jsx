import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { MelpApp } from './MelpApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MelpApp />
  </StrictMode>,
)
