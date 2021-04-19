import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Question from "../questions/question";
import questionService from '../../services/questions-service'
import quizService from '../../services/quizzes-service'


const Quiz = () => {
    const {quizId} = useParams()
    const [questions, setQuestions] = useState([])
    const [score, setScore] = useState('')

    useEffect(() => {
        questionService.findQuestionsForQuiz(quizId)
            .then((questions) => {
                setQuestions(questions)
            })
    }, [])

    const submitQuiz = (quizId, questions) => {
        quizService.submitQuiz(quizId, questions)
            .then(result => setScore(result.score))
    }

    return (
        <div className="ss-quiz-details">
            <h3>Quiz {quizId} Score : {score} </h3>
            <ul className="list-group">
                {
                    questions.map((question) => {
                        return (
                            <li className="list-group-item">
                                <Question question={question}/>
                            </li>
                        )
                    })
                }
            </ul>
            <button className="btn btn-success"
                    onClick={() => submitQuiz(quizId, questions)}>
                Submit
            </button>
        </div>
    )
}

export default Quiz