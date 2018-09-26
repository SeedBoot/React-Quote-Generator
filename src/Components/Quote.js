import React from 'react';

import ReactLoading from 'react-loading';

const Quote = (props) => {

  if (!props.randQuote) {
    return (
      <React.Fragment>
        <ReactLoading type={'spin'} color={'#fafafa'} height={'5%'} width={'5%'}/>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <div style={props.style} id="quote">
          <h2>{props.randQuote.quote}</h2>
        </div>
        <div style={props.style} id="author">
          <h3>Author - {props.randQuote.author}</h3>
        </div>
      </React.Fragment>
    );
  }

}

export default Quote;
