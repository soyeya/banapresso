import React, { useState, useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import Nav from "../../components/Navi";
import Page from "../../components/Page";
import Title from "../../components/Title";
import MenuForm from "./MenuForm";
import MenuItem from './MenuItem';
import menuDB from '../../json/menuList.json';
import MenuDetail from './MenuDetail';
import Category from './Category';



const MenuList = (  ) => {

   const [productList, setProductList] = useState(null);
   const [name, setName] = useState(null);
   const [detailOpen, setDetailOpen] = useState(false);
   const [color, setColor] = useState(false); 
   const [productId , setProductId] = useState('');
   const [category, setCategory] = useState(null);
   const navigate = useNavigate();

   const handleClick = (v) => {

      if(v) {
         setName(v);
         setColor(true);
      }

   }
   
   const changeURL = (product) => {

      navigate(`/menu?productId=${product.id}`);
      setProductId(product);
      setDetailOpen(true);
      
    };

    const detailClose = () => {

      setDetailOpen(false);
   
   }

   const fetch = async() => {

      const productList = await menuDB.menu;
      const category = productList.name;
      const { coffee, bread, juice, smoothie, Tea, Ade , dessert } = productList;
    
      if(name === null) return ( 

          setName('coffee'), 
          setProductList(coffee),
          setColor(true),
          setCategory(category)
      )

      if( name === 'coffee') {setProductList(coffee)}; 
      if( name === 'bread') {setProductList(bread)};
      if( name === 'juice') {setProductList(juice)};
      if( name === 'smoothie') {setProductList(smoothie)};
      if( name === 'dessert') {setProductList(dessert)};
      if( name === 'tea') {setProductList(Tea)};
      if( name === 'ade') {setProductList(Ade)};
      
   };

   useEffect(() => {

      fetch();


   },[name])

     return(
        <>
         { detailOpen ? (
           <MenuDetail product={productId} productList={name} close={detailClose}/>
         ) : ( productList && (
         <>     
            <Page header={<Title>메뉴</Title>} footer={<Nav/>}>
                  <div className="category">
                   <ul>
                     { category.map((v, index) => (
                        <Category key ={'title'+index} product={v} name={name} color={color} onClick={() => handleClick(v)}/>
                     ))}
                     </ul>
                  </div>
                     <MenuForm title={name}>
                        <ul>
                           { productList.map((product) => (
                              <MenuItem key={product.id} product={product} onClick={() => changeURL(product)}/>
                           ))}
                        </ul>
                  </MenuForm>
            </Page>
           </>
           ))}



        </>
     )

}

export default MenuList;
