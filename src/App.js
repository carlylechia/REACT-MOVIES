import React from "react";
import { useEffect, useState } from "react";
import './App.css';
import searchicon from './search.svg';
import MovieCard from "./MovieCard";

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=7b0d80cb';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchWord, setSearchWord] = useState('');

  const loadMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }
  useEffect(() => {
    loadMovies('superman')
  }, [])

//   const Movie1 = {
//     "Title": "Superman/Batman: Public Enemies",
//     "Year": "2009",
//     "imdbID": "tt1398941",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BZDc5NTFiMzgtZWJiOS00N2M1LWJmOGYtZmNjMzFhMzcxZjRiXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
// }

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input 
          placeholder="Search for movies"
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
        />
        <img
          src={searchicon}
          alt="search"
          onClick={() => loadMovies(searchWord)}
        />
      </div>
      {
        movies.length > 0
        ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie}/>
            ))}
          </div> 
        ) : (
      <div className="empty">
        <h2>No movies found</h2>
      </div>)
      }
      
    </div>
  )
}

export default App;