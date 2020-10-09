const companiesReducer = (state = ['inspire'], action) => {
    if(action.type === "NEW") {
        return ['desire']
    }
    return state;
}

export default companiesReducer;
