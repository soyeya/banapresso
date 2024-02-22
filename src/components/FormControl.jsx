import React from 'react';

const FormControl = ({htmlFor, label, required, error, children}) => {

     return( 
        <>
        <div className="formControl">
         <label htmlFor={htmlFor}>
           {label}
           {required && <span className="required">*</span>}
         </label>
         {children}
         {error && <div className="error">{error}</div>}
        </div>
        </>
     )

}

export default FormControl;