import React from 'react';
import { Link } from 'react-router-dom'
import Nav from "../components/Navi";
import Page from "../components/Page";
import Title from '../components/Title';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../css/swiper.css';



const Home = () => {

    return(
      <div className="home">
         <Page header={<Title><img src={  process.env.PUBLIC_URL + `/assets/img/logo.png`} alt="logo" style={{height : "30px"}}/></Title>} footer={<Nav />}>
         <div className="mainSlider">
         <Swiper
            // install Swiper modules
            modules={[Autoplay]}
            autoplay={true}
            spaceBetween={50}
            slidesPerView={1}
            scrollbar={{ draggable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
         >
            <SwiperSlide className='slides slide1'><Link to='/menu'><img src={  process.env.PUBLIC_URL  + "/assets/img/banner01.jpeg"} alt="banner01"/></Link></SwiperSlide>
            <SwiperSlide className='slides slide2'><Link to='/menu'><img src={  process.env.PUBLIC_URL + "/assets/img/banner02.jpeg"} alt="banner02"/></Link></SwiperSlide>
            <SwiperSlide className='slides slide3'><Link to='/menu'><img src={  process.env.PUBLIC_URL  + "/assets/img/banner03.jpeg"} alt="banner03"/></Link></SwiperSlide>
            <SwiperSlide className='slides slide4'><Link to='/menu'><img src={ process.env.PUBLIC_URL  + "/assets/img/banner04.jpeg"} alt="banner04"/></Link></SwiperSlide>
         </Swiper>
            </div>
         </Page>
      </div>
    )
}

export default Home;