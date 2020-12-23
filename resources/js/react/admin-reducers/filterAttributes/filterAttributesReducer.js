const filterAttributesReducer = (state = {}, action) => {
    switch (action.type) {
        case 'filterAttributes/set': {
            const {key, payload} = action;
            const newState = {...state}
            newState[key] = payload;
            return newState;
        }
        case 'filterAttributes/reset': {
            return {}
        }
        default:
            return state;
    }
}

export default filterAttributesReducer;
