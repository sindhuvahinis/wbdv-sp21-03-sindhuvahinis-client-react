import React from 'react'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";

const CourseGrid = ({deleteCourse, courses}) =>
    <div>

        <Link to="/courses/table">
            <i className="fas fa-list fa-2x float-right"/>
        </Link>
        <h2>Course Grid</h2>

        <div className="row">
        {
            courses.map(course => <CourseCard deleteCourse={deleteCourse} course={course}/>)
        }
        </div>
    </div>
export default CourseGrid