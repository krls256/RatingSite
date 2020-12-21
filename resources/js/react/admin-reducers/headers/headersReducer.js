const headersReducer = (state = {}, action) => {
    switch (action.type) {
        case 'headers/addPage':
            const key = action.key;
            const payload = action.payload;
            const newState = {...state};
            newState[key] = payload;
            return newState;
        default: return state;

    }
}

export default headersReducer;
