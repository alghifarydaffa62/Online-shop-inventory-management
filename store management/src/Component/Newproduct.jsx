import React from "react"
import '../style/style.css'

class NewProduct extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            image: '',
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
        this.onSubmithandler = this.onSubmithandler.bind(this)
    }

    onNamechange(event) {
        this.setState(() => {
            return {
                name: event.target.value
            }
        })
    }

    onImgchange(event) {
        const file = event.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = () => {
                this.setState({ image: reader.result })
            };
            reader.readAsDataURL(file)
        }
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

    onSubmithandler(event) {
        event.preventDefault()
        this.props.Addproduct(this.state)
        this.setState({
            name: '',
            image: '',
            sku: '',
            price: '',
            quantity: '',
            marketplace: ''
        })
    }

    render() {
        return(
            <form className="Newproduct" onSubmit={this.onSubmithandler}> 
                <h2>Tambahkan Produk Baru</h2>

                <div className="product-input">
                    <div>
                        <label >Nama produk:</label><br/>
                        <input placeholder="Nama produk" type="text" value={this.state.name} onChange={this.onNamechange}/><br/>
                        <label >Gambar produk:</label><br/>
                        <input placeholder="Gambar produk" type="file" value={this.state.img} onChange={this.onImgchange} accept="image/"/><br/>
                        <label >Sku produk:</label><br/>
                        <input placeholder="Sku produk" type="text" value={this.state.sku} onChange={this.onSkuchange}/><br/>
                    </div>
                    
                    <div>
                        <label >Harga produk:</label><br/>
                        <input placeholder="Harga produk" type="number" value={this.state.price} onChange={this.onPricechange}/><br/>
                        <label >Kuantitas produk:</label><br/>
                        <input placeholder="Kuantitas produk" type="number" value={this.state.quantity} onChange={this.onQuantitychange}/><br/>
                        <label >Marketplace produk:</label><br/>
                        <input placeholder="Marketplace produk" type="text" value={this.state.marketplace} onChange={this.onMarketchange}/><br/> 
                    </div>
                </div>
                <button type="submit">Submit</button>  
            </form>
        )
    }
}

export default NewProduct