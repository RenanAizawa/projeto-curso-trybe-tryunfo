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
      isSaveButtonDisabled: true,
      savedCards: [],
    };
  }

  inputChange = (event) => {
    const { value, type, name } = event.target;
    this.setState({
      [name]: type === 'checkbox' ? event.target.checked : value,
    }, () => this.estadoDoBtn());
  };

  saveBtn = (event) => {
    event.preventDefault();
    const {
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardName,
      cardDescription,
      cardImage,
      cardRare,
    } = this.state;
    const savecard = {
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardName,
      cardDescription,
      cardImage,
      cardRare,
    };
    this.setState((prevState) => ({
      savedCards: [prevState.savedCards, savecard],
    }));
    this.setState({
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardRare: 'normal',
    });
  }

  estadoDoBtn = () => {
    const {
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardName,
      cardDescription,
      cardImage,
      cardRare,
    } = this.state;
    const ruleMax = 90;
    const ruleMin = 0;
    const maxAttr = 210;
    const attr1 = parseInt(cardAttr1, 10);
    const attr2 = parseInt(cardAttr2, 10);
    const attr3 = parseInt(cardAttr3, 10);
    const somaAttr = attr1 + attr2 + attr3;
    let val1 = false;
    let val2 = false;
    let val3 = false;
    if (cardName.length
      && cardDescription.length
      && cardRare.length
      && cardImage.length) {
      val1 = true;
    }
    if (somaAttr <= maxAttr) {
      val2 = true;
    }
    if ((attr1 >= ruleMin && attr1 <= ruleMax)
      && (attr2 >= ruleMin && attr2 <= ruleMax)
      && (attr3 >= ruleMin && attr3 <= ruleMax)) {
      val3 = true;
    }
    const btn = val1 && val2 && val3;
    if (btn) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
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
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
