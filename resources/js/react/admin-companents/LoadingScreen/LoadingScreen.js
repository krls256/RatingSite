import React from 'react';
import {connect} from 'react-redux';
import Spinner from "../Spinner";

const LoadingScreen = ({isLoading}) => {
    if (isLoading) {
        return (
            <div className="loading-screen">
                <Spinner/>
            </div>
        )

    }
    return null;
}
const mapStateToProps = ({isLoading}) => ({isLoading})

export default connect(mapStateToProps)(LoadingScreen);
