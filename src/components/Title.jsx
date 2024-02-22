import React from 'react';
import { Link } from 'react-router-dom';

const Title = ( { backURL = "" , children , onClick }) => {
   
   if(backURL) {

      return(
         <>
         <Link to={backURL} onClick={onClick} />
         <h2 style={{paddingRight : "44px"}}>{children}</h2>
         </>
      )
   }

   return <h2>{children}</h2>
}

export default Title;