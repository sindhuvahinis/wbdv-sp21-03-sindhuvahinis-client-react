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
        // 1400 to above - xxl (hd)
        // 1200 to 1399 - xl (mdpi)
        // 992 to 1199 - lg ipad pro
        // 768 to 991 - md ipad
        // 576 to 767 - sm
        // xs - all mobiles
        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-5 col-xs-12 ss-course-card">
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
                        Some example.
                    </p>

                    <span>
                        <Link to="/courses/editor"
                              className="btn btn-primary btn-block ss-cc-course-button">
                                {course.title}
                        </Link>
                    </span>


                    <div className="row float-right ss-cc-edit-row">
                        {
                            !editing &&
                            <i onClick={() => {
                                setNewTitle(course.title)
                                setEditing(true)
                            }}
                               className="fas fa-edit ss-cc-edit-icon"/>
                        }

                        {
                            editing &&
                            <i onClick={() => saveTitle()}
                               className="fas fa-check ss-card-check-icon"/>
                        }
                        {
                            editing &&
                            <i onClick={() => {
                                setEditing(false);
                                return deleteCourse(course);
                            }}
                               className="fas fa-times ss-card-times-icon"/>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseCard