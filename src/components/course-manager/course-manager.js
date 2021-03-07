import React from 'react'
import CourseTable from "../course-table/course-table";
import CourseGrid from "../course-grid/course-grid";
import {Link, Route, Switch} from "react-router-dom";
import CourseEditor from "../course-editor/course-editor";
import courseService from "../../services/course-service";
import "./course-manager.css"
import Stickyheader, {
    StickyHeaderWithoutAddCourse,
    FloatingPlusIcon
} from "../course-grid/sticky-header";

class CourseManager extends React.Component {

    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleAddCourse = this.handleAddCourse.bind(this);
    }

    state = {
        courses: [],
        newCourseTitle: "New Course"
    }

    componentDidMount = () =>
        courseService.findAllCourses()
            .then(courses => this.setState({courses}))

    addCourse = (titleToBeAdded) => {
        const newCourse = {
            title: titleToBeAdded,
            owner: "me",
            lastModified: "2/22/2021"
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

    handleAddCourse(event) {
        console.log(this.state.newCourseTitle);
        this.addCourse(this.state.newCourseTitle);
        this.setState({
            newCourseTitle: "New Course"
        });

        document.querySelector('input.ss-header-input').value = "";
    }

    handleChange(event) {
        this.setState({
            newCourseTitle: event.target.value
        });
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route path="/courses/table"
                           render={() => <Stickyheader handleChange={this.handleChange}
                                                       handleAddCourse={this.handleAddCourse}/>}/>
                    <Route path="/courses/grid"
                           render={() => <Stickyheader handleChange={this.handleChange}
                                                       handleAddCourse={this.handleAddCourse}/>}/>
                    <Route path="/courses/editor" component={StickyHeaderWithoutAddCourse}/>
                </Switch>
                <div className="container-fluid">
                    <Route path="/courses/table">
                        <CourseTable
                            updateCourse={this.updateCourse}
                            deleteCourse={this.deleteCourse}
                            courses={this.state.courses}
                        />
                    </Route>

                    <Route path="/courses/grid">
                        <CourseGrid
                            updateCourse={this.updateCourse}
                            deleteCourse={this.deleteCourse}
                            courses={this.state.courses}/>
                    </Route>

                    <Route path="/courses/editor/:courseId"
                           render={(props) =>
                               <CourseEditor props={props}/>}>
                    </Route>
                    <Route path="/courses/editor/:courseId/:moduleId"
                           render={(props) =>
                               <CourseEditor props={props}/>}>>
                    </Route>
                </div>

                <Switch>
                    <Route path="/courses/table" render={() => <FloatingPlusIcon
                        handleAddCourse={this.handleAddCourse}/>}/>
                    <Route path="/courses/grid" render={() => <FloatingPlusIcon
                        handleAddCourse={this.handleAddCourse}/>}/>
                    <Route path="/courses/editor"/>
                </Switch>

            </div>
        )
    }
}

export default CourseManager