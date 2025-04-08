import "./App.css"

import Navbar from "./Navbar"
import { Route, Routes } from "react-router-dom"
import Notfound from "./Notfound"
import Todo from "./Todo"
import Home from "./Home"
import Landing from "./Landing"
import Profile from "./Profile"
import Http from "./Http"
import Onetodo from "./Onetodo"
import Spotify from "./Spotify"
import Formik from "./Formik"

function App() {
  // const [username, setusername] = useState("tola")
  //  const [detail, setdetail] = useState({
  //   user:"david",
  //   pass:""
  //  })
  //  const [input1, setinput1] = useState("")
  //  const [input2, setinput2] = useState("")
  //  const [alluser, setalluser] = useState([])
  //  const [showing, setshowing] = useState(false)

  // const click = () =>{

  //   setusername("bolu")
  //   setdetail({...detail, pass:"123"})
  // }
  // const submit = () =>{
  //   let userdetail = {
  //     input1,
  //     input2
  //   }
  //   console.log(userdetail);
  //   setalluser([...alluser,userdetail ])
    
  // }

  // const show = ()=>{
  //   setshowing(!showing)
  // }
  return (
    <>
      {/* <Navbar/> */}
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='*' element={<Notfound/>} />
      <Route path="/http" element={<Http/>}/>
      <Route path="/spot" element={<Spotify/>}/>
      <Route path="/one/:id" element={<Onetodo/>}/>
      <Route path="/formik" element={<Formik/>}/>
      <Route path="/home" element={<Landing/>}>
        <Route index element={<Todo/>} />
        <Route  path='/home/todo' element={<Todo/>}/>
        <Route path="/home/profile" element={<Profile/>}/>
      </Route>
     </Routes>
      {/* <div>
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
      </div> */}
      
    </>
    

  )
}


export default App