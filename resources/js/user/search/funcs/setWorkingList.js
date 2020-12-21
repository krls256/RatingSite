function setWorkingList (){
    this.setState(({query, isTyping, data: {response}, workingList}) => {
        if(!isTyping) {
            return {
                workingList
            }
        }
        if(query === '')
            return {
                workingList: []
            };
        return {
            workingList: [{
                id: 666,
                link: `/search/${query}`,
                slug: query,
                title: query
            }, ...response]
        }
    })
}

export default setWorkingList;
