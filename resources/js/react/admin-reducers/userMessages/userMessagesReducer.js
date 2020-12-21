const userMessagesReducer = (state = {}, action) => {
    switch (action.type) {
        case 'userMessages/addPage': {
            const newState = {...state};
            const {key, payload} = action;
            newState[key] = payload;
            return newState;
        }
        default: return state;
    }
}

export default userMessagesReducer;
