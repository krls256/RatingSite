import React from 'react';
import {Link} from 'react-router-dom';
import SideBarItem from "../SideBarItem";

const pathes = [
    {path: '/admin/', name: 'Панель Администратора'},
    {path: '/admin/companies', name: 'Компании'},
    {path: '/admin/reviews', name: 'Отзывы'},
    {path: '/admin/images', name: 'Картинки'},
    {path: '/admin/articles', name: 'Статьи'},
    {path: '/admin/videos', name: 'Видео'},
    {path: '/admin/seo', name: 'SEO параметры'},
    {path: '/admin/headers', name: 'Заголовки'},
];

const SideBar = () => {
    const LinksArray = pathes.map(item => <SideBarItem path={item.path} name={item.name} key={item.path}/>)
    return (
        <nav className='b-dark side-bar navbar-dark'>
            {LinksArray}
        </nav>
    )
}

export default SideBar;
