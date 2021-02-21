import React from 'react'
import CourseTable from "../course-table/course-table";
import CourseGrid from "../course-grid";
import {Link, Route} from "react-router-dom";
import CourseEditor from "../course-editor";
import courseService from "../../services/course-service";
import "./course-manager.css"

class CourseManager extends React.Component {

    state = {
        courses: []
    }

    componentDidMount = () =>
        courseService.findAllCourses()
            .then(courses => this.setState({courses}))

    addCourse = () => {

        const newCourse = {
            title: "New Course",
            owner: "me",
            lastModified: "2/10/2021"
        }

        courseService.createCourse(newCourse)
            .then(course => this.setState((prevState) => ({
                ...prevState,
                courses: [
                    ...prevState.courses,
                    course
                ]
            })))
    }

    updateCourse = (courseToBeUpdated) => {
        console.log(this.state.courses)
        console.log(courseToBeUpdated)
        courseService.updateCourse(courseToBeUpdated._id, courseToBeUpdated)
            .then(status => this.setState((prevState) => ({
                ...prevState,
                courses: prevState.courses.map(c => c._id === courseToBeUpdated._id ? courseToBeUpdated : c)
            })))
    }

    deleteCourse = (courseToDelete) => {
        courseService.deleteCourse(courseToDelete._id)
            .then(status => {
                this.setState((prevState) => ({
                    ...prevState,
                    courses: prevState.courses.filter(course => course !== courseToDelete)
                }))
            })
    }

    render() {
        return (
            <div>

                <div className="ss-sticky-nav-bar">
                    <div className="row">
                        <div className="col-2">
                            <h3 className="title">
                                <i className="fas fa-bars"/>
                                <span className="ss-dashboard-title">
                                    Course Manager
                                </span>
                            </h3>
                        </div>

                        <div className="col-9">
                            <input className="form-control" placeholder="New Course Title"/>
                        </div>

                        <div className="col-1">
                            <button className="ss-plus-button float-right">
                                <i className="fas fa-plus-circle fa-2x ss-plus-icon"/>
                            </button>
                        </div>

                    </div>
                </div>


                <div className="container-fluid">
                    <Route path="/courses/table">
                        <CourseTable
                            updateCourse={this.updateCourse}
                            deleteCourse={this.deleteCourse}
                            courses={this.state.courses}/>
                    </Route>

                    <Route path="/courses/grid">
                        <CourseGrid
                            updateCourse={this.updateCourse}
                            deleteCourse={this.deleteCourse}
                            courses={this.state.courses}/>
                    </Route>

                    <Route path="/courses/editor"
                           render={(props) =>
                               <CourseEditor props={props}/>}>
                    </Route>
                </div>

            </div>
        )
    }
}

export default CourseManager