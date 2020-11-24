const checkboxToggleImages = (useDispatch, actionToDispatch) => {
    const dispatch = useDispatch();
    return (pageIndex, index, data) => (e) => {
        const obj = {...data};
        obj['is_published'] = Number(e.target.checked);
        dispatch(actionToDispatch(pageIndex, index, obj))
    }
}

export default checkboxToggleImages;
