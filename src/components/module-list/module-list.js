import React from 'react'
import {connect} from 'react-redux'

const ModuleList = ({myModules=[]}) =>
    <div>
        <ul className="list-group ss-module-list-group">
            {
                myModules.map(module =>
                    <li className="list-group-item ss-module-list-group-item">
                        <div className="ss-module-link">
                            <a href="#" className="ss-module-name ss-link">{module.title}</a>
                            <a href="#" className="ss-module-delete-icon-link ss-link">
                                <i className="fa-pull-right fas fa-trash ss-module-delete-icon"/>
                            </a>
                        </div>
                    </li>
                )
            }

            <li className="list-group-item ss-module-list-group-item">
                <a href="#">
                    <i className="fa-pull-right fas fa-plus-circle fa-lg ss-plus-icon ss-module-plus-icon ss-link"/>
                </a>
            </li>
        </ul>
    </div>

const stpm = (state) => {
    return {
        myModules: state.modules
    }
}
const dtpm = (dispatch) => {
}

export default connect(stpm, dtpm)(ModuleList)