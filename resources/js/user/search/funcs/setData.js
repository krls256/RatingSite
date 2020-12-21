function setData (data) {
    if(+this.state.data.counter < +data.counter) {
        this.setState(() => ({data}));
        if(data.response.length !== 0) {
            this.setActive(0)
        } else {
            this.setActive(null)
        }
    }
}

export default setData;
