import React, { memo, useContext } from 'react';
import { MyContext } from '../../context';
import './header.scss';

function Header() {
  const { header } = useContext(MyContext); 
  
  return (
    <header className="header">
      <h1 className="header_title">{header}</h1>  
    </header>
  )
}

export default memo(Header);