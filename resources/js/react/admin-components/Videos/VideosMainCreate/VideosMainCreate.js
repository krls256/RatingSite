import React from 'react';
import {useSelector} from "react-redux";
import createSelector from "../../../admin-helpers/createSelector";
import createInputOnChange from "../../../admin-services/InputOnChange/createInputOnChenge";
import VideoMainAbstract from "../VideosMainAbstract";
import createCheckboxToggle from "../../../admin-services/InputOnChange/createCheckboxToggle";

const VideosMainCreate = () => {
    const {tableItemCreate} = useSelector(createSelector)
    return <VideoMainAbstract data={tableItemCreate} inputChange={createInputOnChange}
                              checkboxChange={createCheckboxToggle} />
}

export default VideosMainCreate
