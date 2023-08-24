import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import AnimatedCursor from "react-animated-cursor";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <AnimatedCursor
      innerSize={20}
      outerSize={14}
      color='255, 255, 255'
      outerAlpha={0.4}
      innerScale={0.7}
      outerScale={5}

    />
  </React.StrictMode>,
)
