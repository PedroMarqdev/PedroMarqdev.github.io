import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.updateFilter = this.updateFilter.bind(this);
  }

  updateFilter() {
    let {
      movies,
      selectedGenre = '',
      bookmarkedOnly,
    } = this.props;
    const { searchText = '' } = this.props;
    if (selectedGenre !== '') {
      movies = movies.filter((element) => element.genre === selectedGenre);
      selectedGenre = '';
    }
    if (bookmarkedOnly === true) {
      movies = movies.filter((element) => element.bookmarked === true);
      bookmarkedOnly = false;
    }
    const Search1 = movies.filter((element) =>
    element.title.toLowerCase().includes(searchText.toLowerCase()));
    const Search3 = movies.filter((element) =>
    element.subtitle.toLowerCase().includes(searchText.toLowerCase()));
    const Search2 = movies.filter((element) =>
    element.storyline.toLowerCase().includes(searchText.toLowerCase()));
    const newSearch = [...Search2, ...Search3, ...Search1];
    const set = new Set(newSearch);
    const realResult = [...set];

    return realResult;
  }
  render() {
    const movies = this.updateFilter();
    console.log(movies);
    return (
      <div data-testid="movie-list" className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </div>
    );
  }
}
MovieList.defaultProps = {
  movies: {
    title: 'string',
    imagePath: 'string',
    subtitle: 'string',
    storyline: 'string',
    rating: 10,
  },
};
MovieList.propTypes = {
  selectedGenre: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.string.isRequired,
  searchText: PropTypes.string.isRequired,
  movies: PropTypes.shape({
    title: PropTypes.string,
    imagePath: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
  }),
};

export default MovieList;
