import React from 'react';
import { Link , useNavigate  } from 'react-router-dom';
import Button from '../components/Button';

const PaymentBtn = ({ count , product , iced }) => {

  const navigation = useNavigate();
  const handleClick = () => {

     navigation(`/cart/${product}/${count}/${iced}`);
  }

    return(
        <>
          <Button title={'결제하기'} onClick={handleClick}></Button>
        </>

    )
}

export default PaymentBtn;