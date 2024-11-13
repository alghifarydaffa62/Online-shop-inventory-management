import React from "react"
import '../style/style.css'

class ProductList extends React.Component {
    render() {
        return(
            <table>
                <tr>
                    <th>id</th>
                    <th>Nama</th>
                    <th>Gambar</th>
                    <th>Sku</th>
                    <th>Harga</th>
                    <th>Kuantitas</th>
                    <th>Marketplace</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Lehnova thinkpad gen 11</td>
                    <td>IMG</td>
                    <td>Lehnova</td>
                    <td>Rp. 10000</td>
                    <td>10</td>
                    <td>Lazada</td>
                </tr>
            </table>
        )
        
    }
}

export default ProductList