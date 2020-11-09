const checkboxToggle = (useDispatch, actionToDispatch) => {
    const dispatch = useDispatch();
    return (data) => (e) => {
        const obj = {...data};
        obj['is_published'] = Number(e.target.checked);
        dispatch(actionToDispatch(obj))
    }
}

export default checkboxToggle;
