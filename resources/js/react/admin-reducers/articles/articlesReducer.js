const articlesReducer = (state = {}, action) => {
    switch (action.type) {
        case 'articles/addPage': {
            const newState = {...state};
            const {key, payload} = action;
            newState[key] = payload;
            return newState;
        }
        default: return state;
    }
}

export default articlesReducer;
