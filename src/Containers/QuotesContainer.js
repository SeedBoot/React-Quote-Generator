import React, {Component} from 'react';

import QuoteContainer from './QuoteContainer';
import Loader from '../Components/Loader';
import {connect} from 'react-redux';
import * as actions from '../store/actions';


class QuotesContainer extends Component {

  //FETCH ALL QUOTES
  componentDidMount() {
    this.props.fetchQuotes();
    this.props.fillColorArr();
  }

  render() {
    //DISPLAY A LOADER WHILE FETCHING QUOTES
    if (this.props.quotesArr.length === 0) {
      return <Loader/>
    }
    else {
    //WHEN QUOTES ARE SET IN THE STORE RETURN THE QUOTE CONTAINER
      return (
        <React.Fragment>
            <QuoteContainer colors={this.props.colorsArr} quotes={this.props.quotesArr}/>
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    quotesArr: state.quotes,
    colorsArr: state.colors
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchQuotes: () => {
      fetch('https://talaikis.com/api/quotes/')
        .then(response => response.json())
        .then(quotes => dispatch({type: actions.FETCH_QUOTES, fillArr: quotes}))
    },
    fillColorArr: () => dispatch({type: actions.GET_COLORS}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuotesContainer);
