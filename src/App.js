import './App.css';
import CourseManager from "./components/course-manager/course-manager";
import CourseEditor from "./components/course-editor/course-editor";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home"

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Route path="/" exact={true}>
                    <Home/>
                </Route>
                <Route path="/courses">
                    <CourseManager/>
                </Route>
                <Route path="/editor"
                       render={(props) =>
                           <CourseEditor props={props}/>}>
                </Route>
            </div>
        </BrowserRouter>
    );
}

export default App;
