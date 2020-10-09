import React from 'react';
import {Link} from 'react-router-dom'
const SideBar = () => {
    return (
        <nav className='bg-dark side-bar navbar-dark'>
            <Link to={'/admin/'} className={'navbar-brand'}>Панель Администратора</Link>
            <Link to={'/admin/companies'} className={'navbar-brand'}>Компании</Link>
            <Link to={'/admin/reviews'} className={'navbar-brand'}>Отзывы</Link>
            <Link to={'/admin/images'} className={'navbar-brand'}>Картинки</Link>
            <Link to={'/admin/articles'} className={'navbar-brand'}>Статьи</Link>
            <Link to={'/admin/videos'} className={'navbar-brand'}>Видео</Link>
            <Link to={'/admin/seo'} className={'navbar-brand'}>SEO параметры</Link>
            <Link to={'/admin/headers'} className={'navbar-brand'}>Заголовки</Link>
        </nav>
    )
}

export default SideBar;
