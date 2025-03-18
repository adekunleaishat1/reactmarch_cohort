import React from 'react'

const Adduser = ({setusers, users, adduser}) => {
  return (
    <div>
        <h1> Add User</h1>
        <input onChange={(e)=> setusers({...users, name:e.target.value})} type="text" />
        <input  onChange={(e)=> setusers({...users, class:e.target.value})} type="text" />
        <button onClick={adduser} >AddUser</button>
    </div>
  )
}

export default Adduser