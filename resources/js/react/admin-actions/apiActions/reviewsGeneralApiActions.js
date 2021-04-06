import ReviewsService from "../../admin-services/api-services/ReviewsService";
import updateStart from "../../admin-helpers/updateStart";
import updateFinish from "../../admin-helpers/updateFinish";
import reactOnError from "../../admin-helpers/error-reaction";

const setReviewsPublishing = () => (dispatch, getState) => {
    const {tablePages, currentPage, apiToken} = getState();

    const publish = tablePages[currentPage].filter(item => item.is_published).map(item => item.review_id);
    const unpublish = tablePages[currentPage].filter(item =>  !item.is_published).map(item => item.review_id);
    const service = new ReviewsService(apiToken);

    updateStart(dispatch)

    service.publishChange(
        publish,
        unpublish
    )
        .then(res => {
            updateFinish(dispatch, res)
        })
        .catch(reactOnError(dispatch))
}



export {
    setReviewsPublishing
}
