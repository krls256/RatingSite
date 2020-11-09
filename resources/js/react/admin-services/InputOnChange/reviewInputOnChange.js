import inputOnChange from "./inputOnChange";
import {updateReviewEdit} from "../../admin-actions/reviewsEditActions";

const reviewInputOnChange = (useDispatch) => {
    return inputOnChange(useDispatch, updateReviewEdit)
}

export default reviewInputOnChange;
