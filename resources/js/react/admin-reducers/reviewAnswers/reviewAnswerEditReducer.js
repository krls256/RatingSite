const reviewsAnswerEditReducer = (state = null, action) => {
    switch (action.type) {
        case 'reviewAnswerEdit/update': return action.payload;
        case 'reviewAnswerEdit/reset': return null;
        default: return state;
    }
}

export default reviewsAnswerEditReducer;
