import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Home.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import Todo from './Todo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Home/> */}
    {/* <Todo /> */}
  </StrictMode>,
)
