import inputOnChange from "./inputOnChange";
import {setVideoEdit} from "../../admin-actions/videoEditAction";

const videoInputOnChange = (useDispatch) => {
    return inputOnChange(useDispatch, setVideoEdit)
}

export default videoInputOnChange;
