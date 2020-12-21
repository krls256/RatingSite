const reviewsReducer = (state = {}, action) => {
    switch (action.type) {
        case 'reviews/addReviewsPage':
            const key = action.key;
            const payload = action.payload;
            const newState = {...state};
            newState[key] = payload;
            return newState;
        default: return state;

    }
}

export default reviewsReducer;
