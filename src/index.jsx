import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Favicon from 'react-favicon'
import s from './assets/s.png'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Favicon url={s} />
    <App />
  </React.StrictMode>,
)
