import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/water.css'
import App from './App.tsx'
import { GlobalProvider } from './context/globalProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalProvider>
    <App />
    </GlobalProvider>
  </StrictMode>,
)
