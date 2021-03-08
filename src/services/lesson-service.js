const MODULES_URL = "https://wbdv-generic-server.herokuapp.com/api/sindhuvahinis/modules"

export const findLessonsForModule = (moduleId) =>
    fetch(`${MODULES_URL}/${moduleId}/lessons`)
        .then(response => response.json())

export const createLessonForModule = (moduleId, lesson) =>
    fetch(`${MODULES_URL}/${moduleId}/lessons`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(lesson)
    })
        .then(response => response.json())

export default {
    findLessonsForModule,
    createLessonForModule
}