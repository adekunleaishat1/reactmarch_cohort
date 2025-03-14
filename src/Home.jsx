import React from 'react'
import mysty from './Mysty'
import { AiFillCodepenCircle } from "react-icons/ai";
import { FaGithub,FaAddressCard } from "react-icons/fa";
import imhd from "./assets/Image.png"
const Home = () => {
 
  return (
    <div >
      <h1 className='home'>Home</h1>
      <p style={{fontSize:'30px', color:"purple"}}>Inline Styling</p>
      <h3 style={mysty}>Internal styling </h3>
      <p style={mysty.header}>substyle</p>
      <button className='btn btn-dark'>Click me</button>
      <AiFillCodepenCircle size={30} />
      <FaGithub/>
      <FaAddressCard/> 
      <img style={{width:"100px", height:"100px"}} src={imhd} alt="" />
     
    </div>
  )
}

export default Home