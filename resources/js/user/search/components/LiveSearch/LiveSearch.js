import React, {useEffect} from 'react';
import Select from "../Select";

const LiveSearch = ({workingList, focus, active}) => {
    const content = workingList.map((item, index) => {
        const selected  = index === active ? true : false;
        return (
            <Select data={item} key={item.title+item.id} selected={selected}/>
        )
    });
    const extra = <li className="search-bar__list-item p-3">Ничего не найдено</li>;

    const className = focus ? 'search-bar__live-search' : 'search-bar__live-search search-bar__live-search--disable';





    return (
        <div className={className}>
            <ul className="search-bar__list">
                {content.length === 1 ? extra : content}
            </ul>
        </div>
    )
}

export default LiveSearch;

