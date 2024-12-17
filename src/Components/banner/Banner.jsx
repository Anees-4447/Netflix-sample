import React, { useEffect, useState } from "react";
import "./Banner.css";
import instance from "../../instence";
import {imageUrl, API_KEY} from '../../constants'
import YouTube from "react-youtube";
function Banner({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
    const [video,setVideo] = useState(null)
  const fetchData = async () => {
    try {
      const { data } = await instance.get(fetchUrl);
      const randomMovie = data.results[Math.floor(Math.random() * data.results.length)]
      setMovies(randomMovie);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  async function movieHandle (id){
    try{
     const response = await instance.get(`movie/${id}/videos?api_key=${API_KEY}`)
        if(response.data.results.lenght !== 0){
          setVideo(response.data.results[0])
        }else{
          console.log("Video not available...!!")
        }
      }catch(error){
      console.log(error)
    }

  }
  const opts = {
    height: '400',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <>
    <div  className="banner-image" style={{backgroundImage:`url(${movies ? imageUrl+movies.backdrop_path : "" })`}}>
      <div className="banner">
      {movies && (
        <div className="content">
          <h1 className="title">{movies.title}</h1>
          <h1 className="discription">{movies.overview}</h1>
          <div className="banner-buttons">
            <button className="buttons" >Play</button>
            <button className="buttons" onClick={()=> movieHandle(movies.id)} >Watch Trailer</button>
          </div>
          <div className="fade-bottom"></div>
        </div>
      )}
    </div>
    </div>
    { video && <YouTube videoId={video.key} opts={opts}  />  }
    </>
  );
}

export default Banner;
