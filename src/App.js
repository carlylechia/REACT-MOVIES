import React from "react";
import { useEffect } from "react";
import './App.css';
import searchicon from './search.svg';

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=7b0d80cb';

const App = () => {
  const loadMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data);
  }
  useEffect(() => {
    loadMovies('superman')
  }, [])

  const Movie1 = {
    "Title": "Superman/Batman: Public Enemies",
    "Year": "2009",
    "imdbID": "tt1398941",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZDc5NTFiMzgtZWJiOS00N2M1LWJmOGYtZmNjMzFhMzcxZjRiXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
}

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input 
          placeholder="Search for movies"
          value={'superman'}
          onChange{...() => {}}
        />
        <img
          src={searchicon}
          alt="search"
          onClick={() => {}}
        />
      </div>
      <div className="container">
        <div className="movie">
          <div>
          <p>{Movie1.Year}</p>
          </div>
          <div>
            <img
              src={Movie1.Poster !== 'N/A' ? Movie1.Poster : 'https://via.placeholder.com/400'}
              alt={Movie1.Title}
            />
          </div>
          <div>
            <span>{Movie1.Type}</span>
            <h3>{Movie1.Title}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;