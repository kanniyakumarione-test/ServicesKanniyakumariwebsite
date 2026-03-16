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
      smooth: true,
      smoothTouch: true
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

  }, [])

  return <App />
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SmoothScrollWrapper />
  </React.StrictMode>,
)