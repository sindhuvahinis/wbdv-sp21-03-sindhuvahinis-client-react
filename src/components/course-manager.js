import React from 'react'
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";

class CourseManager extends React.Component {
    render() {
        return (
            <div>
                <h1>Course Manager</h1>
                <CourseTable/>
                <CourseGrid/>
            </div>
        )
    }
}

export default CourseManager