import React from "react";
import {Link} from "react-router-dom";

export default () =>
    <div className="container">
        <h1 className="ml-3">Home</h1>
        <div className="list-group ml-3 mr-3">
            <Link to="/courses/table" className="list-group-item">
                Course Table
            </Link>
            <Link to="/courses/grid" className="list-group-item">
                Course Grid
            </Link>
        </div>
    </div>