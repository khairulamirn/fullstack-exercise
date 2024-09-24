import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Register from './pages/Register'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Register />
  </StrictMode>,
)
