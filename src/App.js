import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './Search.svg'
import MovieCard from './MovieCard';

// c87a52b9

const API_URL = "https://www.omdbapi.com?apikey=c87a52b9";

// const movie1 = {
//   "Title": "Amazing Spiderman Syndrome",
//   "Year": "2012",
//   "imdbID": "tt2586634",
//   "Type": "movie",
//   "Poster": "N/A",
// } 
const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    searchMovies('Ba');
  }, []);
  const searchMovies = async (title) =>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
 
    setMovies(data.Search);
  }


  return (
    <div className="app">
      <h1>OkeyemiMovieSpace</h1> 

      <div className='search'>
        <input 
          placeholder='Search for movies'
          value={searchTerm}
          onChange={(e) =>  setSearchTerm(e.target.value)}
          />
          <img
          src={SearchIcon}
          alt='search'
          onClick={() => searchMovies(searchTerm)}
          />
      </div>

      {movies?.length > 0
        ? (
          <div className='container'>
            {movies.map((movie) => (
            <MovieCard movie={movie}  />
            ))}
        </div>
        ) : (
          <div className='empty'>
            <h2>Ooops. No movies found</h2>
            <p style={{padding:'10px', fontStyle: 'italic', color: 'gray'}}> Powered by OkeyemiCreative</p>
          </div>
        )
      }
      
    
    </div>
  );
}

export default App;
