import React, {useState} from 'react'
import {Link} from "react-router-dom";

const EditableItem = (
    {
        to,
        updateItem,
        deleteItem,
        item = {title: "Some title", _id: "ABC"},
        active
    }) => {

    const [editing, setEditing] = useState(false)
    const [cachedItem, setCachedItem] = useState(item)

    return (
        <>
            {
                !editing &&
                <span className={`btn-block nav-link ${active ? 'active' : ''}`}>
                    <Link to={to}>
                        {item.title}
                    </Link>
                    <i onClick={() => setEditing(true)}
                       className="fas fa-edit float-right ss-item-edit-icon"/>
                </span>
            }
            {
                editing &&
                <>
                    <input value={cachedItem.title}
                           onChange={(event) => setCachedItem({
                               ...cachedItem,
                               title: event.target.value
                           })}/>
                    <i onClick={() => {
                        setEditing(false)
                        updateItem(cachedItem)
                    }} className="fas fa-check ss-ie-check-icon float-right"/>
                    <i onClick={() => deleteItem(item)} className="fas fa-times ss-ie-times-icon float-right"/>
                </>
            }

        </>
    )
}

export default EditableItem