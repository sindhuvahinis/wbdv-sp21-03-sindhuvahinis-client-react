import React from 'react'

const ListWidget = ({widget, editing, setEditingWidget}) => {
    return (
        <div>
            {
                editing &&
                <>
                    <input checked={widget.ordered}
                           type="checkbox"
                           onChange={event => setEditingWidget({
                               ...widget,
                               ordered: event.target.checked
                           })}/> Ordered
                    <br/>
                    Item List
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
                <>
                    {
                        widget.ordered &&
                        <ol>
                            {
                                widget.text.split("\n").map((item) => {
                                    return (
                                        <li>
                                            {item}
                                        </li>
                                    )
                                })
                            }
                        </ol>
                    }
                    {
                        !widget.ordered &&
                        <ul>
                            {
                                widget.text.split("\n").map((item) => {
                                    return (
                                        <li>
                                            {item}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    }

                </>
            }
        </div>
    )
}

export default ListWidget