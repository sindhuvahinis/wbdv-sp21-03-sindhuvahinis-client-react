import React from 'react'
import './course-editor.css'
import moduleReducer from "../../reducers/modules-reducer";
import {createStore} from "redux";
import {Provider} from "react-redux"

const store = createStore(moduleReducer)

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
                    <div className="col-8">
                        <ul className="nav nav-pills ss-nav-pills">
                            <li className="nav-item">
                                <a className="nav-link ss-link" aria-current="page"
                                   href="#">Build</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ss-link active" href="#">Pages</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ss-link" href="#">Theme</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ss-link" href="#">Store</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ss-link" href="#">Apps</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ss-link" href="#">Settings</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ss-link disabled" href="#" tabIndex="-1"
                                   aria-disabled="true">
                                    <i className="fas fa-plus-circle fa-lg ss-plus-icon"/>
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className="row h-100">
                    <div className="col-4 no-float ss-module-col ss-module-list-col">
                        <div></div>
                        <ul className="list-group ss-module-list-group">
                            <li className="list-group-item ss-module-list-group-item">
                                <div className="ss-module-link">
                                    <a href="#" className="ss-module-name ss-link">Module 1 -
                                        jQuery</a>
                                    <a href="#" className="ss-module-delete-icon-link ss-link">
                                        <i className="fa-pull-right fas fa-trash ss-module-delete-icon"/>
                                    </a>
                                </div>
                            </li>
                            <li className="list-group-item active ss-module-list-group-item">
                                <div className="ss-module-link active">
                                    <a href="#" className="ss-module-name ss-link">Module 2 -
                                        React</a>
                                    <a href="#" className="ss-module-delete-icon-link ss-link">
                                        <i className="fa-pull-right fas fa-trash ss-module-delete-icon"/>
                                    </a>
                                </div>
                            </li>
                            <li className="list-group-item ss-module-list-group-item">
                                <div className="ss-module-link">
                                    <a href="#" className="ss-module-name ss-link">Module 3 -
                                        Redux</a>
                                    <a href="#" className="ss-module-delete-icon-link ss-link">
                                        <i className="fa-pull-right fas fa-trash ss-module-delete-icon"/>
                                    </a>
                                </div>
                            </li>
                            <li className="list-group-item ss-module-list-group-item">
                                <div className="ss-module-link">
                                    <a href="#" className="ss-module-name ss-link">Module 4 -
                                        Native</a>
                                    <a href="#" className="ss-module-delete-icon-link ss-link">
                                        <i className="fa-pull-right fas fa-trash ss-module-delete-icon"/>
                                    </a>
                                </div>
                            </li>
                            <li className="list-group-item ss-module-list-group-item">
                                <div className="ss-module-link">
                                    <a href="#" className="ss-module-name ss-link">Module 5 -
                                        Angular</a>
                                    <a href="#" className="ss-module-delete-icon-link ss-link">
                                        <i className="fa-pull-right fas fa-trash ss-module-delete-icon"/>
                                    </a>
                                </div>
                            </li>
                            <li className="list-group-item ss-module-list-group-item">
                                <div className="ss-module-link">
                                    <a href="#" className="ss-module-name ss-link">Module 6 -
                                        Node</a>
                                    <a href="#" className="ss-module-delete-icon-link ss-link">
                                        <i className="fa-pull-right fas fa-trash ss-module-delete-icon"/>
                                    </a>
                                </div>
                            </li>
                            <li className="list-group-item ss-module-list-group-item">
                                <div className="ss-module-link">
                                    <a href="#" className="ss-module-name ss-link">Module 7 -
                                        Mongo</a>
                                    <a href="#" className="ss-module-delete-icon-link ss-link">
                                        <i className="fa-pull-right fas fa-trash ss-module-delete-icon"/>
                                    </a>
                                </div>
                            </li>
                            <li className="list-group-item ss-module-list-group-item">
                                <a href="#">
                                    <i className="fa-pull-right fas fa-plus-circle fa-lg ss-plus-icon ss-module-plus-icon ss-link"/>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-8">
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
        </Provider>
    )
}

export default CourseEditor