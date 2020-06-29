import React from "react";
import { actors } from "../data";

const displayActor = ({ name, movies }) => {
  console.log(actors);
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
const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(displayActor)}
    </div>
  );
};

export default Actors;
