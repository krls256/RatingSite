import inputOnChange from "./inputOnChange";
import {setArticleEdit} from "../../admin-actions/articlesEditAction";

const articleInputOnChange = (useDispatch) => {
    return inputOnChange(useDispatch, setArticleEdit)
}

export default articleInputOnChange;
