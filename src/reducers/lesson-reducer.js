const initialState = {
    lessons: [
        {_id: "123", title: "Lesson A"},
        {_id: "124", title: "Lesson B"},
        {_id: "125", title: "Lesson C"},
        {_id: "126", title: "Lesson D"},
        {_id: "127", title: "Lesson E"},
        {_id: "128", title: "Lesson F"},
    ]
}

const lessonReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_LESSON":
            return {
                ...state,
                lessons: [
                    ...state.lessons,
                    action.lesson
                ]
            }

        case "FIND_LESSONS":
            return {
                ...state,
                lessons: action.lessons
            }
        default:
            return state
    }
}

export default lessonReducer