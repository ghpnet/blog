import React from 'react';
import MenuItem from './MenuItem';

const Menu = ({ activePage, onMenuItemClick }) => {
  const menuItems = ['Home', 'Login', 'Novo Post', 'Contato'];
  const menuLinks = ['/', '/login', '/novo-post', '/contato'];

  return (
    <ul>
      {menuItems.map((item, index) => (
        <MenuItem
          key={index}
          title={item}
          menuLink={menuLinks[index]}
          active={activePage === item}
        />
      ))}
    </ul>
  );
};

export default Menu;