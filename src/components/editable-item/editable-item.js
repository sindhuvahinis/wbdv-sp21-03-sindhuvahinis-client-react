import React, {useState} from 'react'
import {Link} from "react-router-dom";

const EditableItem = (
    {
        to,
        updateItem,
        deleteItem = () => alert("delete 123"),
        item = {title: "Some title", _id: "ABC"}
    }) => {

    const [editing, setEditing] = useState(false)
    const [cachedItem, setCachedItem] = useState(item)

    return (
        <>
            {
                !editing &&
                <>
                    <Link to={to} className="nav-link">
                        {item.title}
                    </Link>
                    <i onClick={() => setEditing(true)} className="fas fa-edit float-right"/>
                </>
            }
            {
                editing &&
                <>
                    <input value={cachedItem.title} onChange={(event) => setCachedItem({
                        ...cachedItem,
                        title: event.target.value
                    })}/>
                    <i onClick={() => {
                        setEditing(false)
                        updateItem(cachedItem)
                    }} className="fas fa-check"/>
                    <i onClick={() => deleteItem(item)} className="fas fa-times"/>
                </>
            }

        </>
    )
}

export default EditableItem