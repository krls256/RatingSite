import React from 'react';
import {useParams} from 'react-router-dom'

const CompanyEdit = () => {
    const { id } = useParams();
    return (
        <h1>Company Edit id={id}</h1>
    )
}

export default CompanyEdit;
