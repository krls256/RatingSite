const tablePagesReducer = (state = {}, action) => {
    switch (action.type) {
        case 'tablePages/addPage':
            const newState = {...state};
            const {payload, key} = action;
            newState[key] = payload;
            return newState;
        case 'tablePages/reset': return {};
        case 'tablePages/delete': {
            const newState = {...state};
            delete newState[action.payload];
            return newState
        }
        default: return state;
    }
}

export default tablePagesReducer;
