import React from 'react';
import './button.style.css';

const Button = ({message , onClick}) => {
   return (
      <button className='button' onClick={onClick}>{message}</button>
   )
}

export default Button;