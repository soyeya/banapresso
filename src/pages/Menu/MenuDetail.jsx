import React, { useState, useEffect  } from "react";
import OptionButton from "../../components/OptionButton";
import Page from "../../components/Page";
import Title from "../../components/Title";
import PaymentBtn from '../../components/PaymentBtn';
import Count from "./CountBtn";

const MenuDetail = ( { product , productList , close } ) => {
 
    const {img, title , entitle , content , price } = product;
    const [ only, setOnly ] = useState(false);
    const [ nothing, setNothing ] = useState(false);
    const [ iced, setIced] = useState(true);
    const [ count, setCount ] = useState(1);
 
    const changeOption = () => {
    
    if(productList === 'coffee') setOnly(false);
    if(productList === 'smoothie') setOnly(true);
    if(productList === 'juice') setOnly(true);
    if(productList === 'ade') setOnly(true);
    if(productList === 'bread') setNothing(true);
    if(productList === 'dessert') setNothing(true);

    };

    const icedClick = () => { 
        setIced(!iced);
    }

    const plus = () => {
        if(count >= 20) return setCount(20)
        setCount(count + 1);
    };

    const minus = () => {
        if(count <= 1) return setCount(1)
        setCount(count - 1);
    };


    useEffect(() => { 
        changeOption();
    },[only, nothing, count, iced]);

     return(      
     <>
        <Page header={<Title backURL={'/menu'} onClick={close}>메뉴상세</Title>} footer={<PaymentBtn product={product.id} count={count} iced={iced}/>}>
         <div className="detail">
            <ul>
                <li>
                    <img src={  process.env.PUBLIC_URL + `/assets/img/${img}`} alt={title} /><p>{title}<span>{entitle}</span></p>
                    <p className="priceTxt">{price}원</p>
                    <p className="infoText">{content}</p>
                </li>
            </ul>
            <OptionButton option1="hot" option2="iced" only={only} nothing={nothing} iced={iced} onClick={icedClick}>
                <div className="drinkBtn" >
                    <label htmlFor="hot" onClick={icedClick} className={ iced ?  'temBtn' : 'temBtn active' }>Hot</label>
                    <label htmlFor="iced" onClick={icedClick} className={ iced ? 'temBtn active' : 'temBtn'}>Iced</label>
                    <input type="radio" name="drink" id="hot"/>
                    <input type="radio" name="drink" id="iced"/>
                 </div>
            </OptionButton>
            <Count count={count} minus={minus} plus={plus}/>
        </div>
        </Page>
        </>
     )
}

export default MenuDetail;