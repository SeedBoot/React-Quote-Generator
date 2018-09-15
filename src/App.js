import React, {Component} from 'react';
import './App.css';

import {getRandomNum} from './utils/helpers';
import Quote from './Components/Quote';
import Button from './Components/Button';
import createColorArr from './utils/colors';
import {defineFontColor} from './utils/helpers';

class App extends Component {

  //APP STATE
  state = {
    quotesArr: [],
    currentColor: '#600707',
    fontColor: '#fafafa',
    currentQuote: null,
    buttonDisabled: true
  }

  //ARRAY OF COLORS
  colors = {
    colorsArr: createColorArr()
  };

  //SET A RANDOM QUOTE AS CURRENT QUOTE
  setRandomQuote = () => {
    let randQuote = this.state.quotesArr[getRandomNum()];
    this.setState({currentQuote: randQuote})
  }

  //SET A RANDOM BG COLOR AS CURRENT COLOR AND FONT COLOR BASED ON CURRENT COLOR
  setRandomColors = () => {
    let randColor = this.colors.colorsArr[Math.floor(Math.random() * 143)];
    this.setState({currentColor: randColor}, () => {
      let fontColor = defineFontColor(this.state.currentColor);
      if (fontColor === 'light') {
        this.setState({fontColor: '#000'})
      } else if (fontColor === 'dark') {
        this.setState({fontColor: '#fafafa'})
      }
    });
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

  render() {
    return (
      <div style={{backgroundColor: this.state.currentColor}} className="wrapper">
        <Quote style={{color: this.state.fontColor}} randQuote={this.state.currentQuote}/>
        <Button clickable={this.state.buttonDisabled} changeQuote={() => {
          this.setRandomQuote();
          this.setRandomColors();
        }}/>
      </div>
    );
  }
}

export default App;
