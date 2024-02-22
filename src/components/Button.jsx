import React from 'react';
 import { Link } from 'react-router-dom';
 
 
 const Button = ({ title, ...rest }) => {
     return(
     <div className="button">
       <button {...rest}>{title}</button>
    </div>
     )
}

export default Button;