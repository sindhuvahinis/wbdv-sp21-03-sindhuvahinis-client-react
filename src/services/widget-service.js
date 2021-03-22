const WIDGET_API = process.env.REACT_APP_WIDGET_URL

export const createWidget = (topicId, widget) =>
    // TODO: Move this to widget-service.js
    fetch(`${WIDGET_API}/topics/${topicId}/widgets`,
        {
            method: 'POST',
            body: JSON.stringify(widget),
            headers: {
                "content-type": 'application/json'
            }
        })
        .then(response => response.json())


export const deleteWidget = (widgetId) =>
    fetch(`${WIDGET_API}/widgets/${widgetId}`, {
        method: 'DELETE'
    })
        .then(response => response.json())

const updateWidget = (widgetId, widget) =>
    fetch(`${WIDGET_API}/widgets/${widgetId}`, {
        method: 'PUT',
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const findWidgetsFromTopic = (topicId) =>
    fetch(`${WIDGET_API}/topics/${topicId}/widgets`, {
        method: 'GET'
    })
        .then(response => response.json())

export default {
    createWidget,
    deleteWidget,
    updateWidget,
    findWidgetsFromTopic
}

