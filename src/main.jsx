import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './Router/RouterSetUp.jsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router />
    <Toaster
      position="top-right"
      reverseOrder={false}
    />
  </StrictMode>,
)
