const TrueFalseQuestion = ({question, highLight, yourAnswer, setYourAnswer}) => {

    const trueOrFalse = [{"displayStr": "TRUE", "key": "true"}, {
        "displayStr": "FALSE",
        "key": "false"
    }]

    return (
        <div>
            <ul className="list-group">
                {
                    trueOrFalse.map((choice) => {
                        return (
                            <li className={"list-group-item "
                            + (highLight ? (choice.key === yourAnswer ? yourAnswer === question.correct ? " list-group-item-success" : "list-group-item-danger" : "") : "")
                            + (highLight && choice.key === question.correct ? " list-group-item-success" : "")}>
                                <label>
                                    <input name={question._id}
                                           onClick={() => {
                                               setYourAnswer(choice.key)
                                               question.answer = choice.key
                                           }}
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
        </div>
    )
}

export default TrueFalseQuestion;