import React from "react"
import '../style/style.css'
import Navbar from "./Navbar"
import ProductList from "./productList"
import { product } from "../utils/data"

class Lazadapage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            product: product().filter((produk) => produk.marketplace == "Lazada")
        }
    }

    render() {
        return(
        <div className="lazada">
            <Navbar/>
            <ProductList product={this.state.product}/>
        </div>
        )
    }
}

export default Lazadapage