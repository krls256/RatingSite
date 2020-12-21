function onChange (e) {
    const {value} = e.target;
    this.setState(({counter}) => {
        return {query: value, counter: counter+1}
    })
    this.setWorkingList();
}

export default onChange;
