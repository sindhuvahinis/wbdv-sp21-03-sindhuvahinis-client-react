import React from 'react'
import {Link} from "react-router-dom";

const CourseEditor = ({props}) => {
    return (
        <h1>
            <Link to="/courses/table">
                <i className="fas fa-arrow-left"/>
            </Link>

            Course Editor

            <i onClick={() => props.history.goBack()} className="fas fa-times float-right"/>
        </h1>
    )
}

export default CourseEditor