import React from 'react';
import './form.css';

class Form extends React.Component {
  render() {
    const { onChange } = this.props;
    return (
      <div>
        <form className="form-content">
          <label htmlFor="name-input">
            nome da carta
            <input
              type="text"
              id="name-input"
              data-testid="name-input"
              name="cardName"
              onChange={ onChange }
            />
          </label>
          <label htmlFor="description-input">
            descrição da carta
            <input
              type="textarea"
              id="description-input"
              data-testid="description-input"
              name="cardDescription"
              onChange={ onChange }
            />
          </label>
          <label htmlFor="attr1-input">
            Atributo 1
            <input
              type="number"
              id="attr1-input"
              data-testid="attr1-input"
              name="cardAttr1"
              onChange={ onChange }
            />
          </label>
          <label htmlFor="attr2-input">
            Atributo 2
            <input
              type="number"
              id="attr2-input"
              data-testid="attr2-input"
              name="cardAttr2"
              onChange={ onChange }
            />
          </label>
          <label htmlFor="attr3-input">
            Atributo 3
            <input
              type="number"
              id="attr3-input"
              data-testid="attr3-input"
              name="cardAttr3"
              onChange={ onChange }
            />
          </label>
          <label htmlFor="image-input">
            IMG
            <input
              type="text"
              id="image-input"
              data-testid="image-input"
              name="cardImage"
              onChange={ onChange }
            />
          </label>
          <label htmlFor="rare-input">
            raridade
            <select
              id="rare-input"
              data-testid="rare-input"
              name="cardRare"
              onChange={ onChange }
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
              onChange={ onChange }
            />
          </label>
          <button type="submit" data-testid="save-button">Salvar</button>
        </form>
      </div>
    );
  }
}

export default Form;
