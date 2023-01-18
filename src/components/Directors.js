import React from "react";
import { directors } from "../data";

function Directors() {
  const director=directors.map((dirt,index) =>(
    <div key={index}>
      {dirt.name}
      <ul>
        {dirt.movies.map((movie,index)=>(
          <li key={index}>{movie}</li>
        ))}
      </ul>
    </div>
  ))
  return <div>
    <h1>Directors Page</h1>
    {director}
  </div>;
}

export default Directors;
