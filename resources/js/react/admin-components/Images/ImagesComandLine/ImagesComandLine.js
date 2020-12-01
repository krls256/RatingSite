import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Select from "../../FormComponent/Select";
import {updateImagesCommandLine} from "../../../admin-actions/imagesCommandLineActions";
import {getImages, resetImages, updateImages} from "../../../admin-actions/imagesActions";
import {setCurrentPage} from "../../../admin-actions/currentPageActions";

const ImagesCommandLine = () => {
    const {companiesShortList, imagesCommandLine} = useSelector(selector);
    const [data, setData] = useState(imagesCommandLine);
    const dispatch = useDispatch();

    const onChange = (field) => (e) => {
        const newData = {...data}

        newData[field] = e.target.value;
        setData(newData);
    }

    const apply = () => {
        dispatch(updateImagesCommandLine(data))
        dispatch(resetImages())
        dispatch(getImages())
        dispatch(setCurrentPage(1))
    }

    const save = () => {
        dispatch(updateImages())
    }

    const shallowCopy = [...companiesShortList];
    shallowCopy.unshift({company_id: '', company_name: 'Без фильтра компании'})

    return (
        <nav className='image-command-line'>
            <button className="btn b-dark c-white mr-2 image-command-line__item" onClick={apply}>Применить фильтры</button>
            <Select id='company_id'
                    onChange={onChange('company_id')}
                    options={shallowCopy.map(({company_id, company_name}) => ({
                        label: company_name, value: company_id
                    }))} />
            <Select id='is_published'
                    onChange={onChange('is_published')}
                    options={isPublishedOptions} />
            <Select id='is_on_company_page'
                    onChange={onChange('is_on_company_page')}
                    options={isOnCompanyPageOptions} />
            <button className="btn b-dark c-white image-command-line__item"
                    onClick={save}>Сохранить</button>

        </nav>
    )
}

const selector = ({companiesShortList, imagesCommandLine}) => ({companiesShortList, imagesCommandLine})

export default ImagesCommandLine


const isPublishedOptions = [
    {value: '', label: 'Без фильтра публикации'},
    {value: 1, label: 'Опубликовано'},
    {value: 0, label: 'Не опубликовано'},
]

const isOnCompanyPageOptions = [
    {value: '', label: 'Без фильтра "На странице компании"'},
    {value: 1, label: 'На странице компании'},
    {value: 0, label: 'Не на странице компании'},
]
