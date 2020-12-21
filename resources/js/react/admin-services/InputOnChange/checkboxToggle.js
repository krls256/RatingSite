const checkboxToggle = (useDispatch, actionToDispatch, fieldToDiapatch = 'is_published') => {
    const dispatch = useDispatch();
    return (data) => (e) => {
        const obj = {...data};
        obj[fieldToDiapatch] = Number(e.target.checked);
        dispatch(actionToDispatch(obj))
    }
}

export default checkboxToggle;
