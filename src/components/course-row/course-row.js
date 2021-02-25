import React, {useState} from 'react'
import {Link} from "react-router-dom";
import "./course-row.css"

const CourseRow = (
    {
        updateCourse,
        deleteCourse,
        course
    }) => {

    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(course.title)

    const saveTitle = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: newTitle
        }

        updateCourse(newCourse)
    }

    return (
        <tr>
            <td className="ss-title-col">
                {
                    !editing &&
                    <Link to="/courses/editor">
                        <i className="fas fa-file-alt ss-file-icon"/>
                        {course.title}
                    </Link>
                }
                {
                    editing &&
                    <input
                        onChange={(event) => setNewTitle(event.target.value)}
                        value={newTitle}
                        className="form-control"/>
                }
            </td>
            <td className="ss-owned-by-col">{course.owner}</td>
            <td className="ss-last-modified-col">{course.lastModified}</td>
            <td/>
            <td/>
            <td>
                {

                    editing &&
                    <div>
                        <i onClick={() => saveTitle()}
                           className="fas fa-check ss-cr-check-icon"/>
                        <i onClick={() => {
                            setEditing(false);
                            return deleteCourse(course);
                        }}
                           className="fas fa-times ss-cr-times-icon"/>
                    </div>
                }
                {
                    !editing &&
                    <i onClick={() => {
                        setNewTitle(course.title)
                        setEditing(true)
                    }}
                       className="fas fa-edit"/>

                }
            </td>

        </tr>)
}

export default CourseRow