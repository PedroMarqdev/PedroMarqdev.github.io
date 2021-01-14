import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="textInput" data-testid="text-input-label">Inclui o texto:</label>
        <input
          data-testid="text-input" onChange={onSearchTextChange}
          type="text" id="textInput" name="searchText" value={searchText}
        />
        <label htmlFor="checkbox" data-testid="checkbox-input-label">
          Mostrar somente favoritos</label>
        <input
          data-testid="checkbox-input" onChange={onBookmarkedChange} type="checkbox"
          name="bookmarkedOnly" id="checkbox" checked={bookmarkedOnly}
        />
        <label htmlFor="genre" data-testid="select-input-label">Filtrar por gênero</label>
        <select
          onChange={onSelectedGenreChange} data-testid="select-input"
          id="genre" name="selectedGenre" value={selectedGenre}
        >
          <option data-testid="select-option" value="">Todos</option>
          <option data-testid="select-option" value="action">Ação</option>
          <option data-testid="select-option" value="comedy">Comédia</option>
          <option data-testid="select-option" value="thriller">Suspense</option>
        </select>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.string.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
