import React, {useEffect, useState} from "react";
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {useParams} from "react-router-dom";
import widgetService from "../../../services/widget-service"
import {connect} from "react-redux";
import ListWidget from "./list-widget";
import ImageWidget from "./image-widget";

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
                                           className="fas fa-check ss-widget-check-icon float-right fa-lg"/>
                                        <i onClick={() => {
                                            deleteWidget(editingWidget)
                                            setEditingWidget({})
                                        }}
                                           className="fas fa-trash ss-widget-trash-icon float-right fa-lg"/>
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
                                        <option value="LIST">List</option>
                                        <option value="IMAGE">Image</option>
                                        <option disabled>Video</option>
                                        <option disabled>Link</option>
                                        <option disabled>HTML</option>
                                    </select>
                                }
                                {
                                    editingWidget.id !== _widget.id &&
                                    <i onClick={() => setEditingWidget(_widget)}
                                       className="fas fa-lg fa-cog ss-widget-cog-icon float-right"/>
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
                                {
                                    (_widget.id === editingWidget.id ? editingWidget.type === "LIST" : _widget.type === "LIST") &&
                                    <ListWidget
                                        widget={editingWidget.id === _widget.id ? editingWidget : _widget}
                                        editing={editingWidget.id === _widget.id}
                                        setEditingWidget={setEditingWidget}/>
                                }
                                {
                                    (_widget.id === editingWidget.id ? editingWidget.type === "IMAGE" : _widget.type === "IMAGE") &&
                                    <ImageWidget
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