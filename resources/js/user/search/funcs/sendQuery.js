import sendQueryService from "../search-service/sendQuery";

function sendQuery() {
    const {query, counter, isTyping} = this.state;
    if(isTyping) {
        sendQueryService(query, counter)
            .then(r => {
                this.setData(r)
                this.setWorkingList();
            })
            .catch(e => console.log(e));
    }
}

export default sendQuery;
