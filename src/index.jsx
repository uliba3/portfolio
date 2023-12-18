import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Favicon from "react-favicon";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Favicon url="src/assets/s.png" />
    <App />
  </React.StrictMode>,
)
