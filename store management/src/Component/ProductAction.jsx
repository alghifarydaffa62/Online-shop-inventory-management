import React from "react"
import '../style/style.css'

function ProductAction({id, onDelete, onView, onEdit}) {
    return(
        <div className="action">
            <button className="delete" onClick={() => onDelete(id)}>Hapus</button>
            <button className="edit" onClick={() => onEdit(id)}>Edit</button>
            <button className="view" onClick={() => onView(id)}>View</button>
        </div>
    )
}

export default ProductAction