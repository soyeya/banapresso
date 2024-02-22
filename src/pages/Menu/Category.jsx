import React from 'react';

const Category = ( { product , onClick , name , color}) => {

     return(

        <>
        <li><p onClick={onClick} className={ name == product && color ? 'active' : ''}>{product}</p></li>
        </>
     )
}

export default Category;