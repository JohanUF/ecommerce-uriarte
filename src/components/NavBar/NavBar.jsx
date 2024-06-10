import React, { useState } from 'react'
import { Menu } from 'antd'
import CartWidget from '../CartWidget/CartWidget.jsx'
import { Flex } from 'antd'
import { Link } from 'react-router-dom'
import './NavBar.css'

const items = [
  {
    label: (
      <Link to='/'>Todos</Link>
    ),
    key: 'Root'
  },
  {
    label: (
      <Link to='/category/CPU'>Procesadores</Link>
    ),
    key: 'CPU'
  },
  {
    label: (
      <Link to='/category/GPU'>Tarjetas de video</Link>
    ),
    key: 'GPU'
  },
  {
    label: (
      <Link to='/category/Teclado'>Teclados</Link>
    ),
    key: 'Teclado'
  },
  {
    label: (
      <Link to='/category/Mouse'>Mouses</Link>
    ),
    key: 'Mouse'
  },
  {
    label: (
      <Link to='/category/Motherboard'>Placas madre</Link>
    ),
    key: 'Motherboard'
  }
];

const NavBar = () => {
    const [current, setCurrent] = useState('products');
    const onClick = (e) => {
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