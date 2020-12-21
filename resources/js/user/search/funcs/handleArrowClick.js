function handleArrowClick (e) {
    const {active, focus, workingList, query} = this.state;
    if(focus && active !== null && e.keyCode === 40) {
        this.isTypingFalse();
        const result = (active + 1) % (workingList.length);
        this.setState({active: result, query: workingList[result].title})
    }else if(focus && active !== null && e.keyCode === 38) {
        this.isTypingFalse();
        const result = (active - 1) === -1 ? workingList.length - 1 : active - 1;
        this.setState({active: result, query: workingList[result].title})
    } else if(focus && active !== null && e.keyCode === 13) {
        active === 0 ? document.location.href = `/search/${query}` : document.location.href = workingList[active].link;
    } else {
        this.isTypingTrue();
    }
}

export default handleArrowClick
