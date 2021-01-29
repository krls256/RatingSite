import React, {useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {formDataUpdate} from "../../../admin-actions/formData/formDataActions";

const ArticleFilesCreate = () => {
    const mainInput = useRef(null);
    const multiInput = useRef(null);
    const dispatch = useDispatch();

    const [dynamicFormData, setDynamicFormData] = useState(new FormData())

    const onChange = (field, input) => () => {
        dynamicFormData.delete(field)
        for(const i in input.current.files) {
            if(!isNaN(Number(i))) {
                const key = field === 'main' ? field : field + `[${i}]`
                dynamicFormData.append(key, input.current.files[i])
            }
        }
        dispatch(formDataUpdate(dynamicFormData))
    }



    return (
        <div className='card p-3'>
            <div className="form-group">
                <label htmlFor='main_photo'>Главная Фотография</label>
                <input type="file"
                       accept="image/*"
                       id='main_photo'
                       className='form-control input input--file'
                       onChange={onChange('main', mainInput)}
                       ref={mainInput}
                />
            </div>
            <div className="form-group">
                <label htmlFor='other_photos'>Другие Фотографии</label>
                <input type="file"
                       accept="image/*"
                       id='other_photos'
                       multiple
                       className='form-control input input--file'
                       onChange={onChange('other-photos', multiInput)}
                       ref={multiInput}
                />
            </div>
        </div>
    )
}

export default ArticleFilesCreate
