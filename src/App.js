import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: false,
    };
  }

  inputChange = (event) => {
    const { value, type, name } = event.target;
    this.setState({
      [name]: type === 'checkbox' ? event.target.checked : value,
    });
  };

  saveBtn = (event) => {
    event.preventDefault();
    console.log('btn sendo chamado com sucesso');
  }

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
      hasTrunfo,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo by Renan</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          hasTrunfo={ hasTrunfo }
          onInputChange={ (event) => this.inputChange(event) }
          onSaveButtonClick={ (event) => this.saveBtn(event) }
        />
        <Card />
      </div>
    );
  }
}

export default App;
