import React from "react"
import ProductAction from "./ProductAction"
import '../style/style.css'

function ProductItem({id, name, image, sku, harga, kuantitas, market, onDelete, onView, onEdit}) {
    return(
        <tr>
            <td>{id}</td>
            <td>
                <img src={image} alt={name}/>
            </td>
            <td>{name}</td>
            <td>{sku}</td>
            <td>Rp. {harga}</td>
            <td>{kuantitas}</td>
            <td>{market}</td>
            <td><ProductAction id={id} onDelete={onDelete} onView={onView} onEdit={onEdit}/></td>
        </tr>
    )
}

export default ProductItem