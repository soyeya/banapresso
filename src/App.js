import React from 'react';
import './css/main.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Cart from './pages/Cart/index.jsx';
import MenuList from './pages/Menu/index.jsx';
import Order from './pages/Order/index.jsx';

const App = () => {

    return(
     <div className="App">
        <BrowserRouter>      
          <Routes>
           <Route path="/" element={<Home />}></Route>
           <Route path="/menu" element={<MenuList />}></Route>
           <Route path="/cart" element={<Cart />}></Route>
           <Route path="/cart/:productId/:count/:iced" element={<Cart />}></Route>
           <Route path="/order/:productTitle/:count/:option" element={<Order />}></Route>
           <Route path="/order" element={<Order />}></Route>
         </Routes>
         </BrowserRouter>
   
       </div>
    )
}

export default App;