import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.changeFunc = this.changeFunc.bind(this);
    this.resetState = this.resetState.bind(this);
    this.state = {
      movies: this.props.movies,
      searchText: '',
      bookmarkedOnly: '',
      selectedGenre: '',
    };
  }

  changeFunc({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  resetState(target) {
    this.setState({ movies: [...this.state.movies, target] }); // Valeu, Cosmo o/
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.changeFunc}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.changeFunc}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.changeFunc}
        />
        <MovieList
          movies={this.state.movies}
          selectedGenre={this.state.selectedGenre}
          bookmarkedOnly={this.state.bookmarkedOnly}
          searchText={this.state.searchText}
        />
        <AddMovie onClick={this.resetState} />
      </div>
    );
  }
}
MovieLibrary.defaultProps = {
  movies: {
    title: 'string',
    imagePath: 'string',
    subtitle: 'string',
    storyline: 'string',
    rating: 10,
  },
};
MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    imagePath: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
  }),
  ),
};

export default MovieLibrary;
