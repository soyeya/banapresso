import React , { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Page from "../../components/Page";
import Title from "../../components/Title";
import OrderForm from './OrderForm';
import cartDB from '../../json/cartList.json'
import MenuItem from '../Menu/MenuItem';
import OrderBtn from '../../components/OrderBtn';
import OrderApi from '../../shared/api/orderApi';


const Cart = () => {

    const navigate = useNavigate();
    const params = useParams();
    const [ product, setProduct ] = useState(null);
    const [ count, setCount ] = useState(1);
    const [ total, setTotal ] = useState(1);
    const [ option , setOption ] = useState();
    const productId = params.productId;
    
    const handleSubmit = async(values) => {
       console.log(values);
          try{
            navigate(`/order/${product.title}/${count}/${option}`);
            await OrderApi.createOrder(values);

          }catch(e){
            console.log('cart 오류')
          }
    
    }
    const fetch = async(productId) => {
        
        const productList = await cartDB.list[productId];
        const num = params.count;
        const price = productList.price;
        const totalPrice = price.replace("," , "") * count;
        const iced = params.iced;

        if(product == null) return ( 
            setProduct(productList)
            )

        if(iced == 'true') return(
                
            setOption(true),
            setProduct(productList),
            setCount(num),
            setTotal(totalPrice)  

        )

        if(iced == 'false')return(
            
            setOption(false),
            setProduct(productList),
            setCount(num),
            setTotal(totalPrice)
        )
        
            setOption('');
            setProduct(productList);
            setCount(num);
            setTotal(totalPrice);
    }

       useEffect(() => {

        if(!productId) return;
        fetch(productId);


    },[product, count, option, total]);

    return(
        <Page 
        header={<Title backURL={"/menu"}>장바구니</Title>} 
        footer={<OrderBtn/>}>
            <div className="cart">
             <ul>
               {product && (<MenuItem product={product}/>)}
             </ul>
             <div className="totalCount">
                <span>{option ? "ICE" : "HOT"}</span>
                <span>수량 : <strong>{count}</strong>개</span>
                <span>가격 : <strong>{total}</strong>원</span>
             </div>
            </div>
            <OrderForm onSubmit={handleSubmit}/>
        </Page>
    )
}

export default Cart;