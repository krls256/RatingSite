import {setTableItemEdit} from "../../admin-actions/table/tableItemEditActions";

const checkboxToggle = (useDispatch, fieldToDispatch = 'is_published') => {
    const dispatch = useDispatch();
    return (data) => (e) => {
        const obj = {...data};
        obj[fieldToDispatch] = Number(e.target.checked);
        dispatch(setTableItemEdit(obj))
    }
}

export default checkboxToggle;
