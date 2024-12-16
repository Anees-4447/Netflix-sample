import React, { useEffect, useState } from "react";
import "./Banner.css";
import instance from "../../instence";
import {imageUrl} from '../../constants'
function Banner({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
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
  }, [fetchUrl]);
  return (
    <div style={{backgroundImage:`url(${movies ? imageUrl+movies.backdrop_path : "" })`}}>
      <div className="banner">
      {movies && (
        <div className="content">
          <h1 className="title">{movies.title}</h1>
          <h1 className="discription">{movies.overview}</h1>
          <div className="banner-buttons">
            <button className="buttons">Play</button>
            <button className="buttons">Watch Trailer</button>
          </div>
          <div className="fade-bottom"></div>
        </div>
      )}
    </div>
    </div>
  );
}

export default Banner;
