import React, { useState } from 'react';
import { Menu } from 'antd';
import CartWidget from '../CartWidget/CartWidget.jsx'
import { Flex } from 'antd';
import { Link } from 'react-router-dom'
import './NavBar.css'

const items = [
  {
    label: 'Productos',
    key: 'products'
  },
  {
    label: 'Marcas',
    key: 'brands'
  },
  {
    label: 'Novedades',
    key: 'news'
  },
  {
    label: (
      <Link to='sales'>Ofertas</Link>
    ),
    key: 'sales'
  },
];

const NavBar = () => {
    const [current, setCurrent] = useState('products');
    const onClick = (e) => {
      console.log('click ', e);
      setCurrent(e.key);
    };
    return (
        <>
            <Flex>
                <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} className='menu'/>
                <CartWidget/>
            </Flex>
        </>
    )
}

export default NavBar