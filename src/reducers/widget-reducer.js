const initialState = {
    widgets: []
}

const widgetReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_WIDGET" :
            return {
                ...state,
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            }
        case "UPDATE_WIDGET":
            console.log(action.widgetToUpdate.id, ' ', action.widgetToUpdate.size)
            return {
                ...state,
                widgets: state.widgets.map(widget =>
                    widget.id === action.widgetToUpdate.id ? action.widgetToUpdate : widget)
            }
        case "DELETE_WIDGET":
            return {
                ...state,
                widgets: state.widgets.filter(widget => widget.id !== action.widgetToDelete.id)
            }
        case "FIND_ALL_WIDGETS_FOR_TOPIC":
            return {
                ...state,
                widgets: action.widgets
            }
        case "FIND_ALL_WIDGETS":
        case "FIND_WIDGET":
        default:
            return state
    }
}

export default widgetReducer