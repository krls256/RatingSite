import React, {Fragment, useEffect} from 'react'
import {setApiToken} from '../../admin-actions/apiTokenActions'
import {setCsrfToken} from  '../../admin-actions/csrfTokenActon'
import {useDispatch} from "react-redux";
import {getShortList} from "../../admin-actions/companiesShortListActions";


const Setup = ({children}) => {
    const dispatch = useDispatch();
    useEffect(() => {
        const apiToken = document
            .querySelector('meta[name="api-token"]')
            .getAttribute('content')
        dispatch(setApiToken(apiToken))

        const csrfToken = document.querySelector('meta[name="csrf-token"]')
            .getAttribute('content')
        dispatch(setCsrfToken(csrfToken));

        dispatch(getShortList())
    })
    return (
        <Fragment>
            {children}
        </Fragment>
    )
}
export default Setup
