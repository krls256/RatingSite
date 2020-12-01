import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './admin-reducers';

import SideBar from "./admin-components/Side/SideBar";
import CompaniesTable from "./admin-components/Companies/CompaniesTable";
import ReviewsTable from "./admin-components/Reviews/ReviewsTable";
import ImagesPage from "./admin-components/Images/ImagesPage";
import ArticlesTable from "./admin-components/Articles/ArticlesTable";
import VideosTable from "./admin-components/Videos/VideosTable";
import SEOTable from "./admin-components/SEO/SEOTable";
import HeadersTable from "./admin-components/Headers/HeadersTable";
import MainPage from "./admin-components/MainPage";
import Setup from "./admin-components/Setup";
import CompanyEdit from "./admin-components/Companies/CompanyEdit";
import LoadingScreen from "./admin-components/LoadingScreen";
import ReviewEdit from "./admin-components/Reviews/ReviewsEdit";
import ArticleEdit from "./admin-components/Articles/ArticleEdit";
import VideosEdit from "./admin-components/Videos/VideosEdit";

function App() {
       return (
        <Provider store={createStore(reducers, applyMiddleware(thunkMiddleware))}>
            <Router>
                <Setup>
                    <div className="main">
                        <Route path='/admin' component={SideBar}/>
                        <Route path='/admin' component={LoadingScreen}/>
                        <Route path='/admin' exact component={MainPage}/>
                        <Route path='/admin/companies' exact component={CompaniesTable}/>
                        <Route path='/admin/companies/:id/edit' exact component={CompanyEdit}/>
                        <Route path='/admin/reviews' exact component={ReviewsTable}/>
                        <Route path='/admin/reviews/:id/edit' component={ReviewEdit}/>
                        <Route path='/admin/images' component={ImagesPage}/>
                        <Route path='/admin/articles' exact component={ArticlesTable}/>
                        <Route path='/admin/articles/:id/edit' component={ArticleEdit}/>
                        <Route path='/admin/videos' exact component={VideosTable}/>
                        <Route path='/admin/videos/:id/edit' component={VideosEdit}/>
                        <Route path='/admin/seo' component={SEOTable}/>
                        <Route path='/admin/headers' component={HeadersTable}/>
                    </div>
                </Setup>
            </Router>
        </Provider>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
