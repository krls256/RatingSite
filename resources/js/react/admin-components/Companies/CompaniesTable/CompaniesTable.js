import React, {Fragment} from 'react'

import CompanyItem from "../CompanyItem";
import Spinner from "../../GeneralComponents/Spinner";
import Pagination from "../../GeneralComponents/Pagination";
import Table from "../../GeneralComponents/Table";
import FilterBar from "../../GeneralComponents/FilterBar";
import useUniversalTableData from "../../../admin-hoooks/useUniversalTableData";
import {resetTablePages} from "../../../admin-actions/table/tablePagesActions";

const CompaniesTable = () => {
    const companyPage = useUniversalTableData('companies');

    const content = companyPage === undefined ? <Spinner /> :
        (
            <Fragment>
                <Table fields={['ID', 'Название', 'Средний рейтинг', 'Ссылки']}
                       head_key={'companies'}
                       key_field={'company_name'}
                       component={CompanyItem}
                       items={companyPage} />
                <Pagination />
            </Fragment>
        )

    return (
        <div>
            <FilterBar orderBy={orderBy} apply={resetTablePages} />
            {
                content
            }
        </div>

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
