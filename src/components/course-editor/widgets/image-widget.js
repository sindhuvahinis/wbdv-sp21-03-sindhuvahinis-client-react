import React from 'react'

const ImageWidget = ({widget, editing, setEditingWidget}) => {
    return (
        <div className="ss-image-widget-container">
            {
                !editing &&
                <img width={widget.width}
                     height={widget.height}
                     src={widget.src}/>
            }
            {
                editing &&
                <>
                    Image URL
                    <input className="form-control"
                           value={widget.src}
                           onChange={event => setEditingWidget({
                               ...widget,
                               src: event.target.value
                           })}/>

                    Image width
                    <input className="form-control"
                           type="number"
                           value={widget.width}
                           onChange={event => setEditingWidget({
                               ...widget,
                               width: event.target.value
                           })}/>
                    Image height
                    <input className="form-control"
                           type="number"
                           value={widget.height}
                           onChange={event => setEditingWidget({
                               ...widget,
                               height: event.target.value
                           })}/>
                </>
            }
        </div>
    )
}

export default ImageWidget