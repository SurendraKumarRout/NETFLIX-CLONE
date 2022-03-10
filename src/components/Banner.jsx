import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { instance } from "../axios";
import { requests } from "../requests";
import { HEADER } from "./banner.js";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function Banner() {
  const [movie, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(requests.fetchActionMovies);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  // FUNCTION FOR LIMITING THE WORDS IN DESCRIPTION
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

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
      movieTrailer(
        movie?.title ||
          movie?.name ||
          movie?.original_name ||
          movie?.original_title ||
          movie?.overview ||
          ""
      )
        .then((url) => {
          // https://www.youtube.com/watch?v=XtMThy8QKqU
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div>
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
            <button
              className="banner_button"
              onClick={() => handleClick(movie)}
            >
              Play
            </button>
            <button className="banner_button">My List</button>
          </div>
          <h1 className="banner_description">
            {truncate(movie?.overview, 250)}
          </h1>
        </div>
        <div className="banner_gradient"></div>
      </HEADER>
      <div>{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}</div>
    </div>
  );
}

export default Banner;
