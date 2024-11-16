import React from 'react'
import { product } from '../utils/data'
import NewProduct from './Newproduct'
import ProductList from './productList'
import Navbar from './Navbar'
import '../style/style.css'

class HomePage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            product: product(),
            viewProduct: null
        }

        this.onDeletehandler = this.onDeletehandler.bind(this)
        this.AddProducthandler = this.AddProducthandler.bind(this)
        this.ViewHandler = this.ViewHandler.bind(this)
    }

    onDeletehandler(id) {
        const index = this.state.product.findIndex(p => p.id === id);
    
        if (index > -1) {
            this.state.product.splice(index, 1);
            const updatedProducts = [...this.state.product];
            localStorage.setItem('products', JSON.stringify(updatedProducts));
            
            this.setState({
            product: updatedProducts
            });
        }
    }

    AddProducthandler({name, image, sku, price, quantity, marketplace}) {
        const newProduct = {
            id: + new Date(),
            name,
            image,
            sku,
            price,
            quantity,
            marketplace,
        };
    
        this.setState((prevState) => {
            const updatedProducts = [...prevState.product, newProduct];
            localStorage.setItem("products", JSON.stringify(updatedProducts));
    
            return { product: updatedProducts };
        })
    }
    
    componentDidMount() {
        const savedProducts = JSON.parse(localStorage.getItem("products"));
        if (savedProducts) {
            this.setState({ product: savedProducts });
        }
    }

    ViewHandler(id) {
        const selectedproduct = this.state.product.find(item => item.id == id)

        if(selectedproduct) {
            this.setState({viewProduct: selectedproduct})
        }
    }

    closePopUp = (event) => {
        event.preventDefault()
        this.setState({viewProduct: null})
    }

    ViewPopUp() {
        const {viewProduct} = this.state
        if (!viewProduct) return null
    
        return (
            <form className="view-popup">
                <label for="name">Nama produk:</label><br/>
                <input type='text' value={viewProduct.name} readOnly/><br/>
                
                <label for="img">Gambar produk:</label><br/>        
                <img src={viewProduct.image} alt='produk'/><br/>
                
                <label for="sku">Sku produk:</label><br/>        
                <input type='text' value={viewProduct.sku} readOnly/><br/>
        
                <label for="harga">Harga produk:</label><br/>
                <input type='text' value={viewProduct.price} readOnly/><br/>
                        
                <label for="quantity">Kuantitas produk:</label><br/>
                <input type='text' value={viewProduct.quantity} readOnly/><br/>
                        
                <label for="marketplace">Marketplace produk:</label><br/>
                <input type='text' value={viewProduct.marketplace} readOnly/><br/>

                <button onClick={this.closePopUp}>Close</button>
            </form>
        )
    }

    render() {
        return(
            <div className='Home'>
                <Navbar/>
                <NewProduct Addproduct = {this.AddProducthandler}/>
                <ProductList product={this.state.product} onDelete={this.onDeletehandler} onView={this.ViewHandler}/>
                {
                    this.ViewPopUp()
                }
            </div>
        )
    }
}

export default HomePage