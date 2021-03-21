import React, {useEffect, useState} from "react";
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {useParams} from "react-router-dom";
import widgetService from "../../../services/widget-service"
import {connect} from "react-redux";

const WidgetList = ({
                        widgets = [],
                        createWidget,
                        updateWidget,
                        deleteWidget,
                        findAllWidgetsForTopic
                    }) => {
    const {topicId} = useParams()

    const [editingWidget, setEditingWidget] = useState({});

    useEffect(() => {
        findAllWidgetsForTopic(topicId)
    }, [topicId]);

    return (
        <div className="ss-widget-form clearfix">
            {
                topicId !== undefined &&
                <i onClick={() => createWidget(topicId)}
                   className="fas fa-plus-circle fa-2x float-right fa-widget-add-icon ss-plus-icon"/>
            }
            <div className="clear"/>
            <div>
                <ul className="list-group ss-widget-list-group">
                    {
                        widgets.map(_widget =>
                            <li key={_widget.id} className="list-group-item">
                                {
                                    editingWidget.id === _widget.id &&
                                    <>
                                        <i onClick={() => {
                                            updateWidget(editingWidget)
                                            setEditingWidget({})
                                        }}
                                           className="fas fa-check float-right fa-lg"/>
                                        <i onClick={() => {
                                            deleteWidget(_widget.id)
                                            setEditingWidget({})
                                        }}
                                           className="fas fa-trash float-right fa-lg"/>
                                    </>
                                }
                                {
                                    editingWidget.id === _widget.id &&
                                    <select value={editingWidget.type}
                                            className="form-control ss-widget-form"
                                            onChange={(event) => {
                                                setEditingWidget({
                                                    ..._widget,
                                                    type: event.target.value
                                                })
                                            }}>
                                        <option value="HEADING">Heading</option>
                                        <option value="PARAGRAPH">Paragraph</option>
                                        <option disabled>Video</option>
                                        <option disabled>Image</option>
                                        <option disabled>Link</option>
                                        <option disabled>List</option>
                                        <option disabled>HTML</option>
                                    </select>
                                }
                                {
                                    editingWidget.id !== _widget.id &&
                                    <i onClick={() => setEditingWidget(_widget)}
                                       className="fas fa-lg fa-cog float-right"/>
                                }
                                {
                                    (_widget.id === editingWidget.id ? editingWidget.type === "HEADING" : _widget.type === "HEADING") &&
                                    <HeadingWidget
                                        widget={editingWidget.id === _widget.id ? editingWidget : _widget}
                                        editing={editingWidget.id === _widget.id}
                                        setEditingWidget={setEditingWidget}/>
                                }
                                {
                                    (_widget.id === editingWidget.id ? editingWidget.type === "PARAGRAPH" : _widget.type === "PARAGRAPH") &&
                                    <ParagraphWidget
                                        widget={editingWidget.id === _widget.id ? editingWidget : _widget}
                                        editing={editingWidget.id === _widget.id}
                                        setEditingWidget={setEditingWidget}/>
                                }

                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

const stpm = (state) => {
    return {
        widgets: state.widgetReducer.widgets
    }
}

const dtpm = (dispatch) => {
    return {
        createWidget: (topicId) => {
            widgetService.createWidget(topicId,
                {type: "HEADING", size: "1", text: "New heading widget"})
                .then(widget => dispatch({
                    type: "CREATE_WIDGET",
                    widget: widget
                }))
        },
        updateWidget: (widget) => {
            widgetService.updateWidget(widget.id, widget)
                .then(status => dispatch({
                    type: "UPDATE_WIDGET",
                    widgetToUpdate: widget
                }))
        },
        deleteWidget: (widget) => {
            widgetService.deleteWidget(widget.id)
                .then(status => dispatch({
                    type: "DELETE_WIDGET",
                    widgetToDelete: widget
                }))
        },
        findAllWidgetsForTopic: (topicId) => {
            widgetService.findWidgetsFromTopic(topicId)
                .then(theWidgets => dispatch({
                    type: "FIND_ALL_WIDGETS_FOR_TOPIC",
                    widgets: theWidgets
                }))
        },
        findWidget: () => {

        },
        findAllWidgets: () => {
        }
    }
}

export default connect(stpm, dtpm)(WidgetList)