import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Input from "../../FormComponent/Input";
import Textarea from "../../FormComponent/Textarea";
import generalInputOnChange from "../../../admin-services/InputOnChange/generalInputOnChenge";
import editSelector from "../../../admin-helpers/editSelector";
import Checkbox from "../../FormComponent/Checkbox/Checkbox";
import checkboxToggle from "../../../admin-services/InputOnChange/checkboxToggle";
import VideoMainAbstract from "../VideosMainAbstract";

const VideoMain = () => {
    const {tableItemEdit: videoEdit} = useSelector(editSelector)
    return <VideoMainAbstract data={videoEdit} inputChange={generalInputOnChange} checkboxChange={checkboxToggle}/>
}

export default VideoMain;
