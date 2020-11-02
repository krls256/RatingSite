import React from 'react';

const NavItem = ({label, click, additionalClassName}) => {
    return(
        <span className={`edit-navbar__item-content ${additionalClassName}`} onClick={click}>{label}</span>
    );
}

export default NavItem
