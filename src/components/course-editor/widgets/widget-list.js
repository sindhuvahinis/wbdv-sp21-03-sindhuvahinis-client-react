import React, {useEffect, useState} from "react";
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {useParams} from "react-router-dom";

const WidgetList = () => {
    const {topicId} = useParams()

    //TODO: Move these to widget-reducer.js
    const [widgets, setWidgets] = useState([]);
    const [editingWidget, setEditingWidget] = useState({});

    useEffect(() => {
        fetch(`http://localhost:8080/api/topics/${topicId}/widgets`)
            .then(response => response.json())
            .then(widgets => setWidgets(widgets))
    }, [topicId]);

    const createWidget = () => {
        // TODO: Move this to widget-service.js
        fetch(`http://localhost:8080/api/topics/${topicId}/widgets`,
            {
                method: 'POST',
                body: JSON.stringify({type: "HEADING", size: "2", text: "New heading widget"}),
                headers: {
                    "content-type": 'application/json'
                }
            })
            .then(response => response.json())
            .then(widget => setWidgets((widgets) => [...widgets, widget]))
    }

    const deleteWidget = (widgetId) => {
        fetch(`http://localhost:8080/api/widgets/${widgetId}`, {
            method: 'DELETE'
        })
            .then(status => {
                setWidgets((widgets) => widgets.filter(w => w.id !== widgetId))
            })
    }

    const updateWidget = (widgetId, widget) => {
        fetch(`http://localhost:8080/api/widgets/${widgetId}`, {
            method: 'PUT',
            body: JSON.stringify(widget),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(status => {
                setEditingWidget({})
                setWidgets((widgets) => widgets.map(w => w.id !== widgetId ? w : widget))
            })
    }

    return (
        <div>
            <i onClick={createWidget} className="fas fa-plus float-right fa-2x"/>
            <h2>Widget List ({widgets.length}) {editingWidget.id}</h2>
            <ul>
                {
                    widgets.map(widget =>
                        <li key={widget.id} className="list-group-item">
                            {
                                editingWidget.id === widget.id &&
                                <>
                                    <i onClick={() => {
                                        updateWidget(widget.id, editingWidget)
                                    }}
                                       className="fas fa-check float-right fa-2x"/>
                                    <i onClick={() => {
                                        setEditingWidget({})
                                        deleteWidget(widget.id)
                                    }}
                                       className="fas fa-trash float-right fa-2x"/>
                                </>
                            }
                            {
                                editingWidget.id !== widget.id &&
                                <i onClick={() => setEditingWidget(widget)}
                                   className="fas fa-2x fa-cog float-right"/>
                            }
                            {
                                widget.type === "HEADING" &&
                                <HeadingWidget
                                    widget={editingWidget.id === widget.id ? editingWidget : widget}
                                    editing={editingWidget.id === widget.id}
                                    setEditingWidget={setEditingWidget}/>
                            }
                            {
                                widget.type === "PARAGRAPH" &&
                                <ParagraphWidget widget={widget}
                                                 editing={editingWidget.id === widget.id}/>
                            }
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default WidgetList