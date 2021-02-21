import './App.css';
import CourseManager from "./components/course-manager/course-manager";
import CourseEditor from "./components/course-editor";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Route path="/courses" component={CourseManager}/>
        </BrowserRouter>
    );
}

export default App;
