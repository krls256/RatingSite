const lastPageReducer = (state = 1, action) => {
    switch (action.type) {
        case 'lastPage/setLastPage':
            return action.payload;
            break;
        default:
            return state;
            break;
    }
}
 export default lastPageReducer;
