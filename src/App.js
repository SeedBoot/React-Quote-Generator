import React, {Component} from 'react';
import './App.css';

import {getRandomNum} from './utils/helpers';
import Quote from './Components/Quote';
import Button from './Components/Button';
import createColorArr from './utils/colors';

class App extends Component {

  //APP STATE
  state = {
    quotesArr: [],
    currentColor: null,
    currentQuote: null,
    buttonDisabled: true
  }

  //SET A RANDOM QUOTE AS CURRENT QUOTE
  setRandomQuote = () => {
    let randQuote = this.state.quotesArr[getRandomNum()];
    this.setState({currentQuote: randQuote})
  }

  //SET A RANDOM BG COLOR AS CURRENT COLOR
  setRandomColor = () => {
    let colors = createColorArr();
    let randColor = colors[Math.floor(Math.random() * 143)];
    console.log(randColor);
    this.setState({currentColor: randColor})
  }

  //FETCH ALL QUOTES
  componentDidMount() {
    fetch('https://talaikis.com/api/quotes/')
      .then(response => response.json())
      .then(quotes => {
        this.setState({quotesArr: quotes})
      })
      .then(() => {
        this.setRandomQuote();
        this.setState({buttonDisabled: false})
      })
  }

  //SET BACKGROUND COLOR WHEN BUTTON IS CLICKED
  setBgColor = () => {
    if (!this.state.currentColor) {
      return {backgroundColor: '#600707'};
    } else {
      return {backgroundColor: this.state.currentColor}
    }
  }

  render() {
    return (
      <div style={this.setBgColor()} className="wrapper">
        <Quote randQuote={this.state.currentQuote}/>
        <Button clickable={this.state.buttonDisabled} changeQuote={() => {
          this.setRandomQuote();
          this.setRandomColor();
        }}/>
      </div>
    );
  }
}

export default App;
