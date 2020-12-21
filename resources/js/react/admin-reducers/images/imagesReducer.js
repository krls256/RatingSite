const imagesReducer = (state = {}, action) => {
    switch (action.type) {
        case 'images/addImagesPage': {
            const {key, payload} = action;
            const newState = {...state};
            newState[key] = payload
            return newState;
        }
        case 'images/removeImagesPage': {
            const {key} = action;
            const newState = {...state};
            delete newState[key];
            return newState;
        }
        case 'images/updateImagesPage': {
            const {key, payload, pageKey} = action;
            const newState = {...state};
            newState[pageKey][key] = payload;
            return newState;
        }
        case 'images/resetImages': return {};
        default:
            return state
    }
}

export default imagesReducer;
