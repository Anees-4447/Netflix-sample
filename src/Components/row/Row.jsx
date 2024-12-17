import React, { useEffect, useState } from "react";
import "./Row.css";
import instance from "../../instence";
import YouTube from "react-youtube";
import { imageUrl,API_KEY} from "../../constants";


function Row({ title, fetchUrl, isSmall }) {
  const [movies, setMovies] = useState([]);
  const [video,setVideo] = useState(null)
  const fetchData = async () => {
    try {
      const { data } = await instance.get(fetchUrl);
      console.log(data.results);
      setMovies(data.results);
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
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  
  return (
    <div className="row">
      <h1 className="title">{title}</h1>
      <div className="posters">
      {movies?.map((items) => (
          <img  onClick={(() => movieHandle(items.id))} className={ isSmall? 'smallPoster_img' :'posters_img'}  src={`${imageUrl}/${items.backdrop_path}`} alt={items.title || ""} />
        ))}
        </div>
       { video && <YouTube videoId={video.key} opts={opts}  />  }
    </div>
  );
}

export default Row;
