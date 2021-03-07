import React, {useState} from 'react'

const EditableItem = (
    {
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
                    <a href="#" className="nav-link ss-link">
                        {item.title}
                    </a>
                    <i onClick={() => setEditing(true)} className="fas fa-edit"/>
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