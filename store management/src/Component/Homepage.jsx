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
            viewProduct: null,
            editProduct: null
        }

        this.onDeletehandler = this.onDeletehandler.bind(this)
        this.AddProducthandler = this.AddProducthandler.bind(this)
        this.ViewHandler = this.ViewHandler.bind(this)
        this.editHandler = this.editHandler.bind(this)
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

    editHandler(id) {
        const editproduct = this.state.product.find(item => item.id == id)

        if(editproduct) {
            this.setState({editProduct: editproduct}, () => {
                document.body.classList.add("no-scroll")
            })
        }
    }
    
    close = (event) => {
        event.preventDefault()
        this.setState({editProduct: null}, () => {
            document.body.classList.remove("no-scroll")
        })
    }

    EditPopUp() {
        const {editProduct} = this.state
        if (!editProduct) return null
    
        return (
            <div className='overlay'>
                <form className="view-popup"> 
                    <h2>Tentang Produk</h2>
                    <div className="popup-input">
                        <div>
                            <label for="name">Nama produk:</label><br/>
                            <input type="text" value={editProduct.name}/><br/>

                            <label for="img">Gambar produk:</label><br/>
                            <img src={editProduct.image} alt="image"/><br/>

                            <label for="sku">Sku produk:</label><br/>
                            <input type="text" value={editProduct.sku} /><br/>
                        </div>
                        
                        <div>
                            <label for="harga">Harga produk:</label><br/>
                            <input type="number" value={editProduct.price}/><br/>

                            <label for="quantity">Kuantitas produk:</label><br/>
                            <input type="number" value={editProduct.quantity}/><br/>

                            <label for="marketplace">Marketplace produk:</label><br/>
                            <input type="text" value={editProduct.marketplace}y/><br/> 
                        </div>
                    </div>
                    <button onClick={this.close}>X</button>  
                </form>
            </div>  
        )
    }

    render() {
        return(
            <div className='Home'>
                <Navbar/>
                <NewProduct Addproduct = {this.AddProducthandler}/>
                {
                    this.ViewPopUp()
                }
                {
                    this.EditPopUp()
                }
                <ProductList product={this.state.product} onDelete={this.onDeletehandler} onView={this.ViewHandler} onEdit={this.editHandler}/>
            </div>
        )
    }
}

export default HomePage