import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { instance } from "../axios";
import { requests } from "../requests";
import { HEADER } from "./banner.js";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(requests.fetchNetflixOrignals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, [] );
    
    console.log( movie )
    
    // FUNCTION FOR LIMITING THE WORDS IN DESCRIPTION
    function truncate ( str, n )
    {
        return str?.length > n ? str.substr( 0, n - 1 ) + "..." : str;
    }

  return (
    <HEADER
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${movie.backdrop_path}"
                )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner_gradient"></div>
    </HEADER>
  );
}

export default Banner;
