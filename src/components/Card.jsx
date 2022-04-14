import PropTypes from 'prop-types';
import React from 'react';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;
    return (
      <div>
        <h2>Card Vizualização</h2>
        <p data-testid="name-card">
          Card name:
          {' '}
          {cardName}
        </p>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <p data-testid="attr1-card">
          Attr1......
          {' '}
          {cardAttr1}
        </p>
        <p data-testid="attr2-card">
          Attr2......
          {' '}
          {cardAttr2}
        </p>
        <p data-testid="attr3-card">
          Attr3......
          {' '}
          {cardAttr3}
        </p>
        <p data-testid="rare-card">
          Raridade......
          {' '}
          {cardRare}
        </p>
        <p data-testid="description-card">
          Descrição:
          {' '}
          {cardDescription}
        </p>
        <span>
          {cardTrunfo && (<p data-testid="trunfo-card">Super Trunfo</p>)}
        </span>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
}.isRequired;

export default Card;
