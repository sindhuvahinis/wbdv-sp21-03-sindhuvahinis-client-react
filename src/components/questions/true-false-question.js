import React from "react";

const TrueFalseQuestion = ({question}) => {
    return (
        <div>
            <h5>{question.question}</h5>
            <ul className="list-group">
                <li className="list-group-item">
                    <label><input name={question._id} type="radio"/> True </label>
                </li>
                <li className="list-group-item">
                    <label><input name={question._id} type="radio"/> False </label>
                </li>
            </ul>
            <p>{question.correct}</p>
            <p>{question.type}</p>
        </div>
    )
}

export default TrueFalseQuestion;