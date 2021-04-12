import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Question from "../questions/question";
import questionService from '../../services/questions-service'


const Quiz = () => {
    const {quizId} = useParams()
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        questionService.findQuestionsForQuiz(quizId)
            .then((questions) => {
                setQuestions(questions)
            })
    }, [])

    return (
        <div className="ss-quiz-details">
            <h3>Quiz {quizId}</h3>
            <ul className="list-group">
                {
                    questions.map((question) => {
                        return(
                            <li className="list-group-item">
                                <Question question={question}/>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Quiz