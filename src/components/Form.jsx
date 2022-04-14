import PropTypes from 'prop-types';
import React from 'react';
import './form.css';

class Form extends React.Component {
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
      isSaveButtonDisabled,
      // hasTrunfo,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <div>
        <h2>Card Construtor</h2>
        <form className="form-content">
          <label htmlFor="name-input">
            nome da carta
            <input
              type="text"
              id="name-input"
              data-testid="name-input"
              name="cardName"
              onChange={ onInputChange }
              value={ cardName }
            />
          </label>
          <label htmlFor="description-input">
            descrição da carta
            <input
              type="textarea"
              id="description-input"
              data-testid="description-input"
              name="cardDescription"
              onChange={ onInputChange }
              value={ cardDescription }
            />
          </label>
          <label htmlFor="attr1-input">
            Atributo 1
            <input
              type="number"
              id="attr1-input"
              data-testid="attr1-input"
              name="cardAttr1"
              onChange={ onInputChange }
              value={ cardAttr1 }
            />
          </label>
          <label htmlFor="attr2-input">
            Atributo 2
            <input
              type="number"
              id="attr2-input"
              data-testid="attr2-input"
              name="cardAttr2"
              onChange={ onInputChange }
              value={ cardAttr2 }
            />
          </label>
          <label htmlFor="attr3-input">
            Atributo 3
            <input
              type="number"
              id="attr3-input"
              data-testid="attr3-input"
              name="cardAttr3"
              onChange={ onInputChange }
              value={ cardAttr3 }
            />
          </label>
          <label htmlFor="image-input">
            IMG
            <input
              type="text"
              id="image-input"
              data-testid="image-input"
              name="cardImage"
              onChange={ onInputChange }
              value={ cardImage }
            />
          </label>
          <label htmlFor="rare-input">
            raridade
            <select
              id="rare-input"
              data-testid="rare-input"
              name="cardRare"
              onChange={ onInputChange }
              value={ cardRare }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <label htmlFor="super-trunfo">
            Super Trunfo
            <input
              type="checkbox"
              name="cardTrunfo"
              id="super-trundo"
              data-testid="trunfo-input"
              onChange={ onInputChange }
              checked={ cardTrunfo }
            />
          </label>
          <button
            type="submit"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
}.isRequired;

export default Form;
