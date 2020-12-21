import {combineReducers} from 'redux';
import companiesReducer from "./companies/companiesReducer";
import apiTokenReducer from "./tokens/apiTokenReducer";
import companiesCurrentPageReducer from "./appState/currentPageReducer";
import lastPageReducer from "./appState/lastPageReducer";
import companyEditReducer from "./companies/companyEditReducer";
import csrfTokenReducer from "./tokens/csrfTokenReducer";
import errorsMessageReducer from "./appState/errorsMessageReducer";
import isLoadngReducer from "./appState/isLoadingReducer";
import successMessageReducer from "./appState/successMessageReducer";
import reviewsReducer from "./reviews/reviewsReducer";
import reviewEditReducer from "./reviews/reviewEditReducer";
import imagesReducer from "./images/imagesReducer";
import companiesShortListReducer from "./companies/companiesShortListReducer";
import imagesCommandLineReducer from "./images/imagesCommandLineReducer";
import articlesReducer from "./articles/articlesReducer";
import articleEditReducer from "./articles/articleEditReducer";
import videosReducer from "./videos/videosReducer";
import videosEditReducer from "./videos/videosEditReducer";
import reviewAnswersReducer from "./reviewAnswers/reviewAnswersReducer";
import reviewsAnswerEditReducer from "./reviewAnswers/reviewAnswerEditReducer";
import userMessagesReducer from "./userMessages/userMessagesReducer";
import userMessageEditReducer from "./userMessages/userMessageEditReducer";
import seoReducer from "./seo/seoReducer";
import seoEditReducer from "./seo/seoEditReducer";
import headersReducer from "./headers/headersReducer";
import headerEditReducer from "./headers/headerEditReducer";


export default combineReducers({
    errorsMessage: errorsMessageReducer,
    successMessage: successMessageReducer,
    isLoading: isLoadngReducer,

    apiToken: apiTokenReducer,
    csrfToken: csrfTokenReducer,

    currentPage: companiesCurrentPageReducer,
    lastPage: lastPageReducer,

    companies: companiesReducer,
    companiesShortList: companiesShortListReducer,
    companyEdit: companyEditReducer,

    reviews: reviewsReducer,
    reviewEdit: reviewEditReducer,

    images: imagesReducer,
    imagesCommandLine: imagesCommandLineReducer,

    articles: articlesReducer,
    articleEdit: articleEditReducer,

    videos: videosReducer,
    videoEdit: videosEditReducer,

    userMessages: userMessagesReducer,
    userMessageEdit: userMessageEditReducer,

    reviewAnswers: reviewAnswersReducer,
    reviewAnswerEdit: reviewsAnswerEditReducer,

    seo: seoReducer,
    seoEdit: seoEditReducer,

    headers: headersReducer,
    headerEdit: headerEditReducer
})
