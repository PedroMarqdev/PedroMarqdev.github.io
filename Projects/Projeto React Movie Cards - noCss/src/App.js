import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import MovieList from './components/MovieList';
import data from './data.js';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={data} />
    </div>
  );
}

export default App;
