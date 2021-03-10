import React from 'react'
import {Link} from "react-router-dom";
import './course-editor.css'

import moduleReducer from "../../reducers/module-reducer";
import lessonReducer from "../../reducers/lesson-reducer";

import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux"

import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import TopicPills from "./topic-pills"
import {useParams} from "react-router-dom";
import topicReducer from "../../reducers/topic-reducer";


// combine reducers using map

const reducer = combineReducers({
    // namespaces
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer : topicReducer
})
const store = createStore(reducer)

const CourseEditor = ({props}) => {
    const {layout} = useParams();

    return (
        <Provider store={store}>
            <div className="container">
                <div className="row ss-sticky-header">
                    <div className="col-4 ss-module-col ss-brand-title-header">
                    <span className="ss-cancel-icon">
                        <Link to={`/courses/${layout}`}>
                        <i  className="fas fa-window-close fa-lg"/>
                        </Link>
                    </span>
                        <a className="navbar-brand ss-brand ss-link" href="#">CS5610 - WebDev</a>
                    </div>
                </div>
                <div className="row h-100">
                    <div className="col-4 no-float ss-module-col ss-module-list-col">
                        <ModuleList/>
                    </div>
                    <div className="col-8">
                        <LessonTabs/>
                        <TopicPills/>
                    </div>


                </div>
            </div>

        </Provider>
    )
}

export default CourseEditor