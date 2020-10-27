const getNearPage = (currentPage, lastPage) => {
    const paginateWidth = 3;
    const pageArr = []
    const lowestPage = currentPage - paginateWidth;
    if(lowestPage > 1) {
        pageArr.push(0)
    }
    for(let i = lowestPage; i <= Math.min(currentPage + paginateWidth, lastPage); i++) {
        if(i > 0)
            pageArr.push(i)
    }
    if(currentPage + 3 < lastPage) {
        pageArr.push(0);
    }
    return pageArr;
}

export default getNearPage;
