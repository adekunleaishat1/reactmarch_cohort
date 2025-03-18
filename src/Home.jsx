import React,{useState} from 'react'
import mysty from './Mysty'
import { AiFillCodepenCircle } from "react-icons/ai";
import { FaGithub,FaAddressCard } from "react-icons/fa";
import imhd from "./assets/Image.png"
import Navbar from './Navbar';
import Mybutton from './Mybutton';
import Adduser from './Adduser';
import Dispuser from './Dispuser';
const Home = () => {
   const [users, setusers] = useState({
    name:"",
    class:""
   })
   const [userslist, setuserslist] = useState([])
   
  const register = ( ) =>{
    alert("Sign uop successful")
  }
   const login = () =>{
    alert("Login successful")
   }
   const Addussrs = () =>{
    setuserslist([...userslist, users])
   }
  return (
   
    <div >
       {/* <Navbar/> */}
      <h1 className='home'>Home</h1>
      <p style={{fontSize:'30px', color:"purple"}}>Inline Styling</p>
      <h3 style={mysty}>Internal styling </h3>
      <p style={mysty.header}>substyle</p>
      <button className='btn btn-dark'>Click me</button>
      <AiFillCodepenCircle size={30} />
      <FaGithub/>
      <FaAddressCard/> 
      <img style={{width:"100px", height:"100px"}} src={imhd} alt="" />
     <Mybutton myst={{color:"white", backgroundColor:"black"}} text="Sign Up" event={register}/>
     <Mybutton text="Login" event={login}/>
     <Mybutton  text="Loading"/>

     <Adduser  setusers={setusers} users={users} adduser={Addussrs}/>
     <Dispuser userslist={userslist}/>
    </div>
  )
}

export default Home