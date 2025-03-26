import React,{useRef, useState} from 'react'


const Two = ({currentSong,apiSongs}) => {
    const [isplaying, setisplaying] = useState(false)
    const audioRef = useRef(null);
    console.log(audioRef.current);
   

    const toggleSong =()=>{
        if (isplaying) {
            audioRef.current.pause()
            setisplaying(false)
        }else{
            audioRef.current.play()
            setisplaying(true)
        }
        
    }
  return (
    <div>
        <div style={{backgroundColor:"red",position:"fixed",bottom:"0", width:"100%", display:"flex"}}>
       
        <audio  src={apiSongs[currentSong] && apiSongs[currentSong].songUrl} ref={audioRef}></audio>
            <div>
                <img src={apiSongs[currentSong] && apiSongs[currentSong].songImage} alt="" style={{width:"50px", height:"50px"}} />
            </div>
            <div>
            <h1>Song:{apiSongs[currentSong] && apiSongs[currentSong].songTitle}</h1>
            <h1>Song:{apiSongs[currentSong] && apiSongs[currentSong].artistName}</h1>
            </div>
            <div>
                <button onClick={toggleSong}>{isplaying? "pause" : "play"}</button>
               
            </div>
        </div>
    </div>
  )
}

export default Two