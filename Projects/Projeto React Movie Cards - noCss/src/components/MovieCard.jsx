import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {

  render() {
    const movie = this.props.movie;
    const { title, imagePath, subtitle, storyline } = movie;
    const altName = `${title} picture`;
    return (
      <div>
        <img src={imagePath} alt={altName} />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <Rating rating={movie.rating} />
      </div>
    );
  }
}
MovieCard.defaultProps = {
  movie: {
    title: 'string',
    imagePath: 'string',
    subtitle: 'string',
    storyline: 'string',
  },
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    imagePath: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
  }),
};

export default MovieCard;
