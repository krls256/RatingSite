import React, {Fragment, useEffect} from 'react'
import {setApiToken} from '../../admin-actions/apiTokenActions'
import {useDispatch} from "react-redux";


const ApiToken = ({children}) => {
    const dispatch = useDispatch();
    useEffect(() => {
        const apiToken = document
            .querySelector('meta[name="api-token"]')
            .getAttribute('content')
        dispatch(setApiToken(apiToken))
    })
    return (
        <Fragment>
            {children}
        </Fragment>
    )
}
export default ApiToken
