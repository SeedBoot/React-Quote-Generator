import React from 'react';

const Button = (props) => {
  return (
    <button className="btn" onClick={props.changeQuote}>CHANGE QUOTE</button>
  );
}

export default Button;
