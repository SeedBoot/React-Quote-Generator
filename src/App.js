import React, {Component} from 'react';
import './App.css';

import {connect} from 'react-redux';
import Quote from './Components/Quote';
import Button from './Components/Button';
import * as actions from './store/actions';

class App extends Component {

//FETCH ALL QUOTES
  componentDidMount() {
    this.props.fetchQuotes();
  }

  render() {
    return (
      <div style={{backgroundColor: this.props.currentBg}} className="wrapper">
        <Quote style={{color: this.props.fontColor}} randQuote={this.props.currentQuote}/>
        <Button clickable={this.props.btnDis} changeQuote={() => {
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
        .then(quotes => dispatch({type: actions.FETCH_QUOTES, fillArr: quotes}))
        .then(() => dispatch({type: actions.SET_RAND_QUOTE})) //IS IT AGAINST THE RULES TO CHAIN ACTIONS I ANOTHER ACTION?
        .then(() => dispatch({type: actions.ENABLE_BUTTON}))
        .then(() => dispatch({type: actions.GET_COLORS}))
        .then(() => dispatch({type: actions.DEFINE_FONT_COLOR}))
    },
    setRandQuote: () => dispatch({type: actions.SET_RAND_QUOTE}),
    setBgcolor: () => dispatch({type: actions.CHANGE_BG_COLOR}),
    setFontColor: () => dispatch({type: actions.DEFINE_FONT_COLOR})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
