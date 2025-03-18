import React from 'react'

const Mybutton = ({myst,event,text}) => {
    // console.log(props);
    
  return (
    <div>
        <button style={myst}  onClick={event}>{text}</button>
    </div>
  )
}

export default Mybutton