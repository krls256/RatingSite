import React from 'react'
import {connect} from "react-redux";

const CompaniesTable = ({companies}) => {
    console.log(companies);
   return (
       <h1>CompaniesTable</h1>
   )
}
const mapStateToProps = ({companies}) => ({companies});

export default connect(mapStateToProps, null)(CompaniesTable);
