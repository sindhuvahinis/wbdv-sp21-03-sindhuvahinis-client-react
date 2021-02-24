import React from "react";

export const StickyHeaderWithoutAddCourse = (props) =>
    <div className="ss-sticky-nav-bar">
        <div className="row">
            <div className="col-3">
                <h3 className="title">
                    <i className="fas fa-bars"/>
                    <span className="ss-dashboard-title">
                                    Course Manager
                                </span>
                </h3>
            </div>
        </div>
    </div>

const Stickyheader  = ({handleAddCourse, handleChange})  =>
    <div className="ss-sticky-nav-bar">
        <div className="row">
            <div className="col-3">
                <h3 className="title">
                    <i className="fas fa-bars"/>
                    <span className="ss-dashboard-title">
                                    Course Manager
                                </span>
                </h3>
            </div>

            <div className="col-7">
                <input
                    className="form-control ss-header-input"
                    placeholder="New Course"
                    //value={this.state.newCourseTitle}
                    onChange={handleChange}/>
            </div>

            <div className="col-2">
                <button className="ss-plus-button float-right"
                        onClick={handleAddCourse}>
                    <i className="fas fa-plus-circle fa-2x ss-plus-icon"/>
                </button>
            </div>

        </div>
    </div>

export default Stickyheader;