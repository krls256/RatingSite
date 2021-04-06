function deepCopy(o) {
    if(typeof(o) != "object") {
        return o;
    }

    if(!o) {
        return o;
    }

    const r = (o instanceof Array) ? [] : {};
    for(const i in o) {
        if(o.hasOwnProperty(i)) {
            r[i] = deepCopy(o[i]);
        }
    }
    return r;
}


export default deepCopy;
