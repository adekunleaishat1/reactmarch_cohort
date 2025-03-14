import "./App.css"
import { useState } from "react"

function App() {
  const [username, setusername] = useState("tola")
   const [detail, setdetail] = useState({
    user:"david",
    pass:""
   })
   const [input1, setinput1] = useState("")
   const [input2, setinput2] = useState("")
   const [alluser, setalluser] = useState([])
   const [showing, setshowing] = useState(false)

  const click = () =>{

    setusername("bolu")
    setdetail({...detail, pass:"123"})
  }
  const submit = () =>{
    let userdetail = {
      input1,
      input2
    }
    console.log(userdetail);
    setalluser([...alluser,userdetail ])
    
  }

  const show = ()=>{
    setshowing(!showing)
  }
  return (
    <>
      <div>
      <h1>My App</h1>
      <p>{detail.user}</p>
      <p>{detail.pass}</p>
      <p>{username}</p>
      <button onClick={click}>click</button>
      <input onChange={(e)=>setinput1(e.target.value)} type="text" />
      <input onChange={(e)=>setinput2(e.target.value)} type={showing? "text" : "password"} />
      <button onClick={show}>show</button>
      <button onClick={submit}>Submit</button>
      <div>hhhhh {Math.random()}</div>
      
 
      
      {alluser.length == 0 ? "No user available" : alluser.map((user)=>(
          <div>
              <h1>{user.input1}</h1>
              <h1>{user.input2}</h1>
             </div>
      ))

      }
      </div>
      
    </>
    

  )
}


export default App