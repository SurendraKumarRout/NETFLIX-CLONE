import React, { useEffect, useState } from "react";
import { instance } from "../axios";
import WebFont from "webfontloader";
import { DIV } from "./row";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const baseUrl = "https://image.tmdb.org/t/p/w500";

export function Row({ title, fetchUrl, isLarge }) {
  const [ movies, setMovies ] = useState( [] );
  const [trailerUrl, setTrailerUrl] = useState("");

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

  // ---------------YOUTUBE FRAME-------------------
  const opts = {
    height: "400",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

   const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
        .then((url) => {
          // https://www.youtube.com/watch?v=XtMThy8QKqU
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <DIV className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {/* SEVERAL ROW POSTERS */}

        {movies.map((movie) => (
          <img
            key={ movie.id }
            onClick= { () => handleClick(movie)}
            className={`poster ${isLarge && "poster_large"}`}
            src={`${baseUrl}${
              isLarge ? movie.poster_path : movie.backdrop_path
            }`}
            // loading="lazy"
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </DIV>
  );
}


