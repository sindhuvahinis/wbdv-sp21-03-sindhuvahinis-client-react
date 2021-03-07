import {act} from "@testing-library/react";

const initialState = {
    modules: [
        {_id: 123, title: "Module 1"},
        {_id: 124, title: "Module 2"},
        {_id: 125, title: "Module 3"},
        {_id: 126, title: "Module 4"},
        {_id: 127, title: "Module 5"},
        {_id: 128, title: "Module 6"},
        {_id: 129, title: "Module 7"},
    ]
}


const moduleReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_MODULE":
            const newState = {
                modules: [
                    ...state.modules,
                    {
                        title: "New module",
                        _id: (new Date()).getTime()
                    }
                ]
            }
            return newState
        case "DELETE_MODULE":
            const newStateDelete = {
                modules: state.modules.filter(module => {
                    if (module._id === action.moduleToDelete._id) {
                        return false;
                    } else {
                        return true;
                    }
                })
            }
            return newStateDelete
        case "UPDATE_MODULE":
            return {
                modules: state.modules.map(module => {
                    if (module._id === action.moduleToUpdate._id) {
                        return action.moduleToUpdate
                    } else {
                        return module
                    }
                })
            }
        default:
            return state

    }
}

export default moduleReducer