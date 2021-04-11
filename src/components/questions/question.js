import React from "react";
import MultipleChoiceQuestion from "./multiple-choice-question";
import TrueFalseQuestion from "./true-false-question";

const Question = ({question}) => {
    return (
        <div>
            {
                question.type === "MULTIPLE_CHOICE" &&
                <MultipleChoiceQuestion question={question}/>
            }

            {
                question.type === "TRUE_FALSE" &&
                <TrueFalseQuestion question={question}/>
            }

        </div>
    )
}

export default Question