import inputOnChange from "./inputOnChange";
import {setTableItemEdit} from "../../admin-actions/table/tableItemEditActions";

const generalInputOnChange = (useDispatch) =>  {
    return inputOnChange(useDispatch, setTableItemEdit)
}

export default generalInputOnChange;
