import React from 'react';

const Author = (props) => {
  return(
    <div style={props.style} id="author">
      <h3>Author - {props.name}</h3>
    </div>
  );
}

export default Author;
