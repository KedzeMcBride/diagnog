import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
//import Registration from './registration'
//import Signin from './signin'
import Load from './load'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Load />
  </StrictMode>,
)
