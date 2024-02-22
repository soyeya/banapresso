import React from 'react';

const OrderProduct = ({productTitle, count, iced}) => {

     return(
        <div className="orderList">
             <ul>
                 <li><p>상품 : {productTitle}</p></li>
                 <li><p>수량 : {count} 개</p></li>
                 <li><p>옵션 : {iced ? "Ice" : "Hot"}</p></li>
             </ul>
         </div>
     )
}

export default OrderProduct;