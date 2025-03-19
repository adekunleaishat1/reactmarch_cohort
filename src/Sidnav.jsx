import React from 'react'
import { Link } from 'react-router-dom'

const Sidnav = () => {
  return (
    <div>
        <div style={{backgroundColor:"blue", width:"200px", height:"100vh"}}>
            <Link to={"/home/todo"}>Todo</Link>
            <Link to={"/home/profile"}>Profile</Link>
            <Link>Courses</Link>
        </div>
    </div>
  )
}

export default Sidnav