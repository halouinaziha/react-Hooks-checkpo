import { useState } from 'react';
import './App.css';
import Filter from './component/Filter.js';
import MovieList from "./component/MovieList.js";
import { movieData } from "./component/Data.js";


function App() {
  const [movies, setMovies] = useState(movieData)
  const [filterTitle, setFilterTitle] = useState("");

  const [filterRating, setFilterRating] = useState(0);
  console.log(movies);
  return (
    <div className="">
      <Filter setFilterTitle={setFilterTitle}  filterRating={filterRating} setFilterRating={setFilterRating}/>
      <MovieList movies={movies} filterTitle={filterTitle} filterRating={filterRating}/>
  
    </div>
  );
}

export default App;