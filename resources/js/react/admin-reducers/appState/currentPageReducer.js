const currentPageReducer = (state = 1, action) => {
    switch (action.type) {
        case "currentPage/setCurrentPage": return action.payload;
        case "currentPage/resetCurrentPage": return 1;
        default: return state;
    }
}

export default currentPageReducer;
