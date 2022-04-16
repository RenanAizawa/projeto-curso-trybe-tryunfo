import PropTypes from 'prop-types';
import React from 'react';

class Baralho extends React.Component {
  render() {
    const { baralho, deleteCard } = this.props;
    return (
      <div className="baralho-container">
        <h2>baralho de Cartas</h2>
        {' '}
        { baralho.map((card) => (
          <div key={ card.cardName }>
            <p data-testid="name-card">
              Card name:
              {' '}
              {card.cardName}
            </p>
            <img src={ card.cardImage } alt={ card.cardName } />
            <p>
              Attr1......
              {' '}
              {card.cardAttr1}
            </p>
            <p>
              Attr2......
              {' '}
              {card.cardAttr2}
            </p>
            <p>
              Attr3......
              {' '}
              {card.cardAttr3}
            </p>
            <p>
              Raridade......
              {' '}
              {card.cardRare}
            </p>
            <p>
              Descrição:
              {' '}
              {card.cardDescription}
            </p>
            <span>
              {card.cardTrunfo && (<p>Super Trunfo</p>)}
            </span>
            <button type="button" onClick={ deleteCard }>Deletar Card</button>
          </div>
        ))}
      </div>
    );
  }
}

Baralho.propTypes = {
  baralho: PropTypes.array,
  deleteCard: PropTypes.func,
}.isRequired;

export default Baralho;
