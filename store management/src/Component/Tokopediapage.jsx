import React from "react"
import '../style/style.css'
import Navbar from "./Navbar"
import ProductList from "./productList"

class TokopediaPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            product: JSON.parse(localStorage.getItem("products"))?.filter((produk) => produk.marketplace === "Tokopedia") || [],
            viewProduct: null
        }

        this.onDeletehandler = this.onDeletehandler.bind(this)
        this.ViewHandler = this.ViewHandler.bind(this)
    }

    onDeletehandler(id) {
        const product = this.state.product.filter(produks => produks.id !== id)
        this.setState({product})
    }

    ViewHandler(id) {
        const selectedproduct = this.state.product.find(item => item.id == id)

        if(selectedproduct) {
            this.setState({viewProduct: selectedproduct}, () => {
                document.body.classList.add("no-scroll")
            })
        }
    }

    closePopUp = (event) => {
        event.preventDefault()
        this.setState({viewProduct: null}, () => {
            document.body.classList.remove("no-scroll")
        })
    }

    ViewPopUp() {
        const {viewProduct} = this.state
        if (!viewProduct) return null
    
        return (
            <div className='overlay'>
                <form className="view-popup"> 
                    <h2>Tentang Produk</h2>
                    <div className="popup-input">
                        <div>
                            <label for="name">Nama produk:</label><br/>
                            <input type="text" value={viewProduct.name} readOnly/><br/>

                            <label for="img">Gambar produk:</label><br/>
                            <img src={viewProduct.image} alt="image"/><br/>

                            <label for="sku">Sku produk:</label><br/>
                            <input type="text" value={viewProduct.sku} readOnly/><br/>
                        </div>
                        
                        <div>
                            <label for="harga">Harga produk:</label><br/>
                            <input type="number" value={viewProduct.price} readOnly/><br/>

                            <label for="quantity">Kuantitas produk:</label><br/>
                            <input type="number" value={viewProduct.quantity} readOnly/><br/>

                            <label for="marketplace">Marketplace produk:</label><br/>
                            <input type="text" value={viewProduct.marketplace} readOnly/><br/> 
                        </div>
                    </div>
                    <button onClick={this.closePopUp}>X</button>  
                </form>
            </div>  
        )
    }

    render() {
        return(
            <div className="tokopedia">
                <Navbar/>
                {
                    this.ViewPopUp()
                }
                <ProductList product={this.state.product} onDelete={this.onDeletehandler} onView={this.ViewHandler}/>
            </div>
        )
    }
}

export default TokopediaPage