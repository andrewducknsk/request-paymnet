import React, { memo } from 'react';
import locale from '../../locale';
import './header.scss';

function Header() {
    return (
        <header className="header">
            <h1 className="header_title">{locale.header}</h1>  
        </header>
    )
}

export default memo(Header);