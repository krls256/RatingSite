const companyEditReducer = (state = null, action) => {
    switch (action.type) {
        case 'companyEdit/update':
            return action.payload;
        case 'companyEdit/reset':
            return null;
        default:
            return state;
    }
}

export default companyEditReducer;
