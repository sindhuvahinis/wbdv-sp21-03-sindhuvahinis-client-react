import React, {useState} from 'react'
import {Link} from "react-router-dom";
import "./course-card.css"

const CourseCard = ({updateCourse, deleteCourse, course}) => {

    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(course.title)

    const saveTitle = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: newTitle
        }

        console.log(newCourse)
        updateCourse(newCourse)
    }

    return (
        <div className="col-3 ss-course-card">
            <div className="card">
                <div className="card-body">
                    {
                        !editing &&
                        <h5 className="card-title">
                            {course.title}
                        </h5>
                    }

                    {
                        editing &&
                        <input
                            onChange={(event) => setNewTitle(event.target.value)}
                            value={newTitle}
                            className="form-control"/>
                    }

                    <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </p>

                    <Link to="/editor" className="btn btn-primary">
                        {course.title}
                    </Link>
                    <i className="fas fa-trash float-right" onClick={() => deleteCourse(course)}/>

                    {
                        !editing &&
                        <i onClick={() => setEditing(true)}
                           className="fas fa-edit float-right"/>
                    }

                    {
                        editing &&
                        <i onClick={() => saveTitle()}
                           className="fas fa-check ss-card-check-icon"/>
                    }
                    {
                        editing &&
                        <i onClick={() => setEditing(false)}
                           className="fas fa-times ss-card-times-icon"/>
                    }
                </div>
            </div>
        </div>
    )
}

export default CourseCard