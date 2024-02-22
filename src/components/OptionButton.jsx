import React from 'react';
import { useState, useEffect } from 'react';

const OptionButton = ({option1 , option2 , only, nothing, children , onClick, iced}) => {
    if(only){
    return(
       <div className="drinkBtn" onClick={onClick}>
            <label htmlFor="iced" className={ iced ? 'temBtn active' : 'temBtn'}>{option2}</label>
            <input type="radio" name="drink" id="iced"/>
       </div>
         )
    }
    if(nothing){ return(<></>)}


    return(
        <>
     {children}
     </>
     )

}

export default OptionButton;