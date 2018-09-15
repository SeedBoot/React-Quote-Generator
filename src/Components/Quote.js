import React from 'react';

import QuoteContainer from './QuoteContainer';
import ReactLoading from 'react-loading';

const Quote = (props) => {

  if (!props.randQuote) {
    return (
      <QuoteContainer>
        <ReactLoading type={'spin'} color={'#fafafa'} height={'5%'} width={'5%'}/>
      </QuoteContainer>
    );
  } else {
    return (
      <QuoteContainer>
        <div style={props.style} id="quote">
          <h2>{props.randQuote.quote}</h2>
        </div>
        <div style={props.style} id="author">
          <h3>Author - {props.randQuote.author}</h3>
        </div>
      </QuoteContainer>
    );
  }

}

export default Quote;
