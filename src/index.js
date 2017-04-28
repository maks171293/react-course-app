import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import AboutPage from './components/about/AboutPage';
import HomePage from './components/home/HomePage';
import CoursesPage from './components/course/CoursesPage';
import App from './components/App';
import ManageCoursePage from './components/course/ManageCoursePage';
import {loadCourses} from './actions/courseActions';
import {loadAuthors} from './actions/authorActions';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={HomePage} />
        <Route path='about' component={AboutPage} />
        <Route path='courses' component={CoursesPage} />
        <Route path='course' component={ManageCoursePage} />
        <Route path='course/:id' component={ManageCoursePage} />
      </Route>
    </Router>
  </Provider>
, document.getElementById('app'));
