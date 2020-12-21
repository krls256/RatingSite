const reviewAnswersReducer = (state = {}, action) => {
    switch (action.type) {
        case 'reviewAnswers/addPage': {
            const newState = {...state};
            const {key, payload} = action;
            newState[key] = payload;
            return newState;
        }
        default: return state;
    }
}

export default reviewAnswersReducer;
