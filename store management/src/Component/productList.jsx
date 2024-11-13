import React from "react"
import ProductItem from "./productItem"
import '../style/style.css'

function ProductList({product}) {
    return(
        <div className="list-produk">
            <h1>DATA PRODUK</h1>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Nama</th>
                        <th>Sku</th>
                        <th>Harga</th>
                        <th>Kuantitas</th>
                        <th>Marketplace</th>
                        <th>Manage</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.map((produk) => (
                            <ProductItem
                                key={produk.id}
                                id={produk.id}
                                name={produk.name}
                                sku={produk.sku}
                                harga={produk.price}
                                kuantitas={produk.quantity}
                                market={produk.marketplace}
                            />
                        ))
                    }
                </tbody>
            </table>
        </div>
        
    )
}

export default ProductList