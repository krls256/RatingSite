import React from 'react';
import {connect, useDispatch} from 'react-redux';
import {updateCompanyMain} from '../../admin-actions/companyEditActions';

const CompanySubmit = ({csrfToken, id}) => {
    const dispatch = useDispatch()
    const onClick = (e) => {
        e.preventDefault();
        dispatch(updateCompanyMain(id))
    }
    return (
        <div className='card m-3 p-3 col-3 offset-3'>
            <input type="hidden" name='_method' value='PATCH'/>
            <input type="hidden" name='_token' value={csrfToken}/>
            <button type='submit' onClick={onClick} className='btn btn-success'>Сохранить</button>
        </div>
    )
}
const mapStateToProps = ({csrfToken, apiToken}) => ({csrfToken, apiToken})
export default connect(mapStateToProps)(CompanySubmit);
