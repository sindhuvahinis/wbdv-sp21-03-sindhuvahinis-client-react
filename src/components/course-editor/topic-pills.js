import React from 'react';
import EditableItem from "../editable-item/editable-item";
import {useParams} from "react-router-dom";
import {connect} from 'react-redux'
import topicService from '../../services/topic-service'

const TopicPills = ({
                        topics = [],
                        createTopic
                    }) => {

    const {layout, courseId, moduleId, lessonId, topicId} = useParams();

    return (
        <div>
            <ul className="nav nav-pills ss-topics-nav">
                {
                    topics.map(topic =>
                        <li className="nav-item ss-topics-nav-item">
                            <EditableItem
                                to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
                                item={topic}
                                active={topic._id === topicId}/>
                        </li>
                    )
                }

                <li className="nav-item ss-topics-nav-item">
                    <a className="nav-link ss-link" href="#" tabIndex="-1">
                        <i onClick={() => createTopic(lessonId)}
                           className="fas fa-plus fa-lg ss-plus-icon"/>
                    </a>
                </li>
            </ul>
        </div>
    )
}

const stpm = (state) => {
    return {
        topics: state.topicReducer.topics
    }
}

const dtpm = (dispatch) => {
    return {
        createTopic: (lessonId) => {
            topicService.createTopic(lessonId, {title: 'New Topic'})
                .then(theActualTopic => dispatch({
                    type: "CREATE_TOPIC",
                    topic: theActualTopic
                }))
        },
        findTopicsForLesson: (lessonId) => {
            topicService.findTopicsForLesson(lessonId)
                .then(theTopics => dispatch({
                    topics: theTopics
                }))
        },
        updateTopic: (item) => {
            topicService.updateTopic(item._id, item)
                .then(status => dispatch({
                    topicToUpdate: item
                }))
        },
        deleteTopic: (item) => {
            topicService.deleteTopic(item._id)
                .then(status => dispatch({
                    topicToDelete: item
                }))
        }
    }
}

export default connect(stpm, dtpm)(TopicPills)