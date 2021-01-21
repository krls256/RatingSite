import inputOnChange from "./inputOnChange";
import {setTableItemCreate} from "../../admin-actions/table/tableItemCreateActions";

const createInputOnChange = (useDispatch) => {
    return inputOnChange(useDispatch, setTableItemCreate)
}

export default createInputOnChange;
