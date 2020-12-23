import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Textarea from "../../FormComponent/Textarea";
import generalInputOnChange from "../../../admin-services/InputOnChange/generalInputOnChenge";
import editSelector from "../../../admin-helpers/editSelector";

const HeadersMain = () => {
    const {tableItemEdit: headerEdit} = useSelector(editSelector);

    return (
        <div className="page-wrapper card mt-3 p-3">
            <h2>{headerEdit.header_key}</h2>
            {
                textarias.map(({field, label}) =>
                    <Textarea field={field}
                              label={label}
                              ReduxObj={headerEdit}
                              onChange={generalInputOnChange(useDispatch)(field, headerEdit)}
                              key={field} />)
            }
        </div>
    )
}

export default HeadersMain;

const textarias = [
    {
        'field': 'header_value',
        'label': 'Значения заголовка'
    },
    {
        'field': 'header_description',
        'label': 'Описание заголовка'
    }
]
