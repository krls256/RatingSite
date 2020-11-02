import {updateCompanyEdit} from "../admin-actions/companyEditActions";

const inputOnChange = (useDispatch) => {
    const dispatch = useDispatch();
    return (field, company) => (e) => {
        const obj = {...company};
        obj[field] = e.target.value;
        dispatch(updateCompanyEdit(obj))
    }
}

export default inputOnChange;
