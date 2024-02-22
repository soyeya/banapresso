import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return(
    <nav className='Nav'>
     <Link to='/'>HOME</Link>
     <Link to='/menu' className='order'>주문</Link>
     <Link to='/order'>주문내역</Link>
    </nav>
  )

}

export default Nav;