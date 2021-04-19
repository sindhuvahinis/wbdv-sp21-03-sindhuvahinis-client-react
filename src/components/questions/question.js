import React, {useState} from "react";
import MultipleChoiceQuestion from "./multiple-choice-question";
import TrueFalseQuestion from "./true-false-question";

const Question = ({question}) => {
    const [yourAnswer, setYourAnswer] = useState("")
    const [highLight, setHighLight] = useState(false)

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

            {
                question.type === "MULTIPLE_CHOICE" &&
                <MultipleChoiceQuestion
                    question={question}
                    yourAnswer={yourAnswer}
                    setYourAnswer={setYourAnswer}
                    highLight={highLight}/>
            }

            {
                question.type === "TRUE_FALSE" &&
                <TrueFalseQuestion
                    question={question}
                    yourAnswer={yourAnswer}
                    setYourAnswer={setYourAnswer}
                    highLight={highLight}/>
            }

            <p>Your answer: {yourAnswer}</p>
            <button className="btn btn-success" onClick={() => setHighLight(true)}>
                Grade
            </button>

        </div>
    )
}

export default Question