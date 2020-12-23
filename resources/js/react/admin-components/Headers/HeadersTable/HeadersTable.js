import React from 'react'
import Spinner from "../../GeneralComponents/Spinner";
import Pagination from "../../GeneralComponents/Pagination/Pagination";
import Table from "../../GeneralComponents/Table";
import HeadersItem from "../HeadersItem";
import useUniversalTableData from "../../../admin-hoooks/useUniversalTableData";

const HeadersTable = () => {
    const headersPage = useUniversalTableData('headers');
    if (headersPage === undefined) {
        return <Spinner />
    }
    return (
        <section>
            <Table component={HeadersItem}
                   fields={['ID', 'Строковый ID', 'Значение', 'Описание', 'Ссылки']}
                   head_key={'headers'}
                   key_field={'header_key'}
                   items={headersPage} />
            <Pagination />
        </section>
    )
}

export default HeadersTable;
