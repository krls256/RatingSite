import React from 'react';
import SideBarItem from "../SideBarItem";
import {resetImages} from "../../../admin-actions/images/imagesActions";
import {resetTablePages} from "../../../admin-actions/table/tablePagesActions";

const pathes = [
    {path: '/admin/', name: 'Панель Администратора', func: null},
    {path: '/admin/companies', name: 'Компании', func: resetTablePages},
    {path: '/admin/reviews', name: 'Отзывы', func: resetTablePages},
    {path: '/admin/images', name: 'Картинки', func: resetImages},
    {path: '/admin/articles', name: 'Статьи', func: resetTablePages},
    {path: '/admin/videos', name: 'Видео', func: resetTablePages},
    {path: '/admin/seo', name: 'SEO параметры', func: resetTablePages},
    {path: '/admin/headers', name: 'Заголовки', func: resetTablePages},
    {path: '/admin/review-answers', name: 'Комментарии', func: resetTablePages},
    {path: '/admin/user-messages', name: 'Сообщения от пользователей', func: resetTablePages},
];

const SideBar = () => {
    const LinksArray = pathes.map(item => <SideBarItem path={item.path} name={item.name} key={item.path}
                                                       func={item.func} />)
    return (
        <nav className='b-dark side-bar navbar-dark'>
            {LinksArray}
        </nav>
    )
}

export default SideBar;
