import React from 'react'
import useTableData from "../../../admin-hoooks/useTableData";
import {getHeaders} from "../../../admin-actions/headers/headersActions";
import Spinner from "../../GeneralComponents/Spinner";
import Pagination from "../../GeneralComponents/Pagination/Pagination";
import Table from "../../GeneralComponents/Table";
import HeadersItem from "../HeadersItem";

const HeadersTable = () => {
    const headersPage = useTableData('headers', getHeaders);

    if(headersPage === undefined) {
        return <Spinner />
    }
    return (
        <section>
            <Table component={HeadersItem}
                   fields={['ID', 'Строковый ID', 'Значение', 'Описание','Ссылки']}
                   head_key={'headers'}
                   key_field={'header_key'}
                   items={headersPage} />
            <Pagination />
        </section>
    )
}

export default HeadersTable;
