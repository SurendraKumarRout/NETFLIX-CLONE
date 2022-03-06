import React, { useEffect, useState } from "react";
import { instance } from "../axios";
import WebFont from "webfontloader";
import { DIV } from "./row";

const baseUrl = "https://image.tmdb.org/t/p/w500";

export function Row({ title, fetchUrl, isLarge }) {
  const [movies, setMovies] = useState([]);

  // A SNIPPET OF CODE WHICH RUNS BASED ON A SPECIFIC CONDITION/VARIABLE
  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  // ---------FOR NETFLIX-FONT----------
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Bebas Neue"],
      },
    });
  }, []);

  return (
    <DIV className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {/* SEVERAL ROW POSTERS */}

        {movies.map((movie) => (
           <img
              key={movie.id}
              className= {`poster ${isLarge && "poster_large"}`}
              src={`${baseUrl}${isLarge ? movie.poster_path : movie.backdrop_path}`}
              // loading="lazy"
              alt={movie.name}
            /> 
        ))}
      </div>
    </DIV>
  );
}
