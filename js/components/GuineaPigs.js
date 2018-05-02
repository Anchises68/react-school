import React from 'react';

// Stateless functional component way to display a prop using a variable:
export const GuineaPigs = (props) => {
  let src = props.src;
  return (
    <div>
      <h1>Cute Guinea Pigs</h1>
      <img src={src} />
    </div>
  );
}

GuineaPigs.propTypes = {
  src: React.PropTypes.string.isRequired
};
