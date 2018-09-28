import React from 'react';

const Quote = (props) => {
  return (
    <div style={props.style} id="quote">
      <h2>{props.quote}</h2>
    </div>
  );
}


export default Quote;
