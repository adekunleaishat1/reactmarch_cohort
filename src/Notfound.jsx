import React from 'react'
import { useNavigate } from 'react-router-dom'

const Notfound = () => {
    const navigate = useNavigate()
    const gohome =()=>{
        navigate("/")
    }
  return (
    <div>
        <h1>404 Not Found</h1>
        <p>Sorry, the page you are looking for could not be found.</p>
        <button onClick={gohome}>Go Back</button>
    </div>
  )
}

export default Notfound