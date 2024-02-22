import React from 'react';

const MenuItem = ( { product , onClick })  => {

     return(
      <>
          <li key={product.id}>
            <div className="pdBox" onClick={onClick}>
            <img src={ process.env.PUBLIC_URL + `/assets/img/${product.img}`} alt={product.id} /><p><span>{product.entitle}</span>{product.title}</p></div>
            </li>
          </>
     )
 
}

export default MenuItem;