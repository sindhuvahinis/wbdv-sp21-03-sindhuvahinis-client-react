import React from 'react'
import {connect} from 'react-redux'
import EditableItem from "../components/editable-item/editable-item";
import {useParams} from "react-router-dom";

const LessonTabs = ({
                        lessons = [
                            {_id: "123", title: "Lesson 1"},
                            {_id: "124", title: "Lesson B"},
                            {_id: "125", title: "Lesson C"},
                            {_id: "126", title: "Lesson D"},
                            {_id: "127", title: "Lesson E"},
                            {_id: "128", title: "Lesson F"},
                        ]
                    }) => {

    const {courseId, moduleId} = useParams();

    return (<div>
        <ul className="nav nav-tabs">
            {
                lessons.map(
                    (lesson) =>
                        <li className="nav-item">
                            <EditableItem
                                to={`/courses/editor/${courseId}/${moduleId}/${lesson._id}`}
                                item={lesson}/>
                        </li>
                )
            }
            <li className="nav-item">
                <a className="nav-link disabled" href="#" tabIndex="-1"
                   aria-disabled="true">
                    <i className="fas fa-plus-circle fa-lg ss-plus-icon"/>
                </a>
            </li>
        </ul>
    </div>)
}

const stpm = (state) => ({
    lessons: state.lessonReducer.lessons,
})

const dtpm = (dispatch) => ({})

export default connect(stpm, dtpm)(LessonTabs)