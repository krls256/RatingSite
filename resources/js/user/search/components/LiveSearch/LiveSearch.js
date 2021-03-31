import React, {useEffect} from 'react';
import Select from "../Select";

const LiveSearch = ({workingList, focus, active}) => {
    const content = workingList.map((item, index) => {
        const selected  = index === active ? true : false;
        return (
            <Select data={item} key={item.title+item.id} selected={selected}/>
        )
    });
    const extra = <li className="search-line__list-item p-3">Ничего не найдено</li>;

    const className = focus && (content.length !== 0) ? 'search-line__live-search' : 'search-line__live-search search-line__live-search--disable';

    return (
        <div className={className}>
            <ul className="search-bar__list">
                {content.length === 1 ? extra : content}
            </ul>
        </div>
    )
}

export default LiveSearch;

