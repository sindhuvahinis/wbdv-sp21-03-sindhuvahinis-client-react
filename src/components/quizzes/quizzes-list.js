import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";

const QuizzesList = () => {
    const {courseId} = useParams()
    const [quizzes, setQuizzes] = useState([])

    // TODO: move this to a service file
    useEffect(() => {
        fetch("http://localhost:4000/api/quizzes")
            .then(response => response.json())
            .then((quizzes) => {
                setQuizzes(quizzes)
            })
    }, [])

    return (
        <div className="ss-quiz-list">
            <h2>Quizzes ({quizzes.length})</h2>
            <ul className="list-group">
                {
                    quizzes.map((quiz) => {
                        return (
                            <li className="list-group-item">
                                <Link to={`/courses/${courseId}/quizzes/${quiz._id}`}>
                                    {quiz.title}
                                </Link>
                                <Link to={`/courses/${courseId}/quizzes/${quiz._id}`}>
                                    <button className="btn btn-primary float-right">
                                        Start
                                    </button>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default QuizzesList