import React, { useState,useEffect } from 'react'
import One from './One'
import Two from './Two'
import axios from 'axios'




const Spotify = () => {
 const [apiSongs, setapiSongs] = useState(null)
 const [Loading, setLoading] = useState(false)
const [currentSong,setcurrentSong]= useState(0)

 useEffect(() => {
    setLoading(true)
    axios.get("https://robo-music-api.onrender.com/music/my-api")
    .then((res)=>{
        console.log(res);
        setapiSongs(res.data)
    }).catch((err)=>{
        console.log(err);
        
    })
  
 }, [])
 

  return (
    <>
        <One apiSongs={apiSongs} setcurrentSong={setcurrentSong}/>
        <Two currentSong={currentSong} apiSongs={apiSongs}/>
    </>
  )
}

export default Spotify