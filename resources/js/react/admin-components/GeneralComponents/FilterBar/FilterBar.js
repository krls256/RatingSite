import React from 'react';
import Select from "../../FormComponent/Select";
import {useDispatch} from "react-redux";
import {setFilterAttributes} from "../../../admin-actions/filterAttributes/filterAttributesActions";

const FilterBar = ({orderBy, apply}) => {
    const dispatch = useDispatch();
    const onChange = (e) => {
        dispatch(setFilterAttributes('orderBy', e.target.value))
    }
    return (
        <aside className='filter-bar'>
            <button className="btn b-dark c-white filter-ban__button"
                    onClick={() => dispatch(apply())} aria-label='Применить фильтры'>Применить фильтры</button>
            <div className="filter-bar__form-wrapper">
                <Select id='orderBy' options={orderBy} onChange={onChange}/>
            </div>
        </aside>
    )
}

export default FilterBar
