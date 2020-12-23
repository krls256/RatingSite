const tablePagesReducer = (state = {}, action) => {
    switch (action.type) {
        case 'tablePages/addPage':
            const newState = {...state};
            const {payload, key} = action;
            newState[key] = payload;
            return newState;
        case 'tablePages/reset': return {};
        default: return state;
    }
}

export default tablePagesReducer;
