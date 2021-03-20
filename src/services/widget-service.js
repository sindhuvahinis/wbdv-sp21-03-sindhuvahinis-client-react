const TOPICS_API = "http://localhost:8080/api/topics";
const WIDGETS_API = "http://localhost:8080/api/widgets";

export const createWidget = (topicId, widget) =>
    // TODO: Move this to widget-service.js
    fetch(`${TOPICS_API}/${topicId}/widgets`,
        {
            method: 'POST',
            body: JSON.stringify(widget),
            headers: {
                "content-type": 'application/json'
            }
        })
        .then(response => response.json())


export const deleteWidget = (widgetId) =>
    fetch(`${WIDGETS_API}/${widgetId}`, {
        method: 'DELETE'
    })
        .then(response => response.json())

const updateWidget = (widgetId, widget) =>
    fetch(`${WIDGETS_API}/${widgetId}`, {
        method: 'PUT',
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const findWidgetsFromTopic = (topicId) =>
    fetch(`${TOPICS_API}/${topicId}/widgets`, {
        method: 'GET'
    })
        .then(response => response.json())

export default {
    createWidget,
    deleteWidget,
    updateWidget,
    findWidgetsFromTopic
}

