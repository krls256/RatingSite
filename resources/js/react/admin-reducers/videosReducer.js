const videosReducer = (state = {}, action) => {
    switch (action.type) {
        case 'videos/addPage': {
            const newState = {...state};
            const {key, payload} = action;
            newState[key] = payload;
            return newState;
        }
        default: return state
    }
}

export default videosReducer;
