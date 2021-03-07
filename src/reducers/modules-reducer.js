const initialState = {
    modules: [
        {_id: 123, title: "Module 123"},
        {_id: 123, title: "Module 123"},
        {_id: 123, title: "Module 123"},
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