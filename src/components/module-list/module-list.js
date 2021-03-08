import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import EditableItem from "../editable-item/editable-item";
import {useParams} from "react-router-dom";
import moduleService from '../../services/module-service'

const ModuleList = (
    {
        myModules = [],
        createModule,
        deleteModule,
        updateModule,
        findModulesForCourse
    }) => {

    const {courseId, moduleId} = useParams();
    useEffect(() => {
        findModulesForCourse(courseId)
    }, [])

    return (<div>
        <ul className="list-group ss-module-list-group">
            {
                myModules.map(module =>
                    <li className={`list-group-item ${module._id === moduleId ? 'active' : ''}  ss-module-list-group-item`}>
                        <EditableItem
                            to={`/courses/editor/${courseId}/${module._id}`}
                            updateItem={updateModule}
                            deleteItem={deleteModule}
                            active={module._id === moduleId}
                            item={module}/>
                    </li>
                )
            }

            <li className="list-group-item ss-module-list-group-item">
                <a href="#">
                    <i onClick={() => createModule(courseId)}
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
        createModule: (courseId) => {
            moduleService.createModuleForCourse(courseId, {title: "New Module"})
                .then(theActualModule => dispatch({
                    type: "CREATE_MODULE",
                    module: theActualModule
                }))
        },
        deleteModule: (item) => {
            moduleService.deleteModule(item._id)
                .then(status => dispatch({
                    type: "DELETE_MODULE",
                    moduleToDelete: item
                }))

        },
        updateModule: (item) => {
            moduleService.updateModule(item._id, item)
                .then(status => dispatch({
                    type: "UPDATE_MODULE",
                    moduleToUpdate: item
                }))

        },
        findModulesForCourse: (courseId) => {
            moduleService.findModulesForCourse(courseId)
                .then(theModules => dispatch({
                    type: "FIND_MODULES_FOR_COURSE",
                    modules: theModules
                }))
        }
    }
}

export default connect(stpm, dtpm)(ModuleList)