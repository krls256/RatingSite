const errorsMessageReducer = (state = {}, action) => {
    switch (action.type) {
        case 'errorsMessage/updateErrors': return action.payload;
        case 'errorsMessage/resetErrors': return {}
        default: return state
    }
}

export default errorsMessageReducer;
