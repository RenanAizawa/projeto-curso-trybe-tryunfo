import React from 'react';
import Form from './components/form';

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
      isSaveButtonDisabled: true,
    };
  }

  inputChange = (event) => {
    const { value, type, name } = event.target;
    console.log(value, type, name);
  };

  render() {
    return (
      <div>
        <h1>Tryunfo by Renan</h1>
        <Form
          onChange={ (event) => this.inputChange(event) }
        />
      </div>
    );
  }
}

export default App;
