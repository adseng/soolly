import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'reseter.css'
import '@/style/base/reset.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
