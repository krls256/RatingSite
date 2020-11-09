import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './admin-reducers';

import SideBar from "./admin-components/SideBar";
import CompaniesTable from "./admin-components/CompaniesTable";
import ReviewsTable from "./admin-components/ReviewsTable";
import ImagesPage from "./admin-components/ImagesPage";
import ArticlesTable from "./admin-components/ArticlesTable";
import VideosTable from "./admin-components/VideosTable";
import SEOTable from "./admin-components/SEOTable";
import HeadersTable from "./admin-components/HeadersTable";
import MainPage from "./admin-components/MainPage";
import ApiToken from "./admin-components/ApiToken";
import CompanyEdit from "./admin-components/CompanyEdit";
import LoadingScreen from "./admin-components/LoadingScreen";
import ReviewEdit from "./admin-components/ReviewsEdit";

function App() {
       return (
        <Provider store={createStore(reducers, applyMiddleware(thunkMiddleware))}>
            <Router>
                <ApiToken>
                    <div className="main">
                        <Route path='/admin' component={SideBar}/>
                        <Route path='/admin' component={LoadingScreen}/>
                        <Route path='/admin' exact component={MainPage}/>
                        <Route path='/admin/companies' exact component={CompaniesTable}/>
                        <Route path='/admin/companies/:id/edit' exact component={CompanyEdit}/>
                        <Route path='/admin/reviews' exact component={ReviewsTable}/>
                        <Route path='/admin/reviews/:id/edit' component={ReviewEdit}/>
                        <Route path='/admin/images' component={ImagesPage}/>
                        <Route path='/admin/articles' component={ArticlesTable}/>
                        <Route path='/admin/videos' component={VideosTable}/>
                        <Route path='/admin/seo' component={SEOTable}/>
                        <Route path='/admin/headers' component={HeadersTable}/>
                    </div>
                </ApiToken>
            </Router>
        </Provider>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
