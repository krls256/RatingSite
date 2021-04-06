import React, {useEffect} from 'react';
import Select from "../../FormComponent/Select";
import {useDispatch} from "react-redux";
import {
    resetFilterAttributes,
    setFilterAttributes
} from "../../../admin-actions/filterAttributes/filterAttributesActions";
import {resetTablePages} from "../../../admin-actions/table/tablePagesActions";
import {useLocation} from 'react-router-dom';

const FilterBar = ({orderBy, filters = [], createButton = false, additionalComponent : AdditionalComponent = null}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setFilterAttributes('orderBy', orderBy[0].value))
        dispatch(setFilterAttributes('order', order[0].value))

        return () => dispatch(resetFilterAttributes());
    }, [])



    const onChangeOrderBy = (e) => {
        dispatch(setFilterAttributes('orderBy', e.target.value))
    }

    const onChangeOrder = (e) => {
        dispatch(setFilterAttributes('order', e.target.value))
    }
    return (
        <aside className='filter-bar'>
            <button className="btn b-dark c-white filter-bar__button"
                    onClick={() => dispatch(resetTablePages())} aria-label='Применить фильтры'>Применить фильтры
            </button>
            <div className="filter-bar__form-wrapper">
                <Select id='orderBy' options={orderBy} onChange={onChangeOrderBy} />
            </div>
            <div className="filter-bar__form-wrapper">
                <Select id='orderBy' options={order} onChange={onChangeOrder} />
            </div>
            {
                filters.map(({field, options})=> {
                    const onChangeFilter = (e) => {
                        dispatch(setFilterAttributes(field, e.target.value))
                    }
                    return (
                        <div className="filter-bar__form-wrapper" key={field}>
                            <Select options={options} onChange={onChangeFilter}/>
                        </div>
                    )
                })
            }
            {
                createButton ? <CreateButton /> : null
            }
            {
                AdditionalComponent
            }
        </aside>
    )
}

export default FilterBar;

const CreateButton = () => {
    const {pathname} = useLocation();
    return (
        <a className="btn b-dark c-white filter-bar__button" href={`${pathname}/create`} aria-label='Создать'>
            Создать
        </a>
    )
}

const order = [
    {
        label: 'По Возростанию',
        value: 'asc'
    }, {
        label: 'По убыванию',
        value: 'desc'
    }
]

