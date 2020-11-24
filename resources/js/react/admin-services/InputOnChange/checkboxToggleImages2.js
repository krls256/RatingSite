const checkboxToggleImages2 = (useDispatch, actionToDispatch) => {
    const dispatch = useDispatch();
    return (pageIndex, index, data) => (e) => {
        const obj = {...data};
        obj['is_on_company_page'] = Number(e.target.checked);
        dispatch(actionToDispatch(pageIndex, index, obj))
    }
}

export default checkboxToggleImages2;
