import React from 'react'
import {connect} from 'react-redux'
import EditableItem from "../editable-item/editable-item";
import {useParams} from "react-router-dom";

const ModuleList = (
    {
        myModules = [],
        createModule,
        deleteModule,
        updateModule
    }) => {
    const {courseId} = useParams();
    return (<div>
        <ul className="list-group ss-module-list-group">
            {
                myModules.map(module =>
                    <li className="list-group-item ss-module-list-group-item">
                        <div className="ss-module-link">
                            <a href="#" className="nav-link ss-link">
                                <EditableItem
                                    to={`/courses/editor/${courseId}/${module._id}`}
                                    updateItem={updateModule}
                                    deleteItem={deleteModule}
                                    item={module}/>
                            </a>
                        </div>
                    </li>
                )
            }

            <li className="list-group-item ss-module-list-group-item">
                <a href="#">
                    <i onClick={createModule}
                       className="fa-pull-right fas fa-plus-circle fa-2x ss-plus-icon ss-module-plus-icon ss-link"/>
                </a>
            </li>
        </ul>
    </div>)
}

const stpm = (state) => {
    return {
        myModules: state.moduleReducer.modules
    }
}
const dtpm = (dispatch) => {
    return {
        createModule: () => {
            dispatch({
                type: "CREATE_MODULE"
            })
        },
        deleteModule: (item) => {
            dispatch({
                type: "DELETE_MODULE",
                moduleToDelete: item
            })
        },
        updateModule: (item) => {
            dispatch({
                type: "UPDATE_MODULE",
                moduleToUpdate: item
            })
        }
    }
}

export default connect(stpm, dtpm)(ModuleList)