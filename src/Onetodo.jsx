import React ,{useEffect, useState}from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Onetodo = () => {
    const [alltodo, setalltodo] = useState({})
    const {id} = useParams()
    // console.log(param);
    useEffect(() => {
      axios.get("https://api-deploy-ba6u.onrender.com")
      .then((res)=>{
          console.log(res); 
      
       setalltodo(res.data[id])
      }).catch((err)=>{
          console.log(err);  
      })
  
  }, [])
    
  return (
    <div>
      <h1>{alltodo.Title}</h1>
      <h1>{alltodo.content}</h1>
    </div>
  )
}

export default Onetodo