import React from 'react';
import {useDispatch} from "react-redux";
import Checkbox from "../Checkbox/Checkbox";
import checkboxToggleImages from "../../admin-services/InputOnChange/checkboxToggleImages";
import checkboxToggleImages2 from "../../admin-services/InputOnChange/checkboxToggleImages2";
import {updateImagePage} from "../../admin-actions/imagesActions";

const ImageItem = ({data, index, pageIndex}) => {
    const {image_link, company_name, is_published, is_on_company_page} = data;
    return (
        <div className='image-item' data-src={image_link}>
            <img src={image_link} alt="Изображение из отзывов" className='image-item__img' />
            <ul className="image-item__list">
                <li className="image-item__list-item" key={`${image_link}-name`}>{company_name}</li>
                <li className="image-item__list-item" key={`${image_link}-ch1`}>
                    <Checkbox label={'Опубликовано'}
                              value={is_published}
                              onChange={checkboxToggleImages(useDispatch, updateImagePage)(pageIndex, index, data)}/>
                </li>
                <li className="image-item__list-item" key={`${image_link}-ch2`}>
                    <Checkbox label={'На странице компании'}
                              value={is_on_company_page}
                              onChange={checkboxToggleImages2(useDispatch, updateImagePage)(pageIndex, index, data)}/>
                </li>
            </ul>
        </div>
    )
}

export default ImageItem;
