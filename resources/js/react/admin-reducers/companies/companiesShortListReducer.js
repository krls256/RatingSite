const companiesShortListReducer = (state = [], action) => {
    switch (action.type) {
        case 'companiesShortList/setShortList': return action.payload;
        default: return state;
    }
}

export default companiesShortListReducer;
