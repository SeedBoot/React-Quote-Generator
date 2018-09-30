import React from 'react';
import ReactLoading from 'react-loading';

export const Quote = ({randQuote, fontColor}) => (
  randQuote ?
    <React.Fragment>
      <div style={fontColor || '#fafafa'} id="quote">
      <h2>{randQuote.quote}</h2>
    </div>
      <div style={fontColor || '#fafafa'} id="author">
      <h3>Author - {randQuote.author}</h3>
    </div>
    </React.Fragment>
    :
    <React.Fragment>
      <ReactLoading type={'spin'} color={'#fafafa'} height={'5%'} width={'5%'} />
    </React.Fragment>
);
