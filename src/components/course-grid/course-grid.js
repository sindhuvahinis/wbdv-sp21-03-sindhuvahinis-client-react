import React from 'react'
import CourseCard from "../course-card/course-card";
import {Link} from "react-router-dom";
import "./course-grid.css"

const CourseGrid = ({updateCourse, deleteCourse, courses}) =>
    <div>

        <div className="row ss-grid-header-row">
            <div className="col-5">
                <h4>Recent Documents</h4>
            </div>

            <div className="col-5">
                <h4>Owned by me</h4>
            </div>

            <div className="col-2 text-right">
                <i className="fas fa-folder fa-lg ss-grid-header-icon"/>
                <i className="fas fa-sort-alpha-down fa-lg ss-grid-header-icon"/>
                <Link to="/courses/table">
                    <i className="fas fa-list fa-lg ss-grid-header-icon"/>
                </Link>
            </div>

        </div>

        <div className="row">
            {
                courses.map(course => <CourseCard updateCourse={updateCourse} deleteCourse={deleteCourse} course={course}/>)
            }
        </div>
    </div>
export default CourseGrid