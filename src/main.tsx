import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/app.tsx'
import { BrowserRouter } from 'react-router-dom'
import './styles/index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
