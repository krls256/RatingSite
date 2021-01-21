import React, {Fragment} from 'react'
import Spinner from "../../GeneralComponents/Spinner";
import Pagination from "../../GeneralComponents/Pagination/Pagination";
import Table from "../../GeneralComponents/Table";
import HeadersItem from "../HeadersItem";
import useUniversalTableData from "../../../admin-hoooks/useUniversalTableData";
import FilterBar from "../../GeneralComponents/FilterBar";

const HeadersTable = () => {
    const headersPage = useUniversalTableData('headers');

    const content = headersPage === undefined ? <Spinner /> : (
        <Fragment>
            <Table component={HeadersItem}
                   fields={['ID', 'Строковый ID', 'Значение', 'Описание', 'Ссылки']}
                   head_key={'headers'}
                   key_field={'header_key'}
                   id_key='header_id'
                   items={headersPage} />
            <Pagination />
        </Fragment>
    )

    return (
        <section>
            <FilterBar orderBy={orderBy}/>
            {content}
        </section>
    )
}

export default HeadersTable;

const orderBy = [
    {
        label: 'Сортировка: ID заголовка',
        value: 'header_id'
    },
    {
        label: 'Сортировка: Ключ заголовка',
        value: 'header_key'
    },
    {
        label: 'Сортировка: Дата создания',
        value: 'created_at'
    }
];
