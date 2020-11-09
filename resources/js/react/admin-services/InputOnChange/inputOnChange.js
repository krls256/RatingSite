const inputOnChange = (useDispatch, actionToDispatch) => {
    const dispatch = useDispatch();
    return (field, data) => (e) => {
        const obj = {...data};
        obj[field] = e.target.value;
        dispatch(actionToDispatch(obj))
    }
}

export default inputOnChange;
