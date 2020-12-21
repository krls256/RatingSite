import ReactDOM from "react-dom";
import React from "react";
import Search from "./user/search";

if (document.getElementById('search')) {
    ReactDOM.render(<Search />, document.getElementById('search'));
}
