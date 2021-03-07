import React from 'react'
import {connect} from 'react-redux'

const LessonTabs = ({
                        lessons = [
                            {_id: "123", title: "Lesson A"},
                            {_id: "123", title: "Lesson B"},
                            {_id: "123", title: "Lesson C"},
                            {_id: "123", title: "Lesson D"},
                            {_id: "123", title: "Lesson E"},
                            {_id: "123", title: "Lesson F"},
                        ]
                    }) =>
    <div>
        <ul className="nav nav-tabs">
            {
                lessons.map(
                    (lesson) =>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page"
                               href="#">{lesson.title}</a>
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
    </div>

const stpm = (state) => ({
    lessons : state.lessonReducer.lessons,
})

const dtpm = (dispatch) => ({})

export default connect(stpm, dtpm) (LessonTabs)