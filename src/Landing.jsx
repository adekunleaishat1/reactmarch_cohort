import React from 'react'
import Sidnav from './Sidnav'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Landing = () => {
  return (
    <div>
        <div>
        <Navbar/>
        </div>
        <div style={{width:"100%"}} className='d-flex justify-content-between align-items-center'>
        <Sidnav/>
        <div style={{width:"80%", height:"100vh"}}>
           <Outlet/>
        </div>
        </div>
    </div>
  )
}

export default Landing