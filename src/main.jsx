import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// After a new deploy the files of an old tab do not exist anymore. When a page chunk cannot be loaded,
// reload once to get the new version instead of leaving the screen blank (a phone often keeps old tabs).
window.addEventListener('vite:preloadError', (event) => {
  event.preventDefault()
  try {
    if (sessionStorage.getItem('chunk-reload')) return
    sessionStorage.setItem('chunk-reload', '1')
  } catch {
    /* storage is blocked: reload anyway, it happens once per error */
  }
  window.location.reload()
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
