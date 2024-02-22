import React from 'react';
import Card from "../../components/Card";

const OrderDeliveryCard = ({ order , children }) => {
    const { deliveryAddress, deliveryContact, messageToShop, messageToRider, paymentMethod } =
      order;
   
      console.log(order);
      
    return (
      <Card
        header={'주문내역'}
        children={children}
        data={[
          { term: "배달주소", description: deliveryAddress },
          { term: "전화번호", description: deliveryContact },
          { term: "결제수단", description: paymentMethod },
          { term: "가게사장님께", description: messageToShop },
          { term: "라이더님께", description: messageToRider },
        ]}
      />
    );
  };
  
  export default OrderDeliveryCard;
  