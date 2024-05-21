import React, { useState } from 'react';
import { Menu } from 'antd';

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
    label: 'Ofertas',
    key: 'sales'
  },
];

const NavBar = () => {
    const [current, setCurrent] = useState('products');
    const onClick = (e) => {
      console.log('click ', e);
      setCurrent(e.key);
    };
    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
}

export default NavBar