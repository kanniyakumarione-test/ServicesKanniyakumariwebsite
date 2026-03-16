import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react'

function SmoothScrollWrapper() {

  useEffect(() => {

    const lenis = new Lenis({
      duration: 1.2,
      smoothTouch: true
    })

    let rafHandle;
    function raf(time) {
      lenis.raf(time)
      rafHandle = requestAnimationFrame(raf)
    }

    rafHandle = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafHandle)
      lenis.destroy()
    }
  }, [])

  return <App />
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SmoothScrollWrapper />
  </React.StrictMode>,
)