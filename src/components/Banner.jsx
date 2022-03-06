import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { instance } from "../axios";
import { requests } from "../requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(requests.fetchNetflixOrignals);
      setMovie(Math.floor(Math.random() * (request.data.results.length - 1)));

      return request;
    }
    fetchData();
  }, []);
  // console.log(movie)
    
    return (
        <header className="banner">
            <div className="banner_content">

            </div>
            
        </header>
    );
}

export default Banner;
