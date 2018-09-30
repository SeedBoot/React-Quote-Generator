import React from 'react';

export const Button = ({changeQuote, isDisabled}) =>
    <button
      className="btn"
      onClick={changeQuote}
      disabled={isDisabled}
    >
      CHANGE QUOTE
    </button>
