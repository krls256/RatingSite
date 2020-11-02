import React from 'react';
import NavItem from "./NavItem";

const EditNavbar = ({navList : {data, active}, changeNavList}) => {
    const onClick = (index) => () => {
        changeNavList({
            data,
            active: index
        })
    }
    return (
        <nav className='edit-navbar'>
            <ul className="edit-navbar__list">
                {data.map((navItem, index) => {
                    const className = index === active ? 'edit-navbar__item-content_active' : null;
                    return (
                        <li className='edit-navbar__item' key={`${NavItem}${index}`}>
                            <NavItem
                                label={navItem}
                                click={onClick(index)}
                                additionalClassName={className}
                                />
                        </li>
                    )
                })}
            </ul>

        </nav>
    )
}

export default EditNavbar;
