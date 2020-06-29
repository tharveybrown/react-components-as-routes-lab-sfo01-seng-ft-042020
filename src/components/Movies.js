import React from "react";
import { movies } from "../data";

const displayMovie = (movie) => {
  console.log(movie);
  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.time}</p>
      <ul>
        {movie.genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
    </div>
  );
};

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie) => {
        return displayMovie(movie);
      })}
    </div>
  );
};

export default Movies;
