import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './admin-reducers'

import SideBar from "./admin-companents/SideBar";
import CompaniesTable from "./admin-companents/CompaniesTable";
import ReviewsTable from "./admin-companents/ReviewsTable";
import ImagesPage from "./admin-companents/ImagesPage";
import ArticlesTable from "./admin-companents/ArticlesTable";
import VideosTable from "./admin-companents/VideosTable";
import SEOTable from "./admin-companents/SEOTable";
import HeadersTable from "./admin-companents/HeadersTable";
import MainPage from "./admin-companents/MainPage";

function App() {
    return (
        <Provider store={createStore(reducers)}>
            <Router>
                <div className="main">
                    <Route path='/admin' component={SideBar}/>
                    <Route path='/admin' exact component={MainPage}/>
                    <Route path='/admin/companies' component={CompaniesTable}/>
                    <Route path='/admin/reviews' component={ReviewsTable}/>
                    <Route path='/admin/images' component={ImagesPage}/>
                    <Route path='/admin/articles' component={ArticlesTable}/>
                    <Route path='/admin/videos' component={VideosTable}/>
                    <Route path='/admin/seo' component={SEOTable}/>
                    <Route path='/admin/headers' component={HeadersTable}/>
                </div>
            </Router>
        </Provider>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
