import {setTableItemCreate} from "../../admin-actions/table/tableItemCreateActions";

const createCheckboxToggle = (useDispatch, fieldToDispatch = 'is_published') => {
    const dispatch = useDispatch();
    return (data) => (e) => {
        const obj = {...data};
        obj[fieldToDispatch] = Number(e.target.checked);
        dispatch(setTableItemCreate(obj))
    }
}

export default createCheckboxToggle;
