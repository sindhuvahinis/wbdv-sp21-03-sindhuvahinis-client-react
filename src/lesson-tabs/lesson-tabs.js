import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import EditableItem from "../components/editable-item/editable-item";
import {useParams} from "react-router-dom";
import lessonService from "../services/lesson-service"

const LessonTabs = ({
                        lessons = [
                            {_id: "123", title: "Lesson 1"},
                            {_id: "124", title: "Lesson B"},
                            {_id: "125", title: "Lesson C"},
                            {_id: "126", title: "Lesson D"},
                            {_id: "127", title: "Lesson E"},
                            {_id: "128", title: "Lesson F"},
                        ],
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
        <ul className="nav nav-pills">
            {
                lessons.map(
                    (lesson) =>
                        <li className="nav-item">
                            <EditableItem
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
                <a className="nav-link" href="#" tabIndex="-1">
                    <i className="fas fa-plus-circle fa-2x ss-plus-icon float-right"
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
                lessonToBeUpdated: theLesson
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