import React from 'react';
import Title from '../../components/Title';

const MenuForm = ( {title , children} ) => {

   return(

     <div className="menuBox">
        <div style={{ paddingLeft : "50px" , fontSize : "13px" , color : "#f1658a" , textTransform : "uppercase"}}><Title>{title}</Title></div>
         {children}
     </div>
   )
}
export default MenuForm;