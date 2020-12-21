const seoReducer = (state = {}, action) => {
    switch (action.type) {
        case 'seo/addPage':
            const key = action.key;
            const payload = action.payload;
            const newState = {...state};
            newState[key] = payload;
            return newState;
        default: return state;

    }
}

export default seoReducer;
