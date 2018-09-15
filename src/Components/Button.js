import React from 'react';

const Button = (props) => {
  return (
    <button className="btn" onClick={props.changeQuote} disabled={props.clickable}>CHANGE QUOTE</button>
  );
}

export default Button;
