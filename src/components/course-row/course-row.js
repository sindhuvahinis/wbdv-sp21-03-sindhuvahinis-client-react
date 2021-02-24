import React, {useState} from 'react'
import {Link} from "react-router-dom";

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
            <td>
                <i onClick={() => deleteCourse(course)} className="fas fa-trash"/>
            </td>
            <td>
                {
                    !editing &&
                    <i onClick={() => setEditing(true)}
                       className="fas fa-edit"/>
                }

                {
                    editing &&
                    <i onClick={() => saveTitle()}
                       className="fas fa-check"/>
                }
            </td>
            <td></td>

        </tr>)
}

export default CourseRow