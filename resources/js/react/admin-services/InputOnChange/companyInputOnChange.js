import inputOnChange from "./inputOnChange";
import {updateCompanyEdit} from "../../admin-actions/companyEditActions";

const companyInputOnChange = (useDispatch) => {
    return inputOnChange(useDispatch, updateCompanyEdit)
}

export default companyInputOnChange;
