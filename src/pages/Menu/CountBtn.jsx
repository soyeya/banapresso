import React from 'react';

const Count = ({ count, minus, plus }) => {

     return(
        <>
         <div className="countBtn">
             <h3>수량</h3>
            <button onClick={minus}className="count">-</button>
            <span>{count}</span>
            <button onClick={plus}className="count">+</button>
            </div>

        </>

     )
}

export default Count;