import {useEffect, useState} from "react";
import quizService from '../../services/quizzes-service'

const QuizAttemptsList = ({quizId}) => {

    const [attempts, setAttempts] = useState([]);

    useEffect(() => {
        quizService.findAttemptsForQuiz(quizId)
            .then((attempts) => setAttempts(attempts))
    }, [])


    return <table className="table table-striped mt-5">
        <tr>
            <th>
                Previous Attempts
            </th>
            <th>
                Score
            </th>
        </tr>
        {

            attempts.map((attempt) => {
                return (
                    <tr>
                        <td>
                            {attempt._id}
                        </td>
                        <td>
                            {attempt.score}
                        </td>
                    </tr>
                )
            })
        }
    </table>
}

export default QuizAttemptsList