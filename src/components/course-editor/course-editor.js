import React from 'react'
import './course-editor.css'

import moduleReducer from "../../reducers/modules-reducer";
import lessonReducer from "../../reducers/lesson-reducer";

import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux"

import ModuleList from "../module-list/module-list";
import LessonTabs from "../../lesson-tabs/lesson-tabs";


// combine reducers using map

const reducer = combineReducers({
    // namespaces
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer
})
const store = createStore(reducer)

const CourseEditor = ({props}) => {
    return (
        <Provider store={store}>
            <div className="container">
                <div className="row ss-sticky-header">
                    <div className="col-4 ss-module-col ss-brand-title-header">
                    <span className="ss-cancel-icon">
                        <i onClick={() => props.history.goBack()}
                           className="fas fa-window-close fa-lg"/>
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
                        <div>
                            <ul className="nav nav-pills ss-topics-nav">
                                <li className="nav-item ss-topics-nav-item">
                                    <a className="nav-link ss-topics-nav-item-link ss-link active"
                                       aria-current="page"
                                       href="#">
                                        Topic 1
                                    </a>
                                </li>
                                <li className="nav-item ss-topics-nav-item">
                                    <a className="nav-link ss-topics-nav-item-link ss-link" href="#">Topic
                                        2</a>
                                </li>
                                <li className="nav-item ss-topics-nav-item">
                                    <a className="nav-link ss-topics-nav-item-link ss-link" href="#">Topic
                                        3</a>
                                </li>
                                <li className="nav-item ss-topics-nav-item">
                                    <a className="nav-link ss-topics-nav-item-link ss-link" href="#">Topic
                                        4</a>
                                </li>
                                <li className="nav-item ss-topics-nav-item">
                                    <a className="nav-link ss-link disabled" href="#" tabIndex="-1"
                                       aria-disabled="true">
                                        <i className="fas fa-plus ss-plus-icon"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>


                </div>
            </div>

        </Provider>
    )
}

export default CourseEditor