import React from "react";

const ParagraphWidget = ({widget, editing, setEditingWidget}) => {
    return (
        <>
            {
                editing &&
                <>
                    <textarea className="form-control"
                              onChange={event => setEditingWidget({
                                  ...widget,
                                  text: event.target.value
                              })}>
                        {widget.text}
                    </textarea>
                </>
            }
            {
                !editing &&
                <p>
                    {widget.text}
                </p>
            }


        </>
    )
}

export default ParagraphWidget