import React, {useState} from "react";

const MultipleChoiceQuestion = ({question}) => {
    //const [yourAnswer, setYourAnswer] = useState("")
    const [highLight, setHighLight] = useState(false)

    const setAnswer = (yourAnswer) => {
        question.answer = yourAnswer;
        console.log('question object after setting answer ' + question.answer)
    }

    return (
        <div>
            <h5>
                {question.question}
                {
                    highLight &&
                    question.correct !== question.answer &&
                    <i className="fas fa-times ss-quiz-times ss-quiz-icon"/>
                }
                {
                    highLight &&
                    question.correct === question.answer &&
                    <i className="fas fa-check ss-quiz-check ss-quiz-icon"/>
                }

            </h5>

            <ul className="list-group">
                {
                    question.choices.map((choice) => {
                        return (
                            <li className={"list-group-item "
                            + (highLight ? (choice === question.answer ? question.answer === question.correct ? " list-group-item-success" : "list-group-item-danger" : "") : "")
                            + (highLight && choice === question.correct ? " list-group-item-success" : "")}>
                                {
                                    <label>
                                        <input
                                            onClick={() => {
                                                setAnswer(choice)
                                            }}
                                            type="radio"
                                            name={question._id}/> {choice}
                                        {
                                            highLight && choice === question.answer &&
                                            question.correct !== question.answer &&
                                            <i className="fas fa-times ss-quiz-times ss-quiz-icon"/>
                                        }
                                        {
                                            highLight &&
                                            question.correct === choice &&
                                            <i className="fas fa-check ss-quiz-check ss-quiz-icon"/>
                                        }

                                    </label>
                                }
                            </li>
                        )
                    })
                }
            </ul>
            <p>Your answer: {question.answer}</p>
            {/*<p>{question.correct}</p>*/}
            <button className="btn btn-success" onClick={() => setHighLight(true)}>
                Grade
            </button>
        </div>
    )
}

export default MultipleChoiceQuestion