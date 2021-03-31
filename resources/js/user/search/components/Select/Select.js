import React from 'react';

const Select = ({data: {link, title}, selected}) => {
    const className = selected ?
        "search-line__list-item search-line__list-item--real search-line__list-item--selected" :
        "search-line__list-item search-line__list-item--real";
    return (
        <li className={className} tabIndex={1}>
            <a href={link} className="search-line__list-link p-3">{title}</a>
        </li>
    )
}

export default Select
