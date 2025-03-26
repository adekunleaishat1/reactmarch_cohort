import React from 'react'

const One = (props) => {
    console.log(props);

    
  return (
    <>
       <div  style={{}} >
       {props.apiSongs && props.apiSongs.map((song,index)=>{
        return(<>
        <div onClick={()=>props.setcurrentSong(index)}  style={{display:"flex", cursor:"pointer"}}>
            
            <div>
                <img src={song.songImage} alt="" style={{width:"50px", height:"50px"}}/>
            </div>
            <div>
                <h3>{song.artistName}</h3>
                <h6>{song.songTitle}</h6>
            </div>
            {/* <button onClick={onplay}>heyo</button> */}
        </div>
       </> )
       })} 
       </div>
    </>
  )
}

export default One