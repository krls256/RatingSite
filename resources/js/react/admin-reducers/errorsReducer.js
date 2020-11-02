const errorsReducer = (state = {}, action) => {
    switch (action.type) {
        case 'errors/updateErrors': return action.payload;
        case 'errors/resetErrors': return {}
        default: return state
    }
}

export default errorsReducer;
