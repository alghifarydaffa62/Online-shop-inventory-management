import React from "react"
import '../style/style.css'

class NewProduct extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            img: '',
            sku: '',
            price: '',
            quantity: '',
            marketplace: ''
        }

        this.onNamechange = this.onNamechange.bind(this)
        this.onImgchange = this.onImgchange.bind(this)
        this.onSkuchange = this.onSkuchange.bind(this)
        this.onPricechange = this.onPricechange.bind(this)
        this.onQuantitychange = this.onQuantitychange.bind(this)
        this.onMarketchange = this.onMarketchange.bind(this)
    }

    onNamechange(event) {
        this.setState(() => {
            return {
                name: event.target.value
            }
        })
    }

    onImgchange(event) {
        this.setState(() => {
            return {
                img: event.target.value
            }
        })
    }

    onSkuchange(event) {
        this.setState(() => {
            return {
                sku: event.target.value
            }
        })
    }

    onPricechange(event) {
        this.setState(() => {
            return {
                price: event.target.value
            }
        })
    }

    onQuantitychange(event) {
        this.setState(() => {
            return {
                quantity: event.target.value
            }
        })
    }

    onMarketchange(event) {
        this.setState(() => {
            return {
                marketplace: event.target.value
            }
        })
    }

    render() {
        return(
            <form className="Newproduct">
                <h2>Tambahkan Produk Baru</h2>

                <div className="product-input">
                    <div>
                        <label for="name">Nama produk:</label><br/>
                        <input placeholder="Nama produk" type="text" value={this.state.name} onChange={this.onNamechange}/><br/>
                        <label for="img">Gambar produk:</label><br/>
                        <input placeholder="Gambar produk" type="text" value={this.state.img} onChange={this.onImgchange}/><br/>
                        <label for="sku">Sku produk:</label><br/>
                        <input placeholder="Sku produk" type="text" value={this.state.sku} onChange={this.onSkuchange}/><br/>
                    </div>
                    
                    <div>
                        <label for="harga">Harga produk:</label><br/>
                        <input placeholder="Harga produk" type="number" value={this.state.price} onChange={this.onPricechange}/><br/>
                        <label for="quantity">Kuantitas produk:</label><br/>
                        <input placeholder="Kuantitas produk" type="number" value={this.state.quantity} onChange={this.onQuantitychange}/><br/>
                        <label for="marketplace">Marketplace produk:</label><br/>
                        <input placeholder="Marketplace produk" type="text" value={this.state.marketplace} onChange={this.onMarketchange}/><br/> 
                    </div>
                </div>
                <button type="submit">Submit</button>  
            </form>
        )
    }
}

export default NewProduct