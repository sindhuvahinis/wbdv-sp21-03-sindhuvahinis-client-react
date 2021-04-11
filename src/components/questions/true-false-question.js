import React, {useState} from "react";

const TrueFalseQuestion = ({question}) => {
    const [yourAnswer, setYourAnswer] = useState("")
    const [highLight, setHighLight] = useState(false)

    const trueOrFalse = [{"displayStr": "TRUE", "key": "true"}, {
        "displayStr": "FALSE",
        "key": "false"
    }]

    return (
        <div>
            <h5>
                {question.question}
                {
                    highLight &&
                    question.correct !== yourAnswer &&
                    <i className="fas fa-times ss-quiz-times ss-quiz-icon"/>
                }
                {
                    highLight &&
                    question.correct === yourAnswer &&
                    <i className="fas fa-check ss-quiz-check ss-quiz-icon"/>
                }
            </h5>
            <ul className="list-group">
                {
                    trueOrFalse.map((choice) => {
                        return (
                            <li className={"list-group-item "
                            + (highLight ? (choice.key === yourAnswer ? yourAnswer === question.correct ? " list-group-item-success" : "list-group-item-danger" : "") : "")
                            + (highLight && choice.key === question.correct ? " list-group-item-success" : "")}>
                                <label>
                                    <input name={question._id}
                                           onClick={() => setYourAnswer(choice.key)}
                                           type="radio"/> {choice.displayStr}

                                    {
                                        highLight && choice.key === yourAnswer &&
                                        question.correct !== yourAnswer &&
                                        <i className="fas fa-times ss-quiz-times ss-quiz-icon"/>
                                    }
                                    {
                                        highLight &&
                                        question.correct === choice.key &&
                                        <i className="fas fa-check ss-quiz-check ss-quiz-icon"/>
                                    }
                                </label>
                            </li>
                        )
                    })
                }
            </ul>
            <p>Your answer: {yourAnswer.toString()}</p>
            <button className="btn btn-success" onClick={() => setHighLight(true)}>
                Grade
            </button>
        </div>
    )
}

export default TrueFalseQuestion;