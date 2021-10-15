import React, { useEffect, useState } from "react";
import useMovieDB from "../../hooks/useMovieDB";
import movies from "../../services/movies";

export default function PopMoviesSlider() {
  const { data, loading } = useMovieDB("movie/popular");
  console.log(data);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        data?.results.map((movie) => (
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            />
            <h3>{movie.title}</h3>
          </div>
        ))
      )}
      ;
    </div>
  );
}
