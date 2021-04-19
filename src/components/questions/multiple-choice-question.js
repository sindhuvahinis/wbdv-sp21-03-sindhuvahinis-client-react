const MultipleChoiceQuestion = ({question, highLight, yourAnswer, setYourAnswer}) => {
    return (
        <div>
            <ul className="list-group">
                {
                    question.choices.map((choice) => {
                        return (
                            <li className={"list-group-item "
                            + (highLight ? (choice === yourAnswer ? yourAnswer === question.correct ? " list-group-item-success" : "list-group-item-danger" : "") : "")
                            + (highLight && choice === question.correct ? " list-group-item-success" : "")}>
                                {
                                    <label>
                                        <input
                                            onClick={() => {
                                                setYourAnswer(choice)
                                                question.answer = choice
                                            }}
                                            type="radio"
                                            name={question._id}/> {choice}
                                        {
                                            highLight && choice === yourAnswer &&
                                            question.correct !== yourAnswer &&
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
        </div>
    )
}

export default MultipleChoiceQuestion