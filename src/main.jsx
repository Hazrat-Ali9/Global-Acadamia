import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
// import App from './App'
import { HelmetProvider } from 'react-helmet-async'
import { router } from './Routes/Routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <div className="bg-[#ffffff]">
        <RouterProvider router={router} />
      </div>
    </HelmetProvider>
  </React.StrictMode>
)
