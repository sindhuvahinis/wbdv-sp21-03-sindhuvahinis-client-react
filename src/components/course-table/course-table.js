import React from 'react'
import CourseRow from "../course-row";
import {Link} from "react-router-dom";
import "./course-table.css"

export default class CourseTable
    extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <table className="table table-striped ss-course-list-table">
                    <thead>
                    <tr>
                        <th className="ss-title-col">
                            Title
                        </th>

                        <th className="ss-owned-by-col">
                            Owned by
                        </th>

                        <th className="ss-last-modified-col">
                            Last Modified
                        </th>

                        <th className="ss-folder-icon-col">
                            <i className="fas fa-folder"/>
                        </th>

                        <th className="ss-alpha-sort-col">
                            <i className="fas fa-sort-alpha-down fa-lg"/>
                        </th>

                        <th className="ss-grip-col">
                            <Link to="/courses/grid">
                                <i className="fas fa-th fa-lg"/>
                            </Link>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.courses.map((course) =>
                            <CourseRow
                                updateCourse={this.props.updateCourse}
                                deleteCourse={this.props.deleteCourse}
                                course={course}/>)
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}