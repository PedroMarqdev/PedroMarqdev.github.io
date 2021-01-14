import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.stateFunc = this.stateFunc.bind(this);
    this.state = {
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      imagePath: '',
      bookmarked: false,
      genre: 'action',
    };
    this.baseState = this.state;
  }

  onChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  stateFunc() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(this.baseState);
  }
  render() {
    return (
      <div>
        <form data-testid="add-movie-form">
          <label htmlFor="title" data-testid="title-input-label">
            Título
          </label>
          <input
            data-testid="title-input"
            onChange={this.onChange}
            id="title"
            name="title"
            type="text"
            value={this.state.title}
          />
          <label htmlFor="subtitle" data-testid="subtitle-input-label">
            Subtítulo
          </label>
          <input
            data-testid="subtitle-input"
            onChange={this.onChange}
            id="subtitle"
            name="subtitle"
            type="text"
            value={this.state.subtitle}
          />
          <label htmlFor="imagePath" data-testid="image-input-label">
            Imagem
          </label>
          <input
            data-testid="image-input"
            onChange={this.onChange}
            id="imagePath"
            name="imagePath"
            type="text"
            value={this.state.imagePath}
          />
          <label htmlFor="storyline" data-testid="storyline-input-label">
            Sinopse
          </label>
          <textarea
            data-testid="storyline-input"
            onChange={this.onChange}
            id="storyline"
            name="storyline"
            value={this.state.storyline}
          />
          <label htmlFor="rating" data-testid="rating-input-label">
            Avaliação
          </label>
          <input
            data-testid="rating-input"
            onChange={this.onChange}
            id="rating"
            name="rating"
            type="number"
            value={this.state.rating}
          />
          <label htmlFor="genre" data-testid="genre-input-label">
            Gênero
          </label>
          <select
            onChange={this.onChange}
            data-testid="genre-input"
            id="genre"
            name="genre"
            value={this.state.genre}
          >
            <option data-testid="genre-option" value="action">
              Ação
            </option>
            <option data-testid="genre-option" value="comedy">
              Comédia
            </option>
            <option data-testid="genre-option" value="thriller">
              Suspense
            </option>
          </select>
          <button data-testid="send-button" type="button" onClick={this.stateFunc}>
          Adicionar filme
        </button>
        </form>

      </div>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };
export default AddMovie;
