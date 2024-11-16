import React from "react"
import '../style/style.css'
import Navbar from "./Navbar"
import ProductList from "./productList"

class ShopeePage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            product: JSON.parse(localStorage.getItem("products"))?.filter((produk) => produk.marketplace === "Shopee") || []
        }

        this.onDeletehandler = this.onDeletehandler.bind(this)
    }

    onDeletehandler(id) {
        const product = this.state.product.filter(produks => produks.id !== id)
        this.setState({product})
    }

    render() {
        return(
            <div className="shopee">
                <Navbar/>
                <ProductList product={this.state.product} onDelete={this.onDeletehandler}/>
            </div>
        )
    }
}

export default ShopeePage