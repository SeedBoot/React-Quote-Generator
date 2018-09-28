import React, {Component} from 'react';

import QuoteContainer from './QuoteContainer';
import {connect} from 'react-redux';
import * as actions from '../store/actions';
import ReactLoading from "react-loading";


class QuotesContainer extends Component {

  //FETCH ALL QUOTES
  componentDidMount() {
    this.props.fetchQuotes();
    this.props.fillColorArr();
  }

  checkIfQuotesReady = () => {
    let quotesCheck = this.props.quotesArr.length > 0;
    return quotesCheck;
  }

  render() {

    let quotesReady = this.checkIfQuotesReady();

    if (this.props.quotesArr.length === 0) {
      return (
        <div className="loader">
          <ReactLoading type={'bars'} color={'#fafafa'} height={'5%'} width={'5%'}/>
        </div>
      )
    } else {
      return (
        <React.Fragment>
          {quotesReady ? <QuoteContainer colors={this.props.colorsArr} quotes={this.props.quotesArr}/> : null}
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
