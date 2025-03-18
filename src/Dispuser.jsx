import React from 'react'

const Dispuser = ({userslist}) => {
  return (
    <div>
        {userslist.map((el)=>(
            <div>
                <h1>{el.name}</h1>
                <h1>{el.class}</h1>
            </div>
        ))}
    </div>
  )
}

export default Dispuser