import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Http = () => {
    const [data , setdata] = useState([])
    const [loading , setloading] = useState(false)
    // fetch("https://api-deploy-ba6u.onrender.com/")
    // .then((res) => res.json())
    // .then((data)=> console.log(data))

    useEffect(() => {
          setloading(true)
        axios.get("https://api-deploy-ba6u.onrender.com")
        .then((res)=>{
            setloading(false)
            console.log(res); 
           setdata(res.data) 
        }).catch((err)=>{
            setloading(false)
            console.log(err);  
        })
    
    }, [])
    
    
    
  return (
    <div>

     <h1>Http request method</h1>
     <button onClick={()=>setloading(true)}>Click</button>
     {loading? <h1>Loading...</h1> : 
     data.map((el, index)=>(
        <>
        <h1>{el.Title}</h1>
        <h1>{el.content}</h1>
        <input checked={el.Completed == "true"? true : false} type="checkbox" name="" id="" />
        <Link to={`/one/${index}`}>see more</Link>
        </>
     ))
     }
    </div>
  )
}

export default Http