import React from "react"
import '../style/style.css'

function ProductItem({id, name, image, sku, harga, kuantitas, market}) {
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
            <td>Hapus / Edit</td>
        </tr>
    )
}

export default ProductItem