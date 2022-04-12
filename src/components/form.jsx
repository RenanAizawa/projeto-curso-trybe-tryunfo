import React from 'react';
import './form.css';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form className="form-content">
          <label htmlFor="name-input">
            nome da carta
            <input
              type="text"
              id="name-input"
              data-testid="name-input"
            />
          </label>
          <label htmlFor="description-input">
            descrição da carta
            <input
              type="textarea"
              id="description-input"
              data-testid="description-input"
            />
          </label>
          <label htmlFor="attr1-input">
            Atributo 1
            <input
              type="number"
              id="attr1-input"
              data-testid="attr1-input"
            />
          </label>
          <label htmlFor="attr2-input">
            Atributo 2
            <input
              type="number"
              id="attr2-input"
              data-testid="attr2-input"
            />
          </label>
          <label htmlFor="attr3-input">
            Atributo 3
            <input
              type="number"
              id="attr3-input"
              data-testid="attr3-input"
            />
          </label>
          <label htmlFor="image-input">
            IMG
            <input
              type="text"
              id="image-input"
              data-testid="image-input"
            />
          </label>
          <label htmlFor="rare-input">
            raridade
            <select id="rare-input" data-testid="rare-input">
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <label htmlFor="super-trunfo">
            Super Trunfo
            <input
              type="checkbox"
              name="super-trunfo"
              id="super-trundo"
              data-testid="trunfo-input"
            />
          </label>
          <button type="submit" data-testid="save-button">Salvar</button>
        </form>
      </div>
    );
  }
}

export default Form;
