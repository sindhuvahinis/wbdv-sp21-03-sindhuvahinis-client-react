const initialState = {
    modules: [
        {_id: 123, title: "Module 1"},
        {_id: 123, title: "Module 2"},
        {_id: 123, title: "Module 3"},
        {_id: 123, title: "Module 4"},
        {_id: 123, title: "Module 5"},
        {_id: 123, title: "Module 6"},
        {_id: 123, title: "Module 7"},
    ]
}


const moduleReducer = (state=initialState, action) => {
    switch (action.type) {
        case "CREATE_MODULE" :
        case "DELETE_MODULE":
        case "UPDATE_MODULE":
        default:
            return state

    }
}

export default moduleReducer