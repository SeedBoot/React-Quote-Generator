import React, {Component} from 'react';

import Quote from '../Components/Quote';
import Author from '../Components/Author';
import Button from "../Components/Button";
import {defineFontColor} from '../utils/helpers';

class QuoteContainer extends Component {

  state = {
    quote: null,
    author: null,
    bgColor: '#679281',
    fontColor: '#fafafa'
  }

  componentDidMount() {
    this.randomQuoteHandler();
  }

  randomQuoteHandler = () => {
    let quoteObj = this.props.quotes[Math.floor(Math.random() * 100)];
    this.setState({
      quote: quoteObj.quote,
      author: quoteObj.author
    })
  }

  randomColorHandler = () => {
    let currentBgColor = this.props.colors[Math.floor(Math.random() * 143)];
    this.setState({
      bgColor: currentBgColor
    }, () => {
      let currentFontColor = defineFontColor(this.state.bgColor);
      if (currentFontColor === 'light') {
        this.setState({fontColor: '#000'})
      } else {
        this.setState({fontColor: '#fafafa'})
      }
    });
  }

  render() {
    if (this.state.quote) {
      return (
        <div style={{backgroundColor: this.state.bgColor, color: this.state.fontColor}} className="wrapper">
          <Quote quote={this.state.quote}/>
          <Author name={this.state.author}/>
          <Button changeQuote={() => {
            this.randomQuoteHandler();
            this.randomColorHandler();
          }}/>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default QuoteContainer;
