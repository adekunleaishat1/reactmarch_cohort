import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Home.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import Todo from './Todo.jsx'
import { BrowserRouter ,Routes, Route} from 'react-router-dom'
import Notfound from './Notfound.jsx'
import Navbar from './Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     <App/>
     {/* <Routes>
      <Route path="/" element={<App/>}/>
      <Route path='*' element={<Notfound/>} />
      <Route path='/todo' element={<Todo/>}/>
     </Routes> */}
    </BrowserRouter>
  </StrictMode>,
)
