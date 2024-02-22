import React from 'react';
import { useNavigate } from "react-router-dom";
import Button from "./Button"

const OrderBtn = ( { productid, count, iced }) => {
 
     return(
        <Button 
        title={'결제하기'} 
        form={'order-form'}
        />
     )
}

export default OrderBtn;