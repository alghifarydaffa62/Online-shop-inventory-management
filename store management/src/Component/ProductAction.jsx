import React from "react"
import '../style/style.css'

function ProductAction({id, onDelete}) {
    return(
        <div className="action">
            <button className="delete" onClick={() => onDelete(id)}>Hapus</button>
            <button className="edit">Edit</button>
            <button className="view">View</button>
        </div>
    )
}

export default ProductAction