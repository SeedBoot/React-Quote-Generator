import React, {Component} from 'react';
import './App.css';

import { 
  FETCH_QUOTES, SET_RAND_QUOTE,
  CHANGE_BG_COLOR, DEFINE_FONT_COLOR,
} from './store/reducer';
import {connect} from 'react-redux';
import { Quote } from './Components/Quote';
import { Button } from './Components/Button';

class App extends Component {

//FETCH ALL QUOTES
  componentDidMount() {
    this.props.fetchQuotes();
  }

  render() {
    return (
      <div style={{ backgroundColor: this.props.currentBg || '#600707'}} className="wrapper">
        <Quote fontColor={{color: this.props.fontColor}} randQuote={this.props.currentQuote}/>
        <Button isDisabled={!this.props.quotesArr.length} changeQuote={() => {
          this.props.setRandQuote();
          this.props.setBgcolor();
          this.props.setFontColor();
        }}/>
      </div>
    );
  }
}

//MAP STATE TO CURRENT CLASS PROPS
const mapStateToProps = state => {
  return {
    quotesArr: state.quotes,
    currentBg: state.currentColor,
    fontColor: state.fontColor,
    currentQuote: state.currentQuote,
    btnDis: state.buttonDisabled
  }
}

//MAP DISPATCH TO CURRENT CLASS PROPS
const mapDispatchToProps = dispatch => {
  return {
    fetchQuotes: () => {
      fetch('https://talaikis.com/api/quotes/')
        .then(response => response.json())
        .then(quotes => dispatch({type: FETCH_QUOTES, fillArr: quotes}))
        .then(() => dispatch({type: SET_RAND_QUOTE}))
    },
    setRandQuote: () => dispatch({type: SET_RAND_QUOTE}),
    setBgcolor: () => dispatch({type: CHANGE_BG_COLOR}),
    setFontColor: () => dispatch({type: DEFINE_FONT_COLOR})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
