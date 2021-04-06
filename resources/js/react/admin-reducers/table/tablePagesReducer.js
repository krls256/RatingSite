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
        case 'tablePages/toggleIsPublish': {
            const newState = {...state};
            const toChange = newState[action.page][action.index];
            toChange.is_published = !toChange.is_published
            return newState;
        }
        case 'tablePages/substitute': return action.payload
        default: return state;
    }
}

export default tablePagesReducer;
