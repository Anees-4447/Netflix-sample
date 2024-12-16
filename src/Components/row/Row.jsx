import React, { useEffect, useState } from "react";
import "./Row.css";
import instance from "../../instence";
import { imageUrl } from "../../constants";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
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
  return (
    <div className="row">
      <h1 className="title">{title}</h1>
      {movies?.map((items) => (
        <div className="posters">
          <img src={`${imageUrl}/${items.backdrop_path}`} alt={items.title || ""} />
        </div>
      ))}
    </div>
  );
}

export default Row;
