const currentPageReducer = (state = 1, action) => {
    switch (action.type) {
        case "currentPage/setCurrentPage": return action.payload; break;
        case "currentPage/resetCurrentPage": return 1; break;
        default: return state; break;
    }
}

export default currentPageReducer;
