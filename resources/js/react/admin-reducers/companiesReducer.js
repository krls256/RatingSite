const companiesReducer = (state = {}, action) => {
    switch (action.type) {
        case "companies/addCompaniesPage": {
            const key = action.key;
            const payload = action.payload;
            const newState = {...state};
            newState[key] = payload;
            return newState;
        } break;
        default: return state; break;
    }
}

export default companiesReducer;
