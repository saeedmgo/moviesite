import React from "react";
import useMovieDB from "../../hooks/useMovieDB";
import MoviesSlider from "../MoviesSlider/MoviesSlider";

export default function PopMoviesSlider() {
  const { data, loading } = useMovieDB("movie/popular");
  return (
    <div>
      <MoviesSlider movies={data?.results || []} />
    </div>
  );
}
