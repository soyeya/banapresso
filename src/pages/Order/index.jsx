import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Page from "../../components/Page";
import Title from "../../components/Title";
import Navi from '../../components/Navi';
import OrderApi from '../../shared/api/orderApi';
import OrderDeliveryCard from './OrderDeliveryCard';
import OrderProduct from './OrderProduct';

const Order = () => {

   const params = useParams();
   const { productTitle, count, option } = params;
   const [order , setOrder] = useState(null);
   const [iced , setIced] = useState(null);
   const fetch = async() => {
      try{
          const order = await OrderApi.fetchMyOrder();
          console.log(order);
          setOrder(order);
          }
      catch(error){
          console.log('order 오류');
          return;
      }

      if( option == "true" ){
          setIced(true);
      }
      if( option == "false"){
          setIced(false);
      }
   };

   useEffect(() => {
      
       fetch();

   },[]);

     return(
        <>
        <Page header={<Title>주문목록</Title>} 
         footer={<Navi />}>
           {order && <OrderDeliveryCard children={(<OrderProduct productTitle={productTitle} count={count} option={option}/>)}order={order}/>}
         </Page>
        </>
     )

}

export default Order;