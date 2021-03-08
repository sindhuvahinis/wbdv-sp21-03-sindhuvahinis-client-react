const initialState = {
    modules: []
}


const moduleReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FIND_MODULES_FOR_COURSE":
            const newStateFindModules = {
                ...state,
                modules: action.modules
            }
            return newStateFindModules

        case "CREATE_MODULE":
            const newState = {
                modules: [
                    ...state.modules,
                    action.module
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