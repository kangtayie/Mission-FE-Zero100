import React from 'react';

const Button = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

  
export default Button;
 

  /*function Button({text}) {
    return (
      <button>{text}</button>
    )
  }
  Button.propTypes = {
    text: PropTypes.string.isRequired
}*/