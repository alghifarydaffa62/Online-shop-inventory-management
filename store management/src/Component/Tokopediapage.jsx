import React from "react"
import '../style/style.css'
import Navbar from "./Navbar"
import ProductList from "./productList"
import { product } from "../utils/data"

class TokopediaPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            product: product().filter((produk) => produk.marketplace == "Tokopedia")
        }
    }

    render() {
        return(
            <div className="tokopedia">
                <Navbar/>
                <ProductList product={this.state.product}/>
            </div>
        )
    }
}

export default TokopediaPage