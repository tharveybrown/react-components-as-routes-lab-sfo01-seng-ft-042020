import React from "react";
import { directors } from "../data";

const displayDirector = ({ name, movies }) => {
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        {movies.map((movie) => (
          <li>{movie}</li>
        ))}
      </ul>
    </div>
  );
};

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(displayDirector)}
    </div>
  );
};

export default Directors;
