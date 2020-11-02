const companyEditReducer = (state = null, action) => {
    switch (action.type) {
        case 'companyEdit/update':
            return action.payload;
            break;
        case 'companyEdit/reset':
            return null;
            break;
        default:
            return state;
    }
}

export default companyEditReducer;
