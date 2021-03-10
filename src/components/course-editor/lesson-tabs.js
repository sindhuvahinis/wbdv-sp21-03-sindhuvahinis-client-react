import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import EditableItem from "../editable-item/editable-item";
import {useParams} from "react-router-dom";
import lessonService from "../../services/lesson-service"

const LessonTabs = ({
                        lessons = [],
                        findLessonsForModule,
                        createLessonForModule,
                        updateLesson,
                        deleteLesson
                    }) => {

    const {layout, courseId, moduleId, lessonId} = useParams();
    useEffect(() => {
        findLessonsForModule(moduleId)
    }, [moduleId])

    return (<div>
        <ul className="nav nav-tabs ss-lesson-tab">
            {
                lessons.map(lesson =>
                    <li className="nav-item ss-lesson-nav-item"
                        key={lesson._id}>
                        <EditableItem
                            key={lesson._id}
                            to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                            item={lesson}
                            updateItem={updateLesson}
                            deleteItem={deleteLesson}
                            active={lesson._id === lessonId}
                        />
                    </li>
                )
            }
            <li className="nav-item">
                <a href="#" tabIndex="-1">
                    <i className="fas fa-plus-circle fa-2x ss-plus-icon ss-lesson-plus-icon float-right"
                       onClick={() => createLessonForModule(moduleId)}/>
                </a>
            </li>

        </ul>
    </div>)
}

const stpm = (state) => ({
    lessons: state.lessonReducer.lessons,
})

const dtpm = (dispatch) => ({
    findLessonsForModule: (moduleId) => {
        lessonService.findLessonsForModule(moduleId)
            .then(theLessons => dispatch({
                type: "FIND_LESSONS",
                lessons: theLessons
            }))
    },
    createLessonForModule: (moduleId) => {
        lessonService.createLessonForModule(moduleId, {title: "New Lesson"})
            .then(theLesson => dispatch({
                type: "CREATE_LESSON",
                lesson: theLesson
            }))
    },
    updateLesson: (item) => {
        lessonService.updateLesson(item._id, item)
            .then(theLesson => dispatch({
                type: "UPDATE_LESSON",
                lessonToBeUpdated: item
            }))
    },
    deleteLesson: (item) => {
        lessonService.deleteLesson(item._id)
            .then(status => dispatch({
                type: "DELETE_LESSON",
                lessonToDelete: item
            }))
    }
})

export default connect(stpm, dtpm)(LessonTabs)