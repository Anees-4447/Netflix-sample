import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import {fetchTrending,imageUrl} from '../../constants'
function Banner() {
  const [movie,setMovie] = useState()
  useEffect(()=>{
     axios.get(fetchTrending).then((response)=>{
      console.log(response.data.results)
      setMovie(response.data.results[2])
     }).catch((error)=>{
      console.log(error)
     })
  })
  return (
    <div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}} >
      
    <div className="banner">
        <div className="content">
            <h1 className="title"> {movie && movie.title}</h1>
            <h1 className="discription">{movie && movie.overview}</h1>
            <div className="banner-buttons">
                <button className="buttons">Play</button>
                 <button className="buttons">Watch Trailer</button>
            </div>
            <div className="fade-bottom"></div>
        </div>
    </div>
    </div>
  )
}

export default Banner