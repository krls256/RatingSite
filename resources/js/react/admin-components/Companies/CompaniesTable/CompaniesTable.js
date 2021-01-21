import React, {Fragment} from 'react'

import CompanyItem from "../CompanyItem";
import Spinner from "../../GeneralComponents/Spinner";
import Pagination from "../../GeneralComponents/Pagination";
import Table from "../../GeneralComponents/Table";
import FilterBar from "../../GeneralComponents/FilterBar";
import useUniversalTableData from "../../../admin-hoooks/useUniversalTableData";

const CompaniesTable = () => {
    const companyPage = useUniversalTableData('companies');

    const content = companyPage === undefined ? <Spinner /> :
        (
            <Fragment>
                <Table fields={['ID', 'Название', 'Средний рейтинг', 'Ссылки']}
                       head_key={'companies'}
                       key_field={'company_name'}
                       component={CompanyItem}
                       id_key='company_id'
                       items={companyPage} />
                <Pagination />
            </Fragment>
        )

    return (
        <section>
            <FilterBar orderBy={orderBy} filters={filters}/>
            {content}
        </section>

    )
}


export default CompaniesTable;

const orderBy = [
    {
        label: 'Сортировка: ID компании',
        value: 'company_id'
    },
    {
        label: 'Сортировка: Средний рейтинг',
        value: 'company_average_mark'
    },
    {
        label: 'Сортировка: Количество отзывов',
        value: 'company_quantity_review'
    },
    {
        label: 'Сортировка: Название компании',
        value: 'company_name'
    }
];

const filters = [
    {
        field: 'company_average_mark',
        options: [

            {
                label: 'Без фильтра среднего балла',
                value: 'null,null'
            },
            {
                label: 'Средний балл меньше 4',
                value: 'less-equal,4'
            },
            {
                label: 'Средний балл меньше 3',
                value: 'less-equal,3'
            },
            {
                label: 'Средний балл больше 3',
                value: 'more-equal,3'
            },
        ]

    },
    {
        field: 'is_published',
        options: [

            {
                label: 'Без фильтра публикации',
                value: 'null,null'
            },
            {
                label: 'Опубликовано',
                value: 'equal,1'
            },
            {
                label: 'Не опубликовано',
                value: 'equal,0'
            },
        ]

    }
]
