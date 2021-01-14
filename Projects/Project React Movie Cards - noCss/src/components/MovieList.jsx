import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const object = this.props.movies;
    return object.map((movie) => <MovieCard key={movie.title} movie={movie} />);
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
  movies: PropTypes.shape({
    title: PropTypes.string,
    imagePath: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
  }),
};
export default MovieList;
