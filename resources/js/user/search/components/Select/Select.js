import React from 'react';

const Select = ({data: {link, title}, selected}) => {
    const className = selected ?
        "search-bar__list-item search-bar__list-item--real search-bar__list-item--selected" :
        "search-bar__list-item search-bar__list-item--real";
    return (
        <li className={className} tabIndex={1}>
            <a href={link} className="search-bar__list-link p-3">{title}</a>
        </li>
    )
}

export default Select
