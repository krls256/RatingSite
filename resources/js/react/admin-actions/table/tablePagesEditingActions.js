import {substituteTablePages} from "./tablePagesActions";
import deepCopy from "../../admin-helpers/deepCopy";

const startPagesEditing = () => (dispatch, getState) => {
    const {tablePages} = getState();
    dispatch(startEditingCore(deepCopy(tablePages)));
}

const startEditingCore = (payload) => ({type: 'tablePageEditing/startEdit', payload});
const stopEditingCore = () => ({type: 'tablePageEditing/stopEdit'})

const commitPagesEditing = () => ({type: 'tablePageEditing/stopEdit'});

const cancelPagesEditing = () => (dispatch, getState) => {
    const {tablePagesEditing : {shallowCopy}} = getState();
    dispatch(substituteTablePages(shallowCopy));
    dispatch(stopEditingCore());
}

export {
    startPagesEditing,
    cancelPagesEditing,
    commitPagesEditing
}
